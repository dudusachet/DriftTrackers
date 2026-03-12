// --- ARQUIVO: app.js ---
// DriftTrackers — Mapa Interativo de Pistas de Drift
import pistas from './tracks.js';

console.log("DriftTrackers Iniciado. Pistas carregadas:", pistas.length);

// === CORES POR CAMPEONATO ===
const CAMP_COLORS = {
    'Formula Drift': '#ff4444',
    'D1GP': '#ff9800',
    'Drift Masters': '#2196f3',
    'King of Nations': '#9c27b0',
    'Gatebil': '#4caf50',
    'Regional': '#78909c'
};

// === MAPA ===
const darkMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>',
    maxZoom: 20
});
const lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 20
});
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 20
});

const map = L.map('map', {
    layers: [satelliteLayer],
    center: [30, 10],
    zoom: 3,
    minZoom: 2,
    maxZoom: 19,
    worldCopyJump: true
});

L.control.layers({ "Satélite": satelliteLayer, "Mapa Escuro": darkMap, "Mapa Claro": lightMap }).addTo(map);

// Map error recovery
const mapOverlay = document.getElementById('map-overlay');
const mapRetryBtn = document.getElementById('map-retry');
function showMapOverlay(msg) { if (mapOverlay) { document.getElementById('map-overlay-text').textContent = msg; mapOverlay.classList.remove('hidden'); } }
function hideMapOverlay() { if (mapOverlay) mapOverlay.classList.add('hidden'); }
satelliteLayer.on('tileerror', () => showMapOverlay('Erro ao carregar camadas satélite.'));
map.whenReady(() => { hideMapOverlay(); setTimeout(() => map.invalidateSize(), 300); });
if (mapRetryBtn) mapRetryBtn.addEventListener('click', () => window.location.reload());
window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(), 150));

// === DOM REFS ===
const infoPanel = document.getElementById('info-panel');
const panelTitle = document.getElementById('panel-title');
const panelLocation = document.getElementById('panel-location');
const panelDesc = document.getElementById('panel-desc');
const panelEvent = document.getElementById('panel-event');
const panelWinner = document.getElementById('panel-winner');
const panelBadge = document.getElementById('panel-badge');
const closeBtn = document.getElementById('close-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const counterNum = document.getElementById('counter-num');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCredit = document.getElementById('lightbox-credit');

// Novas features
const btnStreetView = document.getElementById('btn-streetview');
const hudCoords = document.getElementById('hud-coords');
const hudZoom = document.getElementById('hud-zoom');
const hudVisible = document.getElementById('hud-visible');
const btnRoulette = document.getElementById('btn-roulette');
const rouletteOverlay = document.getElementById('roulette-overlay');
const rouletteText = document.getElementById('roulette-text');

// === MARCADORES RADAR PULSANTES ===
function createColorIcon(color) {
    const html = `<div class="radar-marker" style="--marker-color: ${color}">
        <div class="radar-core"></div>
        <div class="radar-ring"></div>
    </div>`;
    return L.divIcon({
        html: html,
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
    });
}

const markerIcons = {};
for (const [camp, color] of Object.entries(CAMP_COLORS)) {
    markerIcons[camp] = createColorIcon(color);
}

// Store markers for filtering
const allMarkers = [];
let activeFilter = 'all';

pistas.forEach(pista => {
    const color = CAMP_COLORS[pista.campeonato] || '#78909c';
    const icon = markerIcons[pista.campeonato] || markerIcons['Regional'];
    
    const marker = L.marker(pista.coordenadas, { icon })
        .addTo(map)
        .bindTooltip(pista.nome, { direction: 'top', offset: [0, -35] });
    
    marker.on('click', () => {
        map.flyTo(pista.coordenadas, Math.max(map.getZoom(), 8), { duration: 0.8 });
        abrirPainel(pista);
    });
    
    allMarkers.push({ marker, pista });
});

// Update counter and HUD
function updateCounter() {
    const visible = allMarkers.filter(m => map.hasLayer(m.marker)).length;
    if (counterNum) counterNum.textContent = visible;
    if (hudVisible) hudVisible.textContent = visible;
}
updateCounter();

// === HUD DE TELEMETRIA ===
function updateHUD() {
    if (!hudCoords || !hudZoom) return;
    const center = map.getCenter();
    hudCoords.textContent = `${center.lat.toFixed(4)}, ${center.lng.toFixed(4)}`;
    hudZoom.textContent = `${map.getZoom().toFixed(1)}x`;
}
map.on('move', updateHUD);
map.on('zoom', updateHUD);
updateHUD();

// === ROLETA DE PISTAS (ALEATÓRIA) ===
if (btnRoulette && rouletteOverlay && rouletteText) {
    btnRoulette.addEventListener('click', () => {
        if (pistas.length === 0) return;
        
        // Esconde menu e painel se abertos
        infoPanel.classList.add('hidden');
        searchResults.classList.add('hidden');
        
        rouletteOverlay.classList.remove('hidden');
        
        let laps = 0;
        const maxLaps = 20;
        let speed = 50;
        
        function spin() {
            const randomPista = pistas[Math.floor(Math.random() * pistas.length)];
            rouletteText.textContent = randomPista.nome.toUpperCase();
            
            laps++;
            if (laps < maxLaps) {
                speed += 10; // desacelera aos poucos
                setTimeout(spin, speed);
            } else {
                // Sorteio Final
                rouletteText.style.color = 'var(--accent)';
                setTimeout(() => {
                    rouletteOverlay.classList.add('hidden');
                    rouletteText.style.color = '#fff';
                    map.flyTo(randomPista.coordenadas, 14, { duration: 2.5, easeLinearity: 0.25 });
                    
                    // Abre o painel após o voo chegar
                    map.once('moveend', () => {
                        abrirPainel(randomPista);
                    });
                }, 1000);
            }
        }
        spin();
    });
}

// === FILTROS ===
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.dataset.filter;
        
        allMarkers.forEach(({ marker, pista }) => {
            if (activeFilter === 'all' || pista.campeonato === activeFilter) {
                if (!map.hasLayer(marker)) marker.addTo(map);
            } else {
                if (map.hasLayer(marker)) map.removeLayer(marker);
            }
        });
        updateCounter();
    });
});

