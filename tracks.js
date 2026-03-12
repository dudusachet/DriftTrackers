// --- ARQUIVO: tracks.js ---
// Este arquivo contém APENAS os dados das pistas.
// Imagens usam o formato thumb.php do Wikimedia Commons para compatibilidade máxima.

const pistas = [

    //=====// FORMULA DRIFT (EUA) //=====//
    {
        id: 'long_beach', nome: "Streets of Long Beach", localizacao: "Long Beach, CA, EUA",
        campeonato: "Formula Drift",
        coordenadas: [33.7660, -118.1924],
        descricao: "Pista de rua icônica, usada para a abertura da Formula Drift. O percurso é técnico, cercado por muros de concreto, e é considerado o evento mais prestigiado do calendário.",
        ultimoEvento: "Formula Drift PRO (Round 1) - Abril 2025", ultimoVencedor: "Fredric Aasbo"
    },
    {
        id: 'irwindale', nome: "Irwindale Speedway", localizacao: "Irwindale, CA, EUA",
        campeonato: "Formula Drift",
        coordenadas: [34.1120, -117.9855],
        descricao: "Conhecida como 'A Casa do Drift', foi por muito tempo a pista da final da Formula Drift. Seu oval compacto é implacável com erros.",
        ultimoEvento: "Formula Drift PRO (Final Round) - 2024", ultimoVencedor: "James Deane"
    },
    {
        id: 'road_atlanta', nome: "Road Atlanta", localizacao: "Braselton, GA, EUA",
        campeonato: "Formula Drift",
        coordenadas: [34.1481, -83.8180],
        descricao: "Uma das etapas mais tradicionais da Formula Drift. Famosa pela subida em alta velocidade e transição técnica que desafia os pilotos.",
        ultimoEvento: "Formula Drift PRO (Round 2) - Maio 2025", ultimoVencedor: "Matt Field"
    },
    {
        id: 'orlando', nome: "Orlando Speed World", localizacao: "Orlando, FL, EUA",
        campeonato: "Formula Drift",
        coordenadas: [28.5367, -81.2065],
        descricao: "O primeiro oval 'banked' (inclinado) da temporada da Formula Drift. Combates intensos sob o calor da Flórida.",
        ultimoEvento: "Formula Drift PRO (Round 3) - 2025", ultimoVencedor: "Chelsea DeNofa"
    },
    {
        id: 'englishtown', nome: "Englishtown Raceway Park", localizacao: "Englishtown, NJ, EUA",
        campeonato: "Formula Drift",
        coordenadas: [40.3515, -74.3704],
        descricao: "A única arena construída especificamente para o drift nos EUA. Paredes de concreto próximas e público vibrante.",
        ultimoEvento: "Formula Drift PRO (Round 4) - Junho 2025", ultimoVencedor: "Adam LZ"
    },
    {
        id: 'st_louis', nome: "World Wide Technology Raceway", localizacao: "Madison, IL, EUA",
        campeonato: "Formula Drift",
        coordenadas: [38.6472, -90.0965],
        descricao: "Pista conhecida pelo layout rápido e fluido dentro do 'infield' de um oval da NASCAR. Entradas de altíssima velocidade.",
        ultimoEvento: "Formula Drift PRO (Round 5) - 2025", ultimoVencedor: "Dylan Hughes"
    },
    {
        id: 'evergreen', nome: "Evergreen Speedway", localizacao: "Monroe, WA, EUA",
        campeonato: "Formula Drift",
        coordenadas: [47.8545, -121.9649],
        descricao: "Uma das pistas mais antigas da Formula Drift. Famosa pelo seu 'bank' inclinado e entradas de alta velocidade entre as montanhas do estado de Washington.",
        ultimoEvento: "Formula Drift PRO (Round 6) - 2025", ultimoVencedor: "Simen Olsen"
    },
    {
        id: 'utah', nome: "Utah Motorsports Campus", localizacao: "Grantsville, UT, EUA",
        campeonato: "Formula Drift",
        coordenadas: [40.5888, -112.3810],
        descricao: "Uma pista moderna e veloz no meio do deserto de Utah. É a etapa mais rápida do calendário, com entradas acima de 160 km/h.",
        ultimoEvento: "Formula Drift PRO (Round 7) - 2025", ultimoVencedor: "James Deane"
    },
    {
        id: 'texas_motor_speedway', nome: "Texas Motor Speedway",
        campeonato: "Formula Drift",
        localizacao: "Fort Worth, TX, EUA",
        coordenadas: [33.0370, -97.2830],
        descricao: "Um 'roval' de alta velocidade usado pela Formula Drift. O traçado é conhecido por ser extremamente rápido, exigindo potência máxima e controle.",
        ultimoEvento: "Formula Drift PRO (Evento Passado)", ultimoVencedor: "N/A"
    },
    {
        id: 'willow_springs', nome: "Willow Springs (Balcony)", localizacao: "Rosamond, CA, EUA",
        campeonato: "Formula Drift",
        coordenadas: [34.8725, -118.2630],
        descricao: "Uma pista de drift histórica nos EUA. O 'Balcony' é uma pista curta e técnica usada para treinos e eventos grassroots.",
        ultimoEvento: "Drift Matsuri / Evento Local", ultimoVencedor: "N/A"
    },
    {
        id: 'wall_speedway', nome: "Wall Speedway",
        campeonato: "Formula Drift",
        localizacao: "Wall, NJ, EUA",
        coordenadas: [40.1690, -74.0620],
        descricao: "O 'Great Wall' de Nova Jersey. Um oval inclinado clássico da Formula Drift, conhecido por suas batalhas de alta velocidade.",
        ultimoEvento: "Formula Drift PROSPEC", ultimoVencedor: "N/A"
    },
    {
        id: 'gingerman', nome: "Gingerman Raceway", localizacao: "South Haven, MI, EUA",
        campeonato: "Formula Drift",
        coordenadas: [42.3480, -86.1380],
        descricao: "Uma pista de 'clube' que se tornou palco da Formula Drift PROSPEC. Layout técnico com boa visibilidade para o público.",
        ultimoEvento: "Formula Drift PROSPEC", ultimoVencedor: "N/A"
    },
    {
        id: 'las_vegas', nome: "Las Vegas Motor Speedway",
        campeonato: "Formula Drift",
        localizacao: "Las Vegas, NV, EUA",
        coordenadas: [36.2717, -115.0107],
        descricao: "O famoso speedway de Las Vegas. O layout de drift aproveita seções do oval e do 'infield', criando combates sob as luzes de neon.",
        ultimoEvento: "Formula Drift PRO (Evento Passado)", ultimoVencedor: "N/A"
    },
    {
        id: 'indianapolis', nome: "Indianapolis Motor Speedway (Drift)",
        campeonato: "Formula Drift",
        localizacao: "Indianapolis, IN, EUA",
        coordenadas: [39.7953, -86.2353],
        descricao: "O lendário 'Brickyard', casa das 500 Milhas de Indianápolis. A Formula Drift trouxe o drift para um dos templos sagrados do automobilismo.",
        ultimoEvento: "Formula Drift PRO (Evento Passado)", ultimoVencedor: "N/A"
    },
    {
        id: 'stafford', nome: "Stafford Motor Speedway",
        campeonato: "Formula Drift",
        localizacao: "Stafford Springs, CT, EUA",
        coordenadas: [41.9845, -72.3035],
        descricao: "Um oval histórico em Connecticut que sedia rodadas da Formula Drift. Oval compacto que cria batalhas intensas e próximas.",
        ultimoEvento: "Formula Drift PROSPEC", ultimoVencedor: "N/A"
    },

    //=====// D1GP (JAPÃO) //=====//
    {
        id: 'ebisu', nome: "Ebisu Circuit (Minami)", localizacao: "Nihonmatsu, Japão",
        campeonato: "D1GP",
        coordenadas: [37.6974, 140.5180],
        descricao: "A 'Meca' do drift. Um complexo com múltiplas pistas, famoso pela Minami (sul) que tem um salto na entrada. Local sagrado para todo drifter.",
        ultimoEvento: "D1GP 2025 (Round 5 & 6)", ultimoVencedor: "Ryu Nakamura"
    },
    {
        id: 'tsukuba', nome: "Tsukuba Circuit", localizacao: "Shimotsuma, Japão",
        campeonato: "D1GP",
        coordenadas: [36.2238, 140.0382],
        descricao: "Um circuito clássico japonês, famoso por eventos de Time Attack e D1GP. Traçado compacto e técnico.",
        ultimoEvento: "D1GP 2025 (Round 3 & 4)", ultimoVencedor: "Kanta Yanagida"
    },
    {
        id: 'okayama', nome: "Okayama International Circuit", localizacao: "Mimasaka, Japão",
        campeonato: "D1GP",
        coordenadas: [34.9148, 134.2215],
        descricao: "Circuito de nível internacional no Japão (anteriormente sede de F1). Agora recebe o D1GP com layouts técnicos.",
        ultimoEvento: "D1GP 2025 (Round 1 & 2)", ultimoVencedor: "Hideyuki Fujino"
    },
    {
        id: 'autopolis', nome: "Autopolis (D1 Layout)", localizacao: "Hita, Oita, Japão",
        campeonato: "D1GP",
        coordenadas: [33.0450, 130.9390],
        descricao: "Uma pista de nível internacional da FIA usada pelo D1GP. O layout de drift é incrivelmente rápido e técnico.",
        ultimoEvento: "D1GP 2025 (Round 7 & 8)", ultimoVencedor: "Naoki Nakamura"
    },
    {
        id: 'odaiba', nome: "Odaiba Special Stage", localizacao: "Tokyo, Japão",
        campeonato: "D1GP",
        coordenadas: [35.6282, 139.7750],
        descricao: "Evento espetacular na ilha artificial de Odaiba, na Baía de Tóquio. Pista temporária com a Rainbow Bridge e o skyline de Tokyo como cenário. A grande final do D1GP.",
        ultimoEvento: "D1GP 2025 (Round 9 & 10) - Final", ultimoVencedor: "N/A"
    },
    {
        id: 'suzuka', nome: "Suzuka Circuit", localizacao: "Suzuka, Mie, Japão",
        campeonato: "D1GP",
        coordenadas: [34.8431, 136.5410],
        descricao: "Um dos circuitos mais lendários do automobilismo mundial, famoso pelo traçado em 'figura 8'. Já recebeu rodadas do D1GP.",
        ultimoEvento: "D1GP (Evento Histórico)", ultimoVencedor: "N/A"
    },
    {
        id: 'fuji_drift_park', nome: "Fuji Speedway (Drift Park)",
        campeonato: "D1GP",
        localizacao: "Oyama, Japão",
        coordenadas: [35.3670, 138.9290],
        descricao: "Parque de drift dedicado dentro do complexo mundialmente famoso de Fuji. Sedia Formula Drift Japan e D1GP.",
        ultimoEvento: "Formula Drift Japan / D1GP", ultimoVencedor: "N/A"
    },
    {
        id: 'meihan', nome: "Meihan Sportsland (C-Course)", localizacao: "Nara, Japão",
        campeonato: "D1GP",
        coordenadas: [34.5685, 135.9120],
        descricao: "Uma das pistas 'raiz' mais famosas do Japão. O Traçado C é mundialmente conhecido por vídeos de drift de rua e treinos livres.",
        ultimoEvento: "D1 Lights / Evento Local", ultimoVencedor: "N/A"
    },
    {
        id: 'nikko_circuit', nome: "Nikko Circuit",
        campeonato: "D1GP",
        localizacao: "Utsunomiya, Japão",
        coordenadas: [36.9100, 139.7380],
        descricao: "Um dos circuitos 'raiz' mais icônicos do Japão, local de nascimento de muitos estilos e pilotos de drift profissionais.",
        ultimoEvento: "D1 Lights / Eventos Locais", ultimoVencedor: "N/A"
    },
    {
        id: 'okuibuki', nome: "Okuibuki Motor Park", localizacao: "Maibara, Japão",
        campeonato: "D1GP",
        coordenadas: [35.2970, 136.4380],
        descricao: "Uma pista construída em uma estação de ski. Sedia eventos do D1GP e Formula Drift Japan com um cenário montanhoso único.",
        ultimoEvento: "Formula Drift Japan 2025", ultimoVencedor: "Kanta Yanagida"
    },

    //=====// DRIFT MASTERS (EUROPA) //=====//
    {
        id: 'riga', nome: "Biķernieku Trase", localizacao: "Riga, Letônia",
        campeonato: "Drift Masters",
        coordenadas: [56.9663, 24.2311],
        descricao: "Uma das pistas mais rápidas e assustadoras do Drift Masters. Curvas de altíssima velocidade entre as árvores da Letônia.",
        ultimoEvento: "Drift Masters 2025 (Round 5)", ultimoVencedor: "Piotr Wiecek"
    },
    {
        id: 'mondello', nome: "Mondello Park", localizacao: "Co. Kildare, Irlanda",
        campeonato: "Drift Masters",
        coordenadas: [53.2756, -6.7573],
        descricao: "O coração do drift irlandês. Uma pista técnica que formou campeões como James Deane e os irmãos Shanahan.",
        ultimoEvento: "Drift Masters 2025 (Round 4)", ultimoVencedor: "Piotr Wiecek"
    },
    {
        id: 'warsaw', nome: "PGE Narodowy (Estádio)", localizacao: "Warsaw, Polônia",
        campeonato: "Drift Masters",
        coordenadas: [52.2387, 21.0452],
        descricao: "Espetáculo único. Pista customizada dentro do estádio nacional da Polônia. Recordista mundial de público em evento de drift!",
        ultimoEvento: "Drift Masters Grand Finale 2025", ultimoVencedor: "Conor Shanahan"
    },
    {
        id: 'jarama', nome: "Circuito del Jarama", localizacao: "Madrid, Espanha",
        campeonato: "Drift Masters",
        coordenadas: [40.6155, -3.5866],
        descricao: "Pista histórica nos arredores de Madrid, que já recebeu corridas de F1 nos anos 70. Agora sedia o Drift Masters com clima quente e público animado.",
        ultimoEvento: "Drift Masters 2025 (Round 1)", ultimoVencedor: "Oliver Randalu"
    },
    {
        id: 'ferropolis', nome: "Ferropolis", localizacao: "Gräfenhainichen, Alemanha",
        campeonato: "Drift Masters",
        coordenadas: [51.7514, 12.4416],
        descricao: "Conhecida como 'A Cidade de Ferro'. Pista montada entre escavadeiras gigantes de um antigo museu industrial. Cenário épico!",
        ultimoEvento: "Drift Masters 2025 (Round 3)", ultimoVencedor: "Duane McKeever"
    },
    {
        id: 'power_park', nome: "Power Park Huvivaltio", localizacao: "Kauhava, Finlândia",
        campeonato: "Drift Masters",
        coordenadas: [63.0040, 22.3170],
        descricao: "Uma pista de drift dentro de um parque de diversões! Os finlandeses dominam a arte do drift com tração traseira pura.",
        ultimoEvento: "Drift Masters 2025 (Round 2)", ultimoVencedor: "Lauri Heinonen"
    },
    {
        id: 'hockenheimring', nome: "Hockenheimring (Drift)",
        campeonato: "Drift Masters",
        localizacao: "Hockenheim, Alemanha",
        coordenadas: [49.3278, 8.5655],
        descricao: "O Motodrom do famoso circuito de F1. O Drift Masters usa a seção do estádio, criando alta velocidade e atmosfera incrível.",
        ultimoEvento: "Drift Masters (Evento Passado)", ultimoVencedor: "N/A"
    },
    {
        id: 'vallelunga', nome: "Vallelunga Circuit", localizacao: "Roma, Itália",
        campeonato: "Drift Masters",
        coordenadas: [42.1320, 12.2990],
        descricao: "Autodromo nos arredores de Roma. Escolhido para a primeira etapa do Drift Masters na Itália (2025).",
        ultimoEvento: "Drift Masters 2025 (Round 1 - cancelado)", ultimoVencedor: "N/A"
    },
    {
        id: 'ricardo_tormo', nome: "Circuit Ricardo Tormo", localizacao: "Valencia, Espanha",
        campeonato: "Drift Masters",
        coordenadas: [39.4863, -0.6310],
        descricao: "Circuito moderno de Valência, famoso pelo MotoGP. Abriu a temporada 2024 do Drift Masters com clima mediterrâneo perfeito.",
        ultimoEvento: "Drift Masters 2024 (Round 1)", ultimoVencedor: "N/A"
    },
    {
        id: 'kehala_ring', nome: "Kehala Ring",
        campeonato: "Drift Masters",
        localizacao: "Kehala, Estônia",
        coordenadas: [59.3400, 26.5180],
        descricao: "Pista técnica e rápida no norte da Europa, misturando asfalto e seções de rallycross para o Drift Masters.",
        ultimoEvento: "Drift Masters", ultimoVencedor: "N/A"
    },
    {
        id: 'rabocsiring', nome: "Rabócsiring",
        campeonato: "Drift Masters",
        localizacao: "Máriapócs, Hungria",
        coordenadas: [48.0180, 22.1480],
        descricao: "Pista húngara clássica, 'casa' de muitos eventos europeus de drift. Público fanático e traçado desafiador.",
        ultimoEvento: "Drift Masters", ultimoVencedor: "N/A"
    },
    {
        id: 'ahvenisto', nome: "Ahvenisto Race Circuit", localizacao: "Hämeenlinna, Finlândia",
        campeonato: "Drift Masters",
        coordenadas: [61.0130, 24.4760],
        descricao: "Um dos circuitos mais desafiadores da Finlândia. Será sede do Drift Masters em 2026.",
        ultimoEvento: "Drift Masters 2026 (agendado)", ultimoVencedor: "N/A"
    },

    //=====// KING OF NATIONS / KING OF EUROPE //=====//
    {
        id: 'nurburgring', nome: "Nürburgring (Müllenbachschleife)",
        campeonato: "King of Nations",
        localizacao: "Nürburg, Alemanha",
        coordenadas: [50.3347, 6.9418],
        descricao: "O lendário 'Inferno Verde'. A seção Müllenbachschleife é usada para eventos de drift incluindo o King of Nations.",
        ultimoEvento: "King of Nations / Drift Cup", ultimoVencedor: "N/A"
    },
    {
        id: 'spa', nome: "Spa-Francorchamps (Drift)",
        campeonato: "King of Nations",
        localizacao: "Stavelot, Bélgica",
        coordenadas: [50.4372, 5.9714],
        descricao: "Um dos circuitos mais icônicos do automobilismo mundial, famoso pela curva Eau Rouge. O King of Nations trouxe o drift para este templo belga.",
        ultimoEvento: "King of Nations", ultimoVencedor: "N/A"
    },
    {
        id: 'serres', nome: "Serres Racing Circuit",
        campeonato: "King of Nations",
        localizacao: "Serres, Grécia",
        coordenadas: [41.0722, 23.5164],
        descricao: "Circuito grego, parada regular do Drift Kings e King of Nations. Traçado técnico e público apaixonado.",
        ultimoEvento: "King of Nations / Drift Kings", ultimoVencedor: "N/A"
    },
    {
        id: 'slovakiaring', nome: "Slovakiaring",
        campeonato: "King of Nations",
        localizacao: "Orechová Potôň, Eslováquia",
        coordenadas: [48.0539, 17.5708],
        descricao: "Circuito moderno na Eslováquia. Traçado amplo e de alta velocidade, ideal para drift com entradas agressivas.",
        ultimoEvento: "King of Nations", ultimoVencedor: "N/A"
    },
    {
        id: 'anneau_du_rhin', nome: "Anneau du Rhin",
        campeonato: "King of Nations",
        localizacao: "Biltzheim, França",
        coordenadas: [47.9461, 7.4297],
        descricao: "Circuito francês na Alsácia que sediou rodadas do King of Europe. Layout técnico e compacto.",
        ultimoEvento: "King of Europe", ultimoVencedor: "N/A"
    },
    {
        id: 'achna', nome: "Achna Speedway",
        campeonato: "King of Nations",
        localizacao: "Achna, Chipre",
        coordenadas: [35.0552, 33.7839],
        descricao: "Principal instalação de motorsport do Chipre. Sedia eventos do King of Nations e campeonatos locais de drift.",
        ultimoEvento: "King of Nations", ultimoVencedor: "N/A"
    },

    //=====// GATEBIL (ESCANDINÁVIA) //=====//
    {
        id: 'rudskogen', nome: "Rudskogen Motorsenter",
        campeonato: "Gatebil",
        localizacao: "Rakkestad, Noruega",
        coordenadas: [59.3680, 11.2620],
        descricao: "Circuito de asfalto mais antigo da Noruega e a 'casa' do lendário festival Gatebil. O evento mais louco do mundo: drift, Time Attack e festa.",
        ultimoEvento: "Gatebil Rudskogen", ultimoVencedor: "N/A"
    },
    {
        id: 'valerbanen', nome: "Vålerbanen",
        campeonato: "Gatebil",
        localizacao: "Nord-Odal, Noruega",
        coordenadas: [60.7033, 11.8106],
        descricao: "Outro circuito norueguês do calendário Gatebil. Experiência mais intimista, mesma intensidade e paixão.",
        ultimoEvento: "Gatebil Vålerbanen", ultimoVencedor: "N/A"
    },

    //=====// REGIONAL (OUTROS CAMPEONATOS) //=====//
    {
        id: 'anglesey', nome: "Anglesey Circuit", localizacao: "Anglesey, País de Gales, UK",
        campeonato: "Regional",
        coordenadas: [53.1895, -4.4890],
        descricao: "Circuito à beira-mar com cenário espetacular. Sedia o British Drift Championship com vistas para o Mar da Irlanda.",
        ultimoEvento: "British Drift Championship", ultimoVencedor: "N/A"
    },
    {
        id: 'sydney', nome: "Sydney Motorsport Park", localizacao: "Eastern Creek, NSW, Austrália",
        campeonato: "Regional",
        coordenadas: [-33.8030, 150.8720],
        descricao: "Principal pista de drift da Austrália. Sedia o World Time Attack Challenge e campeonatos australianos de drift.",
        ultimoEvento: "WTAC 2025 Drift Challenge", ultimoVencedor: "Luke Fink (Lenda Local)"
    },
    {
        id: 'calder_park', nome: "Calder Park Raceway", localizacao: "Melbourne, VIC, Austrália",
        campeonato: "Regional",
        coordenadas: [-37.6750, 144.7880],
        descricao: "Famosa pelo 'Thunderdome' oval. A seção de drift é lendária na cena australiana, com entradas de alta velocidade na parede.",
        ultimoEvento: "Eventos Locais / DriftVic", ultimoVencedor: "N/A"
    },
    {
        id: 'hampton_downs', nome: "Hampton Downs", localizacao: "Hampton Downs, Nova Zelândia",
        campeonato: "Regional",
        coordenadas: [-37.1980, 175.0580],
        descricao: "Principal pista de drift da Nova Zelândia, casa do famoso piloto 'Mad Mike' Whiddett. Sedia o D1NZ Championship.",
        ultimoEvento: "D1NZ Championship", ultimoVencedor: "N/A"
    },
    {
        id: 'taupo_motorsport', nome: "Taupo Motorsport Park", localizacao: "Taupo, Nova Zelândia",
        campeonato: "Regional",
        coordenadas: [-38.7400, 176.0150],
        descricao: "Pista de ponta na Nova Zelândia, usada pelo D1NZ. Várias configurações de layout, perto do famoso lago Taupo.",
        ultimoEvento: "D1NZ Championship", ultimoVencedor: "N/A"
    },
    {
        id: 'inje_speedium', nome: "Inje Speedium",
        campeonato: "Regional",
        localizacao: "Inje, Coreia do Sul",
        coordenadas: [38.0014, 128.2919],
        descricao: "Circuito moderno nas montanhas de Gangwon. Grandes mudanças de elevação e curvas desafiadoras para o drift coreano.",
        ultimoEvento: "Campeonato Coreano de Drift", ultimoVencedor: "N/A"
    },
    {
        id: 'everland_speedway', nome: "Everland Speedway",
        campeonato: "Regional",
        localizacao: "Yongin, Coreia do Sul",
        coordenadas: [37.2969, 127.2117],
        descricao: "Primeiro circuito permanente de corrida da Coreia do Sul. Próximo ao parque temático Everland.",
        ultimoEvento: "Eventos Locais de Drift", ultimoVencedor: "N/A"
    },
    {
        id: 'pathum_thani', nome: "Pathum Thani Speedway",
        campeonato: "Regional",
        localizacao: "Pathum Thani, Tailândia",
        coordenadas: [14.1147, 100.5661],
        descricao: "Speedway reconhecido na cena de drift tailandesa. A Tailândia tem uma cultura de drift em rápido crescimento.",
        ultimoEvento: "Thailand Drift Series", ultimoVencedor: "N/A"
    },
    {
        id: 'kaeng_krachan', nome: "Kaeng Krachan Circuit",
        campeonato: "Regional",
        localizacao: "Phetchaburi, Tailândia",
        coordenadas: [12.9419, 99.7069],
        descricao: "Um dos circuitos permanentes mais importantes da Tailândia. Traçado desafiador e infraestrutura moderna para drift.",
        ultimoEvento: "Thailand Drift Championship", ultimoVencedor: "N/A"
    },
    {
        id: 'zwartkops', nome: "Zwartkops Raceway",
        campeonato: "Regional",
        localizacao: "Centurion, África do Sul",
        coordenadas: [-25.8101, 28.1097],
        descricao: "Um dos principais circuitos da África do Sul, perto de Pretória. Sedia competições de drift e Supadrift Series.",
        ultimoEvento: "Supadrift Series", ultimoVencedor: "N/A"
    },
    {
        id: 'kyalami', nome: "Kyalami Grand Prix Circuit",
        campeonato: "Regional",
        localizacao: "Midrand, África do Sul",
        coordenadas: [-25.9981, 28.0689],
        descricao: "O circuito de F1 histórico da África do Sul. Sedia eventos de drift de alto nível e é o circuito mais prestigiado do continente.",
        ultimoEvento: "Supadrift Series / Eventos Especiais", ultimoVencedor: "N/A"
    },
    {
        id: 'yas_marina', nome: "Yas Marina Circuit (Drift)",
        campeonato: "Regional",
        localizacao: "Abu Dhabi, Emirados Árabes",
        coordenadas: [24.4672, 54.6031],
        descricao: "O famoso circuito de F1 de Abu Dhabi. Sedia eventos de drift incluindo o Red Bull Car Park Drift Finals em cenário futurista.",
        ultimoEvento: "Red Bull Car Park Drift / Eventos Regionais", ultimoVencedor: "N/A"
    },

    //=====// BRASIL //=====//
    {
        id: 'ecpa', nome: "ECPA",
        campeonato: "Regional",
        localizacao: "Piracicaba, SP, Brasil",
        coordenadas: [-22.6580, -47.7885],
        descricao: "Considerada uma das 'casas' do drift no Brasil. Traçado travado e técnico, favorito dos pilotos e dos campeonatos nacionais.",
        ultimoEvento: "Etapa Ultimate Drift", ultimoVencedor: "N/A"
    },
    {
        id: 'haras_tuiuti', nome: "Haras Tuiuti",
        campeonato: "Regional",
        localizacao: "Tuiuti, SP, Brasil",
        coordenadas: [-22.7565, -46.7020],
        descricao: "Pista famosa e técnica, conhecida por curvas desafiadoras e por ser local frequente de treinos e etapas do Ultimate Drift.",
        ultimoEvento: "Etapa Ultimate Drift", ultimoVencedor: "N/A"
    },
    {
        id: 'mega_space', nome: "Mega Space",
        campeonato: "Regional",
        localizacao: "Santa Luzia, MG, Brasil",
        coordenadas: [-19.7825, -43.8820],
        descricao: "Espaço de eventos gigante que sedia as etapas mineiras. Traçado de alta velocidade impressionante para o público.",
        ultimoEvento: "Etapa Ultimate Drift", ultimoVencedor: "N/A"
    },
    {
        id: 'speedway_bc', nome: "Speedway Music Park",
        campeonato: "Regional",
        localizacao: "Balneário Camboriú, SC, Brasil",
        coordenadas: [-27.1065, -48.6530],
        descricao: "Sedia as etapas catarinenses dos campeonatos. Velocidade com seções técnicas em um grande complexo de entretenimento.",
        ultimoEvento: "Etapa Ultimate Drift (Sul)", ultimoVencedor: "N/A"
    },
    {
        id: 'interlagos_drift', nome: "Autódromo de Interlagos",
        campeonato: "Regional",
        localizacao: "São Paulo, SP, Brasil",
        coordenadas: [-23.7040, -46.6975],
        descricao: "A pista mais famosa do Brasil. Eventos de drift ocorrem no Kartódromo ou em seções adaptadas como o 'S do Senna'.",
        ultimoEvento: "Super Drift Brasil / Eventos Especiais", ultimoVencedor: "N/A"
    },
    {
        id: 'velopark_drift', nome: "Velopark",
        campeonato: "Regional",
        localizacao: "Nova Santa Rita, RS, Brasil",
        coordenadas: [-29.8222, -51.3200],
        descricao: "Um dos complexos automobilísticos mais modernos do país. Sedia etapas do campeonato gaúcho e brasileiro de drift.",
        ultimoEvento: "Etapa Ultimate Drift (Sul)", ultimoVencedor: "N/A"
    }
];

// Disponibiliza o array 'pistas' para ser importado por outros arquivos
export default pistas;