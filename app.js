// --- ARQUIVO: app.js ---

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
    maxZoom: 19
});

const baseMaps = {
    "Mapa Escuro": darkMap,
    "Satélite": satelliteLayer,
    "Mapa Claro": lightMap 
};

L.control.layers(baseMaps).addTo(map);

// --- 3. REFERÊNCIAS DO PAINEL (DOM) ---
const infoPanel = document.getElementById('info-panel');
const panelImg = document.getElementById('panel-img');
const panelTitle = document.getElementById('panel-title');
const panelLocation = document.getElementById('panel-location');
const panelDesc = document.getElementById('panel-desc');
const closeBtn = document.getElementById('close-btn');
const panelEvent = document.getElementById('panel-event');
const panelWinner = document.getElementById('panel-winner');

// --- 4. FUNÇÕES DE INTERAÇÃO ---
function abrirPainel(pista) {
    panelImg.src = pista.imagemUrl;
    panelImg.alt = `Foto da pista ${pista.nome}`;
    panelTitle.textContent = pista.nome;
    panelLocation.textContent = pista.localizacao;
    panelDesc.textContent = pista.descricao;
    panelEvent.textContent = pista.ultimoEvento;
    panelWinner.textContent = pista.ultimoVencedor;
    infoPanel.classList.remove('hidden');
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

closeBtn.addEventListener('click', fecharPainel);
map.on('click', fecharPainel);