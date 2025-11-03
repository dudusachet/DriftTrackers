document.addEventListener('DOMContentLoaded', () => {

    console.log("Drift Map App Iniciado com Sucesso.");

    // --- 1. DADOS (Coordenadas Refinadas) ---
    const pistas = [
        { 
            id: 'long_beach', nome: "Streets of Long Beach", localizacao: "Long Beach, CA, EUA", 
            coordenadas: [33.7660, -118.1924], // REFINADO: Mais próximo da curva 9/10
            descricao: "Pista de rua icônica, usada para a abertura da Formula Drift. O percurso é técnico...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Long+Beach", 
            ultimoEvento: "Formula Drift PRO (Round 1) - Abril 2025", ultimoVencedor: "Fredric Aasbo" 
        },
        { 
            id: 'irwindale', nome: "Irwindale Speedway", localizacao: "Irwindale, CA, EUA", 
            coordenadas: [34.1120, -117.9855], // REFINADO: Bem no centro do oval
            descricao: "Conhecida como 'A Casa do Drift', foi por muito tempo a pista da final...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Irwindale", 
            ultimoEvento: "Formula Drift PRO (Final Round) - 2024", ultimoVencedor: "James Deane" 
        },
        { 
            id: 'ebisu', nome: "Ebisu Circuit (Minami)", localizacao: "Nihonmatsu, Japão", 
            coordenadas: [37.6974, 140.5180], // REFINADO: Em cima do "salto" da Minami
            descricao: "A 'Meca' do drift. Um complexo com múltiplas pistas, famoso pela Minami...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Ebisu+Circuit", 
            ultimoEvento: "D1GP 2025 (Round 5 & 6)", ultimoVencedor: "Ryu Nakamura" 
        },
        { 
            id: 'riga', nome: "Biķernieku Trase", localizacao: "Riga, Letônia", 
            coordenadas: [56.9663, 24.2311], // REFINADO: Na curva principal do Drift Masters
            descricao: "Uma das pistas mais rápidas e assustadoras do calendário do Drift Masters...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Riga+Baby", 
            ultimoEvento: "Drift Masters 2025 (Round 5)", ultimoVencedor: "Piotr Wiecek" 
        },
        { 
            id: 'mondello', nome: "Mondello Park", localizacao: "Co. Kildare, Irlanda", 
            coordenadas: [53.2756, -6.7573], // REFINADO: No complexo de drift
            descricao: "O coração do drift irlandês. Uma pista técnica...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Mondello+Park", 
            ultimoEvento: "Drift Masters 2025 (Round 4)", ultimoVencedor: "Piotr Wiecek" 
        },
        { 
            id: 'warsaw', nome: "PGE Narodowy (Estádio)", localizacao: "Warsaw, Polônia", 
            coordenadas: [52.2387, 21.0452], // OK
            descricao: "Um espetáculo único. Uma pista customizada dentro do estádio nacional...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Warsaw+Finale", 
            ultimoEvento: "Drift Masters Grand Finale 2025", ultimoVencedor: "Conor Shanahan" 
        },
        { 
            id: 'englishtown', nome: "Englishtown Raceway Park", localizacao: "Englishtown, NJ, EUA", 
            coordenadas: [40.3515, -74.3704], // REFINADO: No "great bank" da Formula D
            descricao: "A única arena construída especificamente para o drift nos EUA...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Englishtown", 
            ultimoEvento: "Formula Drift PRO (Round 4) - Junho 2025", ultimoVencedor: "Adam LZ" 
        },
        { 
            id: 'jarama', nome: "Circuito del Jarama", localizacao: "Madrid, Espanha", 
            coordenadas: [40.6155, -3.5866], // REFINADO: Na seção de drift do DMEC
            descricao: "Pista de abertura da temporada 2025 do Drift Masters...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Jarama", 
            ultimoEvento: "Drift Masters 2025 (Round 1)", ultimoVencedor: "Oliver Randalu" 
        },
        { 
            id: 'tsukuba', nome: "Tsukuba Circuit", localizacao: "Shimotsuma, Japão", 
            coordenadas: [36.2238, 140.0382], // OK (pista TC2000)
            descricao: "Um circuito clássico japonês, famoso por eventos de Time Attack e D1GP...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Tsukuba", 
            ultimoEvento: "D1GP 2025 (Round 3 & 4)", ultimoVencedor: "Kanta Yanagida" 
        },
        { 
            id: 'evergreen', nome: "Evergreen Speedway", localizacao: "Monroe, WA, EUA", 
            coordenadas: [47.8545, -121.9649], // REFINADO: No "bank" 5/8
            descricao: "Uma das pistas mais antigas da Formula Drift. Famosa pelo seu 'bank'...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Evergreen", 
            ultimoEvento: "Formula Drift PRO (Round 6) - 2025", ultimoVencedor: "Simen Olsen" 
        },
        { 
            id: 'utah', nome: "Utah Motorsports Campus", localizacao: "Grantsville, UT, EUA", 
            coordenadas: [40.5888, -112.3810], // REFINADO: No traçado da FD
            descricao: "Uma pista moderna e veloz no meio do deserto...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Utah", 
            ultimoEvento: "Formula Drift PRO (Round 7) - 2025", ultimoVencedor: "James Deane" 
        },
        { 
            id: 'ferropolis', nome: "Ferropolis", localizacao: "Gräfenhainichen, Alemanha", 
            coordenadas: [51.7514, 12.4416], // OK
            descricao: "Conhecida como 'A Cidade de Ferro', é uma pista construída em um antigo museu...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Ferropolis", 
            ultimoEvento: "Drift Masters 2025 (Round 3)", ultimoVencedor: "Duane McKeever" 
        },
        { 
            id: 'okayama', nome: "Okayama International Circuit", localizacao: "Mimasaka, Japão", 
            coordenadas: [34.9148, 134.2215], // OK
            descricao: "Outro circuito de nível internacional no Japão (antiga F1)...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Okayama", 
            ultimoEvento: "D1GP 2025 (Round 1 & 2)", ultimoVencedor: "Hideyuki Fujino" 
        },
        { 
            id: 'sydney', nome: "Sydney Motorsport Park", localizacao: "Eastern Creek, NSW, Austrália", 
            coordenadas: [-33.8030, 150.8720], // REFINADO: No layout do "Figure 8" do WTAC
            descricao: "A principal pista de drift da Austrália. Sedia o World Time Attack Challenge...", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Sydney", 
            ultimoEvento: "WTAC 2025 Drift Challenge", ultimoVencedor: "Luke Fink (Lenda Local)" 
        },
               { 
            id: 'road_atlanta', nome: "Road Atlanta", localizacao: "Braselton, GA, EUA", 
            coordenadas: [34.1481, -83.8180], // REFINADO: No "Keyhole" (curva 7)
            descricao: "Uma das etapas mais tradicionais da Formula Drift. Famosa pela subida em alta velocidade até a primeira curva e a transição técnica no 'Keyhole'.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Road+Atlanta", 
            ultimoEvento: "Formula Drift PRO (Round 2) - Maio 2025", ultimoVencedor: "Matt Field" 
        },
        { 
            id: 'st_louis', nome: "World Wide Technology Raceway", localizacao: "Madison, IL, EUA", 
            coordenadas: [38.6472, -90.0965], // REFINADO: No layout da Formula D
            descricao: "Pista conhecida pelo layout rápido e fluido dentro do 'infield' de um oval da NASCAR. Exige muita velocidade e proximidade nas batalhas.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=St.+Louis", 
            ultimoEvento: "Formula Drift PRO (Round 5) - 2025", ultimoVencedor: "Dylan Hughes" 
        },
        { 
            id: 'orlando', nome: "Orlando Speed World", localizacao: "Orlando, FL, EUA", 
            coordenadas: [28.5367, -81.2065], // REFINADO: No centro do oval
            descricao: "O primeiro oval 'banked' (inclinado) da temporada da Formula Drift. Uma pista clássica que testa a coragem dos pilotos na parede.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Orlando", 
            ultimoEvento: "Formula Drift PRO (Round 3) - 2025", ultimoVencedor: "Chelsea DeNofa" 
        },
        { 
            id: 'meihan', nome: "Meihan Sportsland (C-Course)", localizacao: "Nara, Japão", 
            coordenadas: [34.5685, 135.9120], // REFINADO: Na famosa curva C
            descricao: "Uma das pistas 'raiz' mais famosas do Japão. O Traçado C é mundialmente conhecido pelas 'manji' (transições) em alta velocidade e entradas agressivas na curva 1.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Meihan", 
            ultimoEvento: "D1 Lights / Evento Local", ultimoVencedor: "N/A" 
        },
        { 
            id: 'autopolis', nome: "Autopolis (D1 Layout)", localizacao: "Hita, Oita, Japão", 
            coordenadas: [33.0450, 130.9390], // REFINADO: Na seção de drift
            descricao: "Uma pista de nível internacional da FIA usada pelo D1GP. O layout de drift é incrivelmente rápido e técnico, exigindo precisão absoluta dos pilotos.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Autopolis", 
            ultimoEvento: "D1GP 2025 (Round 7 & 8)", ultimoVencedor: "Naoki Nakamura" 
        },
        { 
            id: 'okuibuki', nome: "Okuibuki Motor Park", localizacao: "Maibara, Japão", 
            coordenadas: [35.2970, 136.4380], // REFINADO: No pátio principal
            descricao: "Uma pista construída em uma estação de ski. Sedia eventos do D1GP e Formula Drift Japan, conhecida por suas transições rápidas e layout desafiador.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Okuibuki", 
            ultimoEvento: "Formula Drift Japan 2025", ultimoVencedor: "Kanta Yanagida" 
        },
        { 
            id: 'power_park', nome: "Power Park Huvivaltio", localizacao: "Kauhava, Finlândia", 
            coordenadas: [63.0040, 22.3170], // REFINADO: No traçado do DMEC
            descricao: "Uma pista de drift construída dentro de um parque de diversões! Sedia a etapa finlandesa do Drift Masters, conhecida como 'NEZ-Drift'.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Power+Park", 
            ultimoEvento: "Drift Masters 2025 (Round 2)", ultimoVencedor: "Lauri Heinonen" 
        },
        { 
            id: 'anglesey', nome: "Anglesey Circuit", localizacao: "Anglesey, País de Gales, UK", 
            coordenadas: [53.1895, -4.4890], // REFINADO: No 'Hairpin'
            descricao: "Um dos circuitos mais bonitos do mundo, à beira-mar. Usado pelo British Drift Championship (BDC) e já sediou o Drift Masters.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Anglesey", 
            ultimoEvento: "British Drift Championship", ultimoVencedor: "N/A" 
        },
        { 
            id: 'willow_springs', nome: "Willow Springs (Balcony)", localizacao: "Rosamond, CA, EUA", 
            coordenadas: [34.8725, -118.2630], // REFINADO: No 'Balcony'
            descricao: "Uma pista de drift histórica nos EUA. O 'Balcony' é uma pista curta e técnica famosa por eventos como o Drift Matsuri e por ser local de prática de muitos profissionais.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Willow+Springs", 
            ultimoEvento: "Drift Matsuri / Evento Local", ultimoVencedor: "N/A" 
        },
        { 
            id: 'gingerman', nome: "Gingerman Raceway", localizacao: "South Haven, MI, EUA", 
            coordenadas: [42.3480, -86.1380], // REFINADO: No traçado da FD
            descricao: "Uma pista de 'clube' que se tornou palco da Formula Drift. O traçado é rápido e desafiador, com uma seção 'off-road' perigosa se o piloto errar.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Gingerman", 
            ultimoEvento: "Formula Drift PROSPEC", ultimoVencedor: "N/A" 
        },
        // --- COPIE E COLE PISTAS BRASILEIRAS ---

        { 
            id: 'mega_space', nome: "Mega Space", localizacao: "Santa Luzia, MG, Brasil", 
            coordenadas: [-19.7895, -43.9030], // REFINADO: No centro do pátio principal
            descricao: "Uma das arenas mais icônicas do Brasil. Conhecida pela 'Cidade do Drift', um espaço gigantesco que permite traçados de alta velocidade e muito 'backwards entry'. Palco de etapas do SDB e Ultimate.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Mega+Space", 
            ultimoEvento: "Super Drift Brasil / Ultimate Drift", ultimoVencedor: "João Barion (Destaque)" 
        },
        { 
            id: 'interlagos_arena', nome: "Interlagos (Arena Miolo)", localizacao: "São Paulo, SP, Brasil", 
            coordenadas: [-23.7020, -46.6975], // REFINADO: No "Miolo" usado pelo SDB
            descricao: "O templo do automobilismo brasileiro. O Super Drift Brasil utiliza a 'Arena Miolo' e o 'S do Senna' para criar traçados desafiadores e de alta visibilidade.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Interlagos", 
            ultimoEvento: "Super Drift Brasil (Final)", ultimoVencedor: "Bruno Bär (Campeão SDB)" 
        },
        { 
            id: 'velopark', nome: "Velopark (Traçado de Drift)", localizacao: "Nova Santa Rita, RS, Brasil", 
            coordenadas: [-29.8221, -51.3200], 
            descricao: "Principal complexo de velocidade do Sul do Brasil. O Velopark sedia etapas do Super Drift Brasil em um traçado técnico e rápido usando partes do kartódromo.", 
            imagemUrl: "https://lh3.googleusercontent.com/proxy/n4lPMa58mzaWy6zhNL9pvSNePOvO3dQoCoCGGk1WLrVzv1wskrWQP6dGaqxp6bLv4mC2IxfvJ4DV26JOoPFII2Dd3UtwdJeqRloajNZnTfLqsCTt-_Plbw6K82kn9GeLSnw9bwQmQrpsdugK00oKUVkIv36rzZU1gBYbLDbFnRcyVofzgB7OKRW0nVZO8GDLCSMAchUSdHqLsbfSRpo3yAQkA_IWrg", 
            ultimoEvento: "Super Drift Brasil (Etapa Sul)", ultimoVencedor: "Lucas Medeiros (Destaque)" 
        },
        { 
            id: 'ecpa', nome: "ECPA (Piracicaba)", localizacao: "Piracicaba, SP, Brasil", 
            coordenadas: [-22.6845, -47.7490], // REFINADO: No traçado de drift
            descricao: "Um dos berços do drift no interior de SP. O ECPA tem um traçado permanente que é amado pelos pilotos por ser técnico, com curvas cegas e subidas.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=ECPA", 
            ultimoEvento: "Ultimate Drift / Drift Fight", ultimoVencedor: "Diego Higa (Destaque)" 
        },
        { 
            id: 'speedway_sc', nome: "Speedway Music Park", localizacao: "Balneário Camboriú, SC, Brasil", 
            coordenadas: [-26.9630, -48.6815], // REFINADO: No kartódromo
            descricao: "Complexo em Santa Catarina que sedia grandes eventos, incluindo etapas do Ultimate Drift. O traçado é rápido e flui ao redor do kartódromo.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Speedway+SC", 
            ultimoEvento: "Ultimate Drift (Etapa)", ultimoVencedor: "Erick Medici" 
        },
        { 
            id: 'arena_maeda', nome: "Arena Maeda", localizacao: "Itu, SP, Brasil", 
            coordenadas: [-23.3640, -47.3820], // REFINADO: No pátio de eventos
            descricao: "Um enorme complexo de eventos em Itu, famoso por sediar grandes festivais de drift (como o 'Drift N' Friends') com layouts customizados na sua gigantesca área asfaltada.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Arena+Maeda", 
            ultimoEvento: "Festival de Drift / Evento Local", ultimoVencedor: "N/A" 
        },
        { 
            id: 'kart_registro', nome: "Kartódromo de Registro", localizacao: "Registro, SP, Brasil", 
            coordenadas: [-24.4730, -47.8360], // REFINADO: No kartódromo
            descricao: "Palco de etapas emocionantes do Super Drift Brasil, este kartódromo é conhecido por traçados travados que exigem muita agilidade e controle do carro.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Kart+Registro", 
            ultimoEvento: "Super Drift Brasil (Etapa)", ultimoVencedor: "Gustavo Koch" 
        }

    ];

    // --- 2. INICIALIZAÇÃO DO MAPA (Usando Stadia Maps / ESRI) ---
    
    const darkMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OSM</a>',
        maxZoom: 20
    });

    const lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye...',
        maxZoom: 20
    });

    const map = L.map('map', {
        layers: [satelliteLayer], // Padrão é o mapa escuro
        center: [40, -5],
        zoom: 3,
        minZoom: 2
    });

    const baseMaps = {
        "Mapa Escuro": darkMap,
        "Satélite": satelliteLayer,
        "Mapa Claro": lightMap 
    };

    L.control.layers(baseMaps).addTo(map);

    // --- 3. REFERÊNCIAS DO PAINEL (DOM) (Sem alterações) ---
    const infoPanel = document.getElementById('info-panel');
    const panelImg = document.getElementById('panel-img');
    const panelTitle = document.getElementById('panel-title');
    const panelLocation = document.getElementById('panel-location');
    const panelDesc = document.getElementById('panel-desc');
    const closeBtn = document.getElementById('close-btn');
    const panelEvent = document.getElementById('panel-event');
    const panelWinner = document.getElementById('panel-winner');
    
    // --- 4. FUNÇÕES DE INTERAÇÃO (Sem alterações) ---
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

    // --- 5. CRIAR MARCADORES E EVENTOS (Ícone Estável SVG) ---

    const iconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBmaWxsPSIjNGE5MGUyIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg==';

    const driftIcon = L.icon({
        iconUrl: iconSvg,
        iconSize: [24, 24],   
        iconAnchor: [12, 12],  
        popupAnchor: [0, -12], 
        tooltipAnchor: [12, -6] 
    });

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
});