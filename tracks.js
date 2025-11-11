// --- ARQUIVO: tracks.js ---

// Este arquivo contém APENAS os dados das pistas.

const pistas = [
    { 
        id: 'long_beach', nome: "Streets of Long Beach", localizacao: "Long Beach, CA, EUA", 
        coordenadas: [33.7660, -118.1924],
        descricao: "Pista de rua icônica, usada para a abertura da Formula Drift. O percurso é técnico...", 
        imagemUrl: "https://news.formulad.com/wordpress/wp-content/uploads/2025/04/Deane-Aasbo-728x485.jpg", 
        ultimoEvento: "Formula Drift PRO (Round 1) - Abril 2025", ultimoVencedor: "Fredric Aasbo" 
    },
    { 
        id: 'irwindale', nome: "Irwindale Speedway", localizacao: "Irwindale, CA, EUA", 
        coordenadas: [34.1120, -117.9855],
        descricao: "Conhecida como 'A Casa do Drift', foi por muito tempo a pista da final...", 
        imagemUrl: "https://www.pmw-magazine.com/wp-content/uploads/2017/06/Irwindale_WP.jpg", 
        ultimoEvento: "Formula Drift PRO (Final Round) - 2024", ultimoVencedor: "James Deane" 
    },
    { 
        id: 'ebisu', nome: "Ebisu Circuit (Minami)", localizacao: "Nihonmatsu, Japão", 
        coordenadas: [37.6974, 140.5180],
        descricao: "A 'Meca' do drift. Um complexo com múltiplas pistas, famoso pela Minami...", 
        imagemUrl: "https://driftmission.com/wp-content/uploads/2011/11/Ebisu-Minami01.jpg", 
        ultimoEvento: "D1GP 2025 (Round 5 & 6)", ultimoVencedor: "Ryu Nakamura" 
    },
    { 
        id: 'riga', nome: "Biķernieku Trase", localizacao: "Riga, Letônia", 
        coordenadas: [56.9663, 24.2311],
        descricao: "Uma das pistas mais rápidas e assustadoras do calendário do Drift Masters...", 
        imagemUrl: "https://autopartner.com/wp-content/uploads/2024/09/AP-_65A5627.jpg", 
        ultimoEvento: "Drift Masters 2025 (Round 5)", ultimoVencedor: "Piotr Wiecek" 
    },
    { 
        id: 'mondello', nome: "Mondello Park", localizacao: "Co. Kildare, Irlanda", 
        coordenadas: [53.2756, -6.7573],
        descricao: "O coração do drift irlandês. Uma pista técnica...", 
        imagemUrl: "https://scontent.fcxj3-1.fna.fbcdn.net/v/t39.30808-6/486546216_1063147889181022_8684084248450715655_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yT-n7l-uLgsQ7kNvwGuxIn2&_nc_oc=AdkGI82qnmn_awC5pL7pFMWf43XeqRxMCFS6xWNyjk7gDbgjS4O55kCQ6VX7FKTrwRc&_nc_zt=23&_nc_ht=scontent.fcxj3-1.fna&_nc_gid=Qw-e1VTGd12fpLT4a0dyUA&oh=00_Afhp1k32XB_659-OHxRTZL_0mT5Wwtk5Y8FFnqCa28DTdg&oe=69194119", 
        ultimoEvento: "Drift Masters 2025 (Round 4)", ultimoVencedor: "Piotr Wiecek" 
    },
    { 
        id: 'warsaw', nome: "PGE Narodowy (Estádio)", localizacao: "Warsaw, Polônia", 
        coordenadas: [52.2387, 21.0452],
        descricao: "Um espetáculo único. Uma pista customizada dentro do estádio nacional...", 
        imagemUrl: "https://www.pgenarodowy.pl/upload/editor/image/h_334596826.png", 
        ultimoEvento: "Drift Masters Grand Finale 2025", ultimoVencedor: "Conor Shanahan" 
    },
    { 
        id: 'englishtown', nome: "Englishtown Raceway Park", localizacao: "Englishtown, NJ, EUA", 
        coordenadas: [40.3515, -74.3704],
        descricao: "A única arena construída especificamente para o drift nos EUA...", 
        imagemUrl: "https://i.redd.it/9757bl1731391.jpg", 
        ultimoEvento: "Formula Drift PRO (Round 4) - Junho 2025", ultimoVencedor: "Adam LZ" 
    },
    { 
        id: 'jarama', nome: "Circuito del Jarama", localizacao: "Madrid, Espanha", 
        coordenadas: [40.6155, -3.5866],
        descricao: "Pista de abertura da temporada 2025 do Drift Masters...", 
        imagemUrl: "https://driftspainseries.com/wp-content/uploads/2024/04/nota-prensa-drift-spain-round1-1.jpg", 
        ultimoEvento: "Drift Masters 2025 (Round 1)", ultimoVencedor: "Oliver Randalu" 
    },
    { 
        id: 'tsukuba', nome: "Tsukuba Circuit", localizacao: "Shimotsuma, Japão", 
        coordenadas: [36.2238, 140.0382],
        descricao: "Um circuito clássico japonês, famoso por eventos de Time Attack e D1GP...", 
        imagemUrl: "https://www.drivingline.com/s3/drivingline.prd/media/730838/d1gprd3-2017-11.jpg?quality=70&mode=pad&copymetadata=true&w=800", 
        ultimoEvento: "D1GP 2025 (Round 3 & 4)", ultimoVencedor: "Kanta Yanagida" 
    },
    { 
        id: 'evergreen', nome: "Evergreen Speedway", localizacao: "Monroe, WA, EUA", 
        coordenadas: [47.8545, -121.9649],
        descricao: "Uma das pistas mais antigas da Formula Drift. Famosa pelo seu 'bank'...", 
        imagemUrl: "https://news.formulad.com/wordpress/wp-content/uploads/2019/07/Number1-600x400.jpg", 
        ultimoEvento: "Formula Drift PRO (Round 6) - 2025", ultimoVencedor: "Simen Olsen" 
    },
    { 
        id: 'utah', nome: "Utah Motorsports Campus", localizacao: "Grantsville, UT, EUA", 
        coordenadas: [40.5888, -112.3810],
        descricao: "Uma pista moderna e veloz no meio do deserto...", 
        imagemUrl: "https://news.formulad.com/wordpress/wp-content/uploads/2024/08/Bakchis-Aasbo-728x485.jpg", 
        ultimoEvento: "Formula Drift PRO (Round 7) - 2025", ultimoVencedor: "James Deane" 
    },
    { 
        id: 'ferropolis', nome: "Ferropolis", localizacao: "Gräfenhainichen, Alemanha", 
        coordenadas: [51.7514, 12.4416],
        descricao: "Conhecida como 'A Cidade de Ferro', é uma pista construída em um antigo museu...", 
        imagemUrl: "https://www.irondriftking.de/cdn/shop/files/Startseite_After.jpg?v=1666174321&width=1600", 
        ultimoEvento: "Drift Masters 2025 (Round 3)", ultimoVencedor: "Duane McKeever" 
    },
    { 
        id: 'okayama', nome: "Okayama International Circuit", localizacao: "Mimasaka, Japão", 
        coordenadas: [34.9148, 134.2215],
        descricao: "Outro circuito de nível internacional no Japão (antiga F1)...", 
        imagemUrl: "https://pbs.twimg.com/media/FfEGY3PVQAAIyUO.jpg:large", 
        ultimoEvento: "D1GP 2025 (Round 1 & 2)", ultimoVencedor: "Hideyuki Fujino" 
    },
    { 
        id: 'sydney', nome: "Sydney Motorsport Park", localizacao: "Eastern Creek, NSW, Austrália", 
        coordenadas: [-33.8030, 150.8720],
        descricao: "A principal pista de drift da Austrália. Sedia o World Time Attack Challenge...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Sydney", 
        ultimoEvento: "WTAC 2025 Drift Challenge", ultimoVencedor: "Luke Fink (Lenda Local)" 
    },
    { 
        id: 'road_atlanta', nome: "Road Atlanta", localizacao: "Braselton, GA, EUA", 
        coordenadas: [34.1481, -83.8180], 
        descricao: "Uma das etapas mais tradicionais da Formula Drift. Famosa pela subida em alta velocidade...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Road+Atlanta", 
        ultimoEvento: "Formula Drift PRO (Round 2) - Maio 2025", ultimoVencedor: "Matt Field" 
    },
    { 
        id: 'st_louis', nome: "World Wide Technology Raceway", localizacao: "Madison, IL, EUA", 
        coordenadas: [38.6472, -90.0965], 
        descricao: "Pista conhecida pelo layout rápido e fluido dentro do 'infield' de um oval da NASCAR...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=St.+Louis", 
        ultimoEvento: "Formula Drift PRO (Round 5) - 2025", ultimoVencedor: "Dylan Hughes" 
    },
    { 
        id: 'orlando', nome: "Orlando Speed World", localizacao: "Orlando, FL, EUA", 
        coordenadas: [28.5367, -81.2065], 
        descricao: "O primeiro oval 'banked' (inclinado) da temporada da Formula Drift...", 
        imagemUrl: "https://www.drivingline.com/s3/drivingline.prd/cropped/24377/basic_2016-top-32-fd-orlando-lead-1.jpg", 
        ultimoEvento: "Formula Drift PRO (Round 3) - 2025", ultimoVencedor: "Chelsea DeNofa" 
    },
    { 
        id: 'meihan', nome: "Meihan Sportsland (C-Course)", localizacao: "Nara, Japão", 
        coordenadas: [34.5685, 135.9120], 
        descricao: "Uma das pistas 'raiz' mais famosas do Japão. O Traçado C é mundialmente conhecido...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Meihan", 
        ultimoEvento: "D1 Lights / Evento Local", ultimoVencedor: "N/A" 
    },
    { 
        id: 'autopolis', nome: "Autopolis (D1 Layout)", localizacao: "Hita, Oita, Japão", 
        coordenadas: [33.0450, 130.9390], 
        descricao: "Uma pista de nível internacional da FIA usada pelo D1GP. O layout de drift é incrivelmente rápido...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Autopolis", 
        ultimoEvento: "D1GP 2025 (Round 7 & 8)", ultimoVencedor: "Naoki Nakamura" 
    },
    { 
        id: 'okuibuki', nome: "Okuibuki Motor Park", localizacao: "Maibara, Japão", 
        coordenadas: [35.2970, 136.4380], 
        descricao: "Uma pista construída em uma estação de ski. Sedia eventos do D1GP e Formula Drift Japan...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Okuibuki", 
        ultimoEvento: "Formula Drift Japan 2025", ultimoVencedor: "Kanta Yanagida" 
    },
    { 
        id: 'power_park', nome: "Power Park Huvivaltio", localizacao: "Kauhava, Finlândia", 
        coordenadas: [63.0040, 22.3170], 
        descricao: "Uma pista de drift construída dentro de um parque de diversões!...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Power+Park", 
        ultimoEvento: "Drift Masters 2025 (Round 2)", ultimoVencedor: "Lauri Heinonen" 
    },
    { 
        id: 'anglesey', nome: "Anglesey Circuit", localizacao: "Anglesey, País de Gales, UK", 
        coordenadas: [53.1895, -4.4890], 
        descricao: "Um dos circuitos mais bonitos do mundo, à beira-mar...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Anglesey", 
        ultimoEvento: "British Drift Championship", ultimoVencedor: "N/A" 
    },
    { 
        id: 'willow_springs', nome: "Willow Springs (Balcony)", localizacao: "Rosamond, CA, EUA", 
        coordenadas: [34.8725, -118.2630], 
        descricao: "Uma pista de drift histórica nos EUA. O 'Balcony' é uma pista curta e técnica...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Willow+Springs", 
        ultimoEvento: "Drift Matsuri / Evento Local", ultimoVencedor: "N/A" 
    },
    { 
        id: 'gingerman', nome: "Gingerman Raceway", localizacao: "South Haven, MI, EUA", 
        coordenadas: [42.3480, -86.1380], 
        descricao: "Uma pista de 'clube' que se tornou palco da Formula Drift...", 
        imagemUrl: "https://placehold.co/400x250/333/999?text=Gingerman", 
        ultimoEvento: "Formula Drift PROSPEC", ultimoVencedor: "N/A" 
    },
    { 
            id: 'wall_speedway', nome: "Wall Speedway", 
            localizacao: "Wall, NJ, EUA", 
            coordenadas: [40.1690, -74.0620], 
            descricao: "O 'Great Wall' de Nova Jersey. Um oval inclinado clássico da Formula Drift, conhecido por suas batalhas de alta velocidade e punição para erros.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Wall+Speedway", 
            ultimoEvento: "Formula Drift PROSPEC", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'texas_motor_speedway', nome: "Texas Motor Speedway", 
            localizacao: "Fort Worth, TX, EUA", 
            coordenadas: [33.0370, -97.2830], 
            descricao: "Um 'roval' de alta velocidade usado pela Formula Drift. O traçado é conhecido por ser extremamente rápido, exigindo potência máxima e controle.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Texas+Motor+Speedway", 
            ultimoEvento: "Formula Drift PRO (Evento Passado)", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'fuji_drift_park', nome: "Fuji Speedway (Drift Park)", 
            localizacao: "Oyama, Japão", 
            coordenadas: [35.3670, 138.9290], 
            descricao: "O parque de drift dedicado dentro do complexo mundialmente famoso de Fuji. Sedia rodadas da Formula Drift Japan e D1GP em um layout técnico.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Fuji+Drift+Park", 
            ultimoEvento: "Formula Drift Japan / D1GP", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'nikko_circuit', nome: "Nikko Circuit", 
            localizacao: "Utsunomiya, Japão", 
            coordenadas: [36.9100, 139.7380], 
            descricao: "Um dos circuitos 'raiz' mais icônicos do Japão, local de nascimento de muitos estilos e pilotos. Famoso por suas curvas fechadas e treinos intensos.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Nikko+Circuit", 
            ultimoEvento: "D1 Lights / Eventos Locais", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'hockenheimring', nome: "Hockenheimring (Drift)", 
            localizacao: "Hockenheim, Alemanha", 
            coordenadas: [49.3278, 8.5655], 
            descricao: "O traçado do Motodrom no famoso circuito de F1. O Drift Masters usa essa seção do estádio, criando um evento de alta velocidade e atmosfera incrível.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Hockenheimring", 
            ultimoEvento: "Drift Masters (Evento Passado)", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'kehala_ring', nome: "Kehala Ring", 
            localizacao: "Kehala, Estônia", 
            coordenadas: [59.3400, 26.5180], 
            descricao: "Uma pista técnica e rápida no norte da Europa que se tornou uma parada popular do Drift Masters, misturando asfalto e seções de rallycross.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Kehala+Ring", 
            ultimoEvento: "Drift Masters", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'rabocsiring', nome: "Rabócsiring", 
            localizacao: "Máriapócs, Hungria", 
            coordenadas: [48.0180, 22.1480], 
            descricao: "Uma pista húngara clássica, 'casa' de muitos eventos europeus de drift. Conhecida por seu traçado desafiador e público fanático.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Rabocsiring", 
            ultimoEvento: "Drift Masters", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'hampton_downs', nome: "Hampton Downs", 
            localizacao: "Hampton Downs, Nova Zelândia", 
            coordenadas: [-37.1980, 175.0580], 
            descricao: "A principal pista de drift da Nova Zelândia, casa do famoso piloto 'Mad Mike' Whiddett. Sedia grandes eventos, incluindo o Mad Mike's Summer Bash.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Hampton+Downs", 
            ultimoEvento: "D1NZ Championship", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'taupo_motorsport', nome: "Taupo Motorsport Park", 
            localizacao: "Taupo, Nova Zelândia", 
            coordenadas: [-38.7400, 176.0150], 
            descricao: "Outra pista de ponta da Nova Zelândia, usada pelo campeonato D1NZ. Possui várias configurações de layout para drift.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Taupo", 
            ultimoEvento: "D1NZ Championship", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'calder_park', nome: "Calder Park Raceway", 
            localizacao: "Melbourne, VIC, Austrália", 
            coordenadas: [-37.6750, 144.7880], 
            descricao: "Famosa pelo 'Thunderdome' oval, a seção de drift é lendária na cena australiana, conhecida por entradas de alta velocidade na parede.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Calder+Park", 
            ultimoEvento: "Eventos Locais / DriftVic", 
            ultimoVencedor: "N/A" 
        },
    //-----// Brasileiras //-----//
    { 
            id: 'ecpa', nome: "ECPA", 
            localizacao: "Piracicaba, SP, Brasil", 
            coordenadas: [-22.6580, -47.7885], 
            descricao: "Considerada uma das 'casas' do drift no Brasil. Possui um traçado travado e técnico que é um favorito dos pilotos e sedia muitas etapas de campeonatos.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=ECPA", 
            ultimoEvento: "Etapa Ultimate Drift", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'haras_tuiuti', nome: "Haras Tuiuti", 
            localizacao: "Tuiuti, SP, Brasil", 
            coordenadas: [-22.7565, -46.7020], 
            descricao: "Outra pista muito famosa e técnica, conhecida por suas curvas desafiadoras e por ser um local frequente de treinos e etapas do Ultimate Drift.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Haras+Tuiuti", 
            ultimoEvento: "Etapa Ultimate Drift", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'mega_space', nome: "Mega Space", 
            localizacao: "Santa Luzia, MG, Brasil", 
            coordenadas: [-19.7825, -43.8820], 
            descricao: "Um espaço de eventos gigante que sedia as etapas mineiras. O traçado é conhecido por ser de alta velocidade e muito impressionante para o público.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Mega+Space", 
            ultimoEvento: "Etapa Ultimate Drift", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'speedway_bc', nome: "Speedway Music Park", 
            localizacao: "Balneário Camboriú, SC, Brasil", 
            coordenadas: [-27.1065, -48.6530], 
            descricao: "Sedia as etapas catarinenses dos campeonatos. É uma pista que combina velocidade com seções técnicas em um grande complexo de entretenimento.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Speedway+BC", 
            ultimoEvento: "Etapa Ultimate Drift (Sul)", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'interlagos_drift', nome: "Autódromo de Interlagos", 
            localizacao: "São Paulo, SP, Brasil", 
            coordenadas: [-23.7040, -46.6975], 
            descricao: "A pista mais famosa do Brasil. Os eventos de drift ocorrem no 'Miolo' (Kartódromo) ou em seções adaptadas do traçado principal, como o 'S do Senna'.", 
            imagemUrl: "https://placehold.co/400x250/333/999?text=Interlagos", 
            ultimoEvento: "Super Drift Brasil / Eventos Especiais", 
            ultimoVencedor: "N/A" 
        },
        { 
            id: 'velopark_drift', nome: "Velopark", 
            localizacao: "Nova Santa Rita, RS, Brasil", 
            coordenadas: [-29.8222, -51.3200], 
            descricao: "Um dos complexos automobilísticos mais modernos do país. Sedia etapas do campeonato gaúcho e brasileiro usando partes do seu traçado técnico.", 
            imagemUrl: "hhttps://www.rbsdirect.com.br/filestore/8/2/9/7/0/5/5_02cd7b1f5fb3b09/5507928_a8f7d639854f865.jpg?format=webp&w=700", 
            ultimoEvento: "Etapa Ultimate Drift (Sul)", 
            ultimoVencedor: "N/A" 
        }
    //-----// Brasileiras //-----//
];

// Disponibiliza o array 'pistas' para ser importado por outros arquivos
export default pistas;