// === BUSCA ===
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 2) { searchResults.classList.add('hidden'); return; }
    
    const matches = pistas.filter(p =>
        p.nome.toLowerCase().includes(query) ||
        p.localizacao.toLowerCase().includes(query) ||
        p.campeonato.toLowerCase().includes(query)
    ).slice(0, 8);
    
    if (matches.length === 0) { searchResults.classList.add('hidden'); return; }
    
    searchResults.innerHTML = matches.map((p, index) => {
        const color = CAMP_COLORS[p.campeonato] || '#78909c';
        const delay = index * 0.05; // Cascata
        return `<li data-id="${p.id}" class="staggered-item" style="animation-delay: ${delay}s">
            <span class="sr-name">${p.nome}</span>
            <span class="sr-loc">${p.localizacao}</span>
            <span class="sr-badge" style="background:${color}">${p.campeonato}</span>
        </li>`;
    }).join('');
    searchResults.classList.remove('hidden');
    
    searchResults.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            const pista = pistas.find(p => p.id === li.dataset.id);
            if (pista) {
                map.flyTo(pista.coordenadas, 12, { duration: 1 });
                abrirPainel(pista);
                searchInput.value = '';
                searchResults.classList.add('hidden');
            }
        });
    });
});

// Close search on click outside
document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
    }
});

// === PAINEL ===
let currentSlideIndex = 0;
let currentImages = [];

