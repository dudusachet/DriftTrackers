// --- ARQUIVO: app.js ---
// Aplicação principal do Drift Map App (versão modular com ES Modules) 
// 1. IMPORTA os dados do nosso novo arquivo
import pistas from './tracks.js';

console.log("Drift Map App (Módulo) Iniciado. Pistas carregadas:", pistas.length);

// --- 2. INICIALIZAÇÃO DO MAPA ---
const darkMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>...',
    maxZoom: 20
});

const lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>...',
    maxZoom: 20
});

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri...',
    maxZoom: 20
});

const map = L.map('map', {
    layers: [satelliteLayer],
    center: [40, -5],
    zoom: 3,
    minZoom: 2,
    maxZoom: 19,
    worldCopyJump: true, // ensures markers stay visible when crossing dateline copies
    maxBoundsViscosity: 0.8 // sticky bounds when maxBounds is set
});

const baseMaps = {
    "Mapa Escuro": darkMap,
    "Satélite": satelliteLayer,
    "Mapa Claro": lightMap
};

L.control.layers(baseMaps).addTo(map);

// --- Map error detection & recovery ---
const mapOverlay = document.getElementById('map-overlay');
const mapOverlayText = document.getElementById('map-overlay-text');
const mapRetryBtn = document.getElementById('map-retry');

function showMapOverlay(msg) {
    if (mapOverlayText) mapOverlayText.textContent = msg || 'O mapa não pôde ser carregado.';
    if (mapOverlay) mapOverlay.classList.remove('hidden');
}
function hideMapOverlay() { if (mapOverlay) mapOverlay.classList.add('hidden'); }

// Detecta falhas de carregamento de tiles
if (lightMap && lightMap.on) lightMap.on('tileerror', () => showMapOverlay('Erro ao carregar camadas do mapa (OpenStreetMap).'));
if (satelliteLayer && satelliteLayer.on) satelliteLayer.on('tileerror', () => showMapOverlay('Erro ao carregar camadas satélite.'));

// Quando o mapa estiver pronto, tenta corrigir render e esconde overlay
map.whenReady(() => {
    hideMapOverlay();
    setTimeout(() => map.invalidateSize(), 250);
    setTimeout(() => map.invalidateSize(), 1000);
});

// Permite recarregar a página ao clicar em "Recarregar mapa"
if (mapRetryBtn) mapRetryBtn.addEventListener('click', () => { hideMapOverlay(); window.location.reload(); });

// Ajusta tamanho do mapa em resize para prevenir artefatos
window.addEventListener('resize', () => { setTimeout(() => map.invalidateSize(), 150); });

// --- 3. REFERÊNCIAS DO PAINEL (DOM) ---
const infoPanel = document.getElementById('info-panel');
const panelImg = document.getElementById('panel-img');
const panelTitle = document.getElementById('panel-title');
const panelLocation = document.getElementById('panel-location');
const panelDesc = document.getElementById('panel-desc');
const closeBtn = document.getElementById('close-btn');
const panelEvent = document.getElementById('panel-event');
const panelWinner = document.getElementById('panel-winner');

// Cache simples em memória para evitar re-downloads durante a sessão
const imageCache = new Map();
const FALLBACK_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250'><rect width='100%' height='100%' fill='#333'/><text x='50%' y='50%' fill='#999' font-size='20' text-anchor='middle' dominant-baseline='middle'>Imagem indisponível</text></svg>`;
const FALLBACK_DATA = 'data:image/svg+xml;utf8,' + encodeURIComponent(FALLBACK_SVG);

function escapeForSvg(text) {
    return String(text).replace(/[&"'<>]/g, c => ({ '&': '&amp;', '"': '&quot;', "'": '&apos;', '<': '&lt;', '>': '&gt;' }[c]));
}

function makeTrackPlaceholder(pista, w = 600, h = 400) {
    const title = escapeForSvg(pista.nome || 'Imagem');
    const svg = `<?xml version='1.0' encoding='utf-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><rect width='100%' height='100%' fill='#333'/><text x='50%' y='50%' fill='#ddd' font-size='28' text-anchor='middle' dominant-baseline='middle' font-family='Arial,Helvetica,sans-serif'>${title}</text></svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// --- 4. FUNÇÕES DE INTERAÇÃO ---
async function abrirPainel(pista) {
    // Atualiza textos imediatamente
    panelTitle.textContent = pista.nome;
    panelLocation.textContent = pista.localizacao;
    panelDesc.textContent = pista.descricao;
    panelEvent.textContent = pista.ultimoEvento;
    panelWinner.textContent = pista.ultimoVencedor;

    const carousel = document.querySelector('.carousel');
    const track = carousel.querySelector('.carousel-track');
    const dots = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');

    // Limpa o estado antigo
    track.innerHTML = '';
    dots.innerHTML = '';
    currentSlideIndex = 0;

    // Indicador de loading: aplicar classe ao container
    carousel.classList.add('loading');

    // Prioriza imagens definidas manualmente em `tracks.js` (se existir)
    let images = carouselCache.get(pista.id);
    if (!images) {
        if (Array.isArray(pista.imagens) && pista.imagens.length > 0) {
            images = pista.imagens.map(s => (typeof s === 'string' ? { src: s } : s));
        } else if (pista.imagemUrl) {
            images = [{ src: pista.imagemUrl }];
        } else {
            // busca unificada (Unsplash + Commons) com termos adicionais
            images = await fetchImages(pista.nome, 8);
        }

        if (!images || images.length === 0) {
            const fallback = imageCache.get(pista.id) || makeTrackPlaceholder(pista, 600, 400);
            images = [fallback];
        }
        carouselCache.set(pista.id, images);
    }

    buildCarousel(images);

    // esconder setas se houver apenas uma imagem (acessibilidade: remove do tab order)
    const hasMultiple = images && images.length > 1;
    if (prevBtn) {
        prevBtn.style.display = hasMultiple ? '' : 'none';
        prevBtn.setAttribute('aria-hidden', hasMultiple ? 'false' : 'true');
        prevBtn.tabIndex = hasMultiple ? 0 : -1;
        prevBtn.onclick = hasMultiple ? () => moveSlide(-1) : null;
    }
    if (nextBtn) {
        nextBtn.style.display = hasMultiple ? '' : 'none';
        nextBtn.setAttribute('aria-hidden', hasMultiple ? 'false' : 'true');
        nextBtn.tabIndex = hasMultiple ? 0 : -1;
        nextBtn.onclick = hasMultiple ? () => moveSlide(1) : null;
    }

    // teclado
    document.addEventListener('keydown', keyboardHandler);

    // touch swipe
    enableTouchSwipe(carousel);

    // remove loading
    carousel.classList.remove('loading');

    infoPanel.classList.remove('hidden');
}

// --- Carousel helpers ---
let currentSlideIndex = 0;
const carouselCache = new Map();

function buildCarousel(images) {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelector('.carousel-dots');
    track.innerHTML = '';
    dots.innerHTML = '';

    images.forEach((item, i) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.setAttribute('role', 'listitem');
        const img = document.createElement('img');
        // item pode ser string (src) ou objeto { src, credit, link }
        const src = (typeof item === 'string') ? item : item.src;
        const credit = (typeof item === 'object' && item.credit) ? item.credit : null;
        img.src = src;
        img.alt = `Foto ${i + 1}` + (credit ? ` — ${credit}` : '');
        if (credit) img.title = credit;
        img.loading = 'lazy';
        img.decoding = 'async';
        slide.appendChild(img);
        track.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Ir para imagem ${i + 1}`);
        dot.onclick = () => goToSlide(i);
        dots.appendChild(dot);
    });

    // Hide dots if only one image (accessibility: remove from tab order)
    const hasMultiple = images && images.length > 1;
    if (dots) {
        dots.style.display = hasMultiple ? '' : 'none';
        dots.setAttribute('aria-hidden', hasMultiple ? 'false' : 'true');
        const dotButtons = dots.querySelectorAll('.carousel-dot');
        dotButtons.forEach(d => d.tabIndex = hasMultiple ? 0 : -1);
    }

    // set initial active
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const slides = track.children.length;
    if (slides === 0) return;
    currentSlideIndex = ((currentSlideIndex % slides) + slides) % slides;
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlideIndex));
}

function moveSlide(delta) {
    currentSlideIndex += delta;
    updateCarousel();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
}

function keyboardHandler(e) {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
}

function enableTouchSwipe(container) {
    let startX = null;
    container.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    container.addEventListener('touchend', (e) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const dx = endX - startX;
        if (Math.abs(dx) > 40) { if (dx > 0) moveSlide(-1); else moveSlide(1); }
        startX = null;
    });
}