async function abrirPainel(pista) {
    panelTitle.textContent = pista.nome;
    panelLocation.textContent = pista.localizacao;
    panelDesc.textContent = pista.descricao;
    panelEvent.textContent = pista.ultimoEvento;
    panelWinner.textContent = pista.ultimoVencedor;
    
    // Badge
    const color = CAMP_COLORS[pista.campeonato] || '#78909c';
    panelBadge.textContent = pista.campeonato;
    panelBadge.style.background = color + '22';
    panelBadge.style.color = color;
    panelBadge.style.border = `1px solid ${color}44`;
    
    // Botão Street View
    if (btnStreetView) {
        btnStreetView.classList.remove('hidden');
        // Usar api do google maps para abrir coords exatas
        const url = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${pista.coordenadas[0]},${pista.coordenadas[1]}`;
        btnStreetView.href = url;
    }
    
    // Carousel
    const carousel = document.querySelector('.carousel');
    const track = carousel.querySelector('.carousel-track');
    const dots = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    
    track.innerHTML = '';
    dots.innerHTML = '';
    currentSlideIndex = 0;
    
    currentImages = pista.imagens || [];
    
    // Se a pista não tem imagens definidas, ou as URLs estão falhando, buscamos dinamicamente
    if (currentImages.length === 0) {
        // Indicador de carregamento
        carousel.classList.add('loading');
        
        try {
            // Em vez de busca genérica que traz lixo (ex: livros sobre "drift"), forçamos busca por frase exata
            let hasRaceKeywords = /(circuit|speedway|raceway|park|ring|motor)/i.test(pista.nome);
            
            // Tentativa 1: Nome exato, forçando como frase entre aspas
            let fetched = await fetchCommonsImages(`"${pista.nome}"`, 3);
            
            // Tentativa 2: Nome exato + campeonato
            if (!fetched || fetched.length === 0) {
                fetched = await fetchCommonsImages(`"${pista.nome}" ${pista.campeonato}`, 3);
            }
            
            // Tentativa 3: Se não tiver keywords de corrida no nome, tenta com "circuit" ou "speedway"
            if (!fetched || fetched.length === 0) {
                if (!hasRaceKeywords) {
                    fetched = await fetchCommonsImages(`"${pista.nome}" circuit`, 3);
                    if (!fetched || fetched.length === 0) {
                        fetched = await fetchCommonsImages(`"${pista.nome}" speedway`, 3);
                    }
                }
            }
            
            if (fetched && fetched.length > 0) currentImages = fetched;
        } catch (e) {
            console.error("Erro ao buscar imagens:", e);
        }
        
        carousel.classList.remove('loading');
    }
    
    if (currentImages.length === 0) {
        // Fallback placeholder se realmente não encontrar nada
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:#1a1a2e;color:#555;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg><span style="margin-top:8px;font-size:0.8rem;">Sem imagem disponível</span></div>`;
        track.appendChild(slide);
    } else {
        currentImages.forEach((img, i) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `
                <img src="${img.src}" alt="Foto ${i+1} — ${img.credit || ''}" loading="lazy" 
                     onerror="this.style.display='none';this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;background:#1a1a2e;color:#555;font-size:0.8rem;\\'>Imagem indisponível</div>'">
                ${img.credit ? `<span class="img-credit">${img.credit}</span>` : ''}`;
            slide.addEventListener('click', () => openLightbox(i));
            track.appendChild(slide);
            
            if (currentImages.length > 1) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Imagem ${i+1}`);
                dot.addEventListener('click', () => goToSlide(i));
                dots.appendChild(dot);
            }
        });
    }
    
    const hasMultiple = currentImages.length > 1;
    if (prevBtn) { prevBtn.style.display = hasMultiple ? '' : 'none'; prevBtn.onclick = hasMultiple ? () => moveSlide(-1) : null; }
    if (nextBtn) { nextBtn.style.display = hasMultiple ? '' : 'none'; nextBtn.onclick = hasMultiple ? () => moveSlide(1) : null; }
    
    document.addEventListener('keydown', keyboardHandler);
    enableTouchSwipe(carousel);
    
    infoPanel.classList.remove('hidden');
}

// Carousel navigation
function moveSlide(dir) {
    if (currentImages.length <= 1) return;
    currentSlideIndex = (currentSlideIndex + dir + currentImages.length) % currentImages.length;
    updateCarousel();
}

function goToSlide(i) {
    currentSlideIndex = i;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlideIndex));
}

function keyboardHandler(e) {
    if (e.key === 'Escape') fecharPainel();
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
}

function enableTouchSwipe(el) {
    let startX = 0;
    el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) moveSlide(diff > 0 ? 1 : -1);
    }, { passive: true });
}

function fecharPainel() {
    infoPanel.classList.add('hidden');
    document.removeEventListener('keydown', keyboardHandler);
    closeLightbox();
}

closeBtn.addEventListener('click', fecharPainel);

// === LIGHTBOX ===
let lightboxIndex = 0;

function openLightbox(index) {
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.remove('hidden');
    document.addEventListener('keydown', lightboxKeyHandler);
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    document.removeEventListener('keydown', lightboxKeyHandler);
}

function updateLightbox() {
    const img = currentImages[lightboxIndex];
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.credit || 'Imagem da pista';
    lightboxCredit.textContent = img.credit || '';
    
    const hasMultiple = currentImages.length > 1;
    document.getElementById('lightbox-prev').style.display = hasMultiple ? '' : 'none';
    document.getElementById('lightbox-next').style.display = hasMultiple ? '' : 'none';
}

function lightboxKeyHandler(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + currentImages.length) % currentImages.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % currentImages.length; updateLightbox(); }
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => { lightboxIndex = (lightboxIndex - 1 + currentImages.length) % currentImages.length; updateLightbox(); });
document.getElementById('lightbox-next').addEventListener('click', () => { lightboxIndex = (lightboxIndex + 1) % currentImages.length; updateLightbox(); });
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

// === WIKIMEDIA COMMONS API FETCHER ===
const commonsCache = new Map();

async function fetchCommonsImages(query, limit = 3) {
    if (commonsCache.has(query)) return commonsCache.get(query);
    
    if (!query || query.trim() === '""' || query.trim() === '') return null;

    // Use a API de busca do Wikimedia Commons
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=800&format=json&origin=*`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.query && data.query.pages) {
            const pages = Object.values(data.query.pages);
            const images = pages.map(page => {
                if (!page.imageinfo || !page.imageinfo[0]) return null;
                const info = page.imageinfo[0];
                let credit = 'Wikimedia Commons';
                if (info.extmetadata) {
                    const artist = info.extmetadata.Artist ? info.extmetadata.Artist.value.replace(/<[^>]*>?/gm, '') : '';
                    if (artist) credit = artist;
                }
                return {
                    src: info.thumburl || info.url,
                    credit: credit,
                    link: page.imageinfo[0].descriptionurl
                };
            }).filter(img => img !== null);
            
            if (images.length > 0) {
                commonsCache.set(query, images);
                return images;
            }
        }
    } catch (e) {
        console.error("Wikimedia fetch error for", query, e);
    }
    
    commonsCache.set(query, null);
    return null;
}