// --- Wikimedia Commons fetch (mais focado) ---
async function fetchCommonsImages(query, limit = 6) {
    // Tenta várias consultas progressivamente para aumentar relevância
    const queries = [
        `intitle:"${query}"`,
        `${query} racetrack`,
        `${query} circuit`,
        `${query} drift`,
        `${query}`
    ];

    for (const q of queries) {
        try {
            const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrlimit=${Math.max(limit, 10)}&prop=pageimages&piprop=original&formatversion=2`;
            const res = await fetch(api);
            const data = await res.json();
            if (!data.query || !data.query.pages) continue;
            const pages = data.query.pages;
            // Prefer páginas cujo título contém o nome da pista (mais relevantes)
            const matched = pages.filter(p => p.title && p.title.toLowerCase().includes(query.toLowerCase()));
            const chosen = (matched.length ? matched : pages).map(p => ({ src: p.original && p.original.source, credit: p.title })).filter(i => i.src);
            // Dedup e retorna máximo 'limit'
            const seen = new Set();
            const result = [];
            for (const item of chosen) {
                if (seen.has(item.src)) continue;
                seen.add(item.src);
                result.push(item);
                if (result.length >= limit) break;
            }
            if (result.length) return result;
        } catch (err) {
            console.warn('Erro ao buscar imagens no Commons (consulta:', q, '):', err);
            // continuar para próxima consulta
        }
    }
    return [];
}

// --- Unsplash fetch (opcional, com filtragem por relevância) ---
async function fetchUnsplashImages(query, limit = 6) {
    if (!UNSPLASH_ACCESS_KEY) return [];
    const queries = [`${query} racetrack`, `${query} circuit`, `${query} drift`, query];
    const collected = [];
    try {
        for (const q of queries) {
            const api = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=${Math.max(limit, 6)}&orientation=landscape`;
            const res = await fetch(api, { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } });
            if (!res.ok) continue;
            const data = await res.json();
            if (!data.results) continue;

            for (const r of data.results) {
                const item = { src: r.urls.regular, credit: r.user && `${r.user.name} (Unsplash)`, alt: r.alt_description || r.description };
                collected.push(item);
            }
            // pare cedo se já coletamos suficientes
            if (collected.length >= limit) break;
        }

        // Filtrar e priorizar resultados que pareçam mais relevantes (alt/descrição contém o nome)
        const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        const relevant = [];
        const others = [];
        for (const it of collected) {
            const text = ((it.alt || '') + ' ' + (it.credit || '')).toLowerCase();
            const has = terms.some(t => text.includes(t));
            (has ? relevant : others).push(it);
        }
        const merged = [...relevant, ...others];
        // Dedup por src e limitar
        const seen = new Set();
        const resArr = [];
        for (const it of merged) {
            if (seen.has(it.src)) continue;
            seen.add(it.src);
            resArr.push(it);
            if (resArr.length >= limit) break;
        }
        return resArr;
    } catch (err) {
        console.warn('Erro ao buscar imagens no Unsplash:', err);
        return [];
    }
}

// Busca combinada (Commons + Unsplash) e mescla deduplicando
async function fetchImages(query, limit = 8) {
    try {
        const [commonsRes, unsplashRes] = await Promise.allSettled([
            fetchCommonsImages(query, Math.max(3, Math.floor(limit / 2))),
            fetchUnsplashImages(query, Math.max(3, Math.ceil(limit / 2)))
        ]);
        const commons = commonsRes.status === 'fulfilled' ? commonsRes.value : [];
        const unsplash = unsplashRes.status === 'fulfilled' ? unsplashRes.value : [];
        // Prioriza Unsplash (mais relevantes/qualidade) e em seguida Commons
        const combined = [...unsplash, ...commons];
        // Remove duplicatas por src
        const seen = new Set();
        const result = [];
        for (const item of combined) {
            const src = item && item.src ? item.src : (typeof item === 'string' ? item : null);
            if (!src) continue;
            if (seen.has(src)) continue;
            seen.add(src);
            result.push(item);
            if (result.length >= limit) break;
        }
        return result;
    } catch (err) {
        console.warn('Erro ao mesclar imagens:', err);
        return [];
    }
}

function fecharPainel() {
    infoPanel.classList.add('hidden');
}

// --- 5. CRIAR MARCADORES E EVENTOS ---
const iconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBmaWxsPSIjNGE5MGUyIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg==';

const driftIcon = L.icon({
    iconUrl: iconSvg,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
    tooltipAnchor: [12, -6]
});

// O array 'pistas' agora vem do 'import'
pistas.forEach(pista => {
    const marker = L.marker(pista.coordenadas, {
        icon: driftIcon
    }).addTo(map);

    marker.bindTooltip(pista.nome);

    marker.on('click', () => {
        abrirPainel(pista);
    });
});

// Define limites de pan com base nas pistas para evitar que marcadores desapareçam quando o usuário arrasta muito para os lados
try {
    const allCoords = pistas.map(p => p.coordenadas).filter(Boolean);
    if (allCoords.length > 0) {
        const bounds = L.latLngBounds(allCoords);
        const padded = bounds.pad(0.6);
        map.setMaxBounds(padded);
        // reforça viscosidade caso algum mapa inicial tenha sido criado sem a opção
        map.options.maxBoundsViscosity = 0.8;
    }
} catch (err) {
    console.warn('Não foi possível definir limites do mapa (maxBounds):', err);
}

// Prefetch suave das primeiras imagens para melhorar tempo percebido ao abrir o painel.
// Executa após 2s para não competir com recursos críticos de inicialização.
setTimeout(() => {
    const PREFETCH_COUNT = 3;
    pistas.slice(0, PREFETCH_COUNT).forEach(p => {
        if (!imageCache.has(p.id)) {
            const pre = new Image();
            pre.decoding = 'async';
            pre.src = p.imagemUrl;
            pre.onload = () => imageCache.set(p.id, p.imagemUrl);
        }
    });
}, 2000);

closeBtn.addEventListener('click', fecharPainel);
map.on('click', fecharPainel);