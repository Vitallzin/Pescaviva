const produtosDestaque = [
  {
    imagem: "img/peixes/tilapia.jpeg",
    titulo: "Tilápia",
    descricao: "Peixe de carne branca e sabor suave.",
    preco: "R$ 25,00/kg",
    quantidade: 10,
    vendedor: {
      nome: "João da Pesca",
      foto: "img/pescadores/pescador1.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/salmao.jpeg",
    titulo: "Salmão",
    descricao: "Peixe rico em ômega-3.",
    preco: "R$ 80,00/kg",
    quantidade: 8,
    vendedor: {
      nome: "Maria do Mar",
      foto: "img/pescadores/pescador2.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/atum.jpeg",
    titulo: "Atum",
    descricao: "Peixe de carne vermelha e sabor marcante.",
    preco: "R$ 60,00/kg",
    quantidade: 5,
    vendedor: {
      nome: "Pedro Pescador",
      foto: "img/pescadores/pescador3.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/piracucu.jpeg",
    titulo: "Pirarucu",
    descricao: "Peixe amazônico de carne branca.",
    preco: "R$ 45,00/kg",
    quantidade: 7,
    vendedor: {
      nome: "Ana da Amazônia",
      foto: "img/pescadores/pescador4.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/tambaqui.jpeg",
    titulo: "Tambaqui",
    descricao: "Peixe amazônico de sabor único.",
    preco: "R$ 35,00/kg",
    quantidade: 9,
    vendedor: {
      nome: "Lucas Rio",
      foto: "img/pescadores/pescador5.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/pacu.jpeg",
    titulo: "Pacu",
    descricao: "Peixe de água doce com carne saborosa.",
    preco: "R$ 30,00/kg",
    quantidade: 6,
    vendedor: {
      nome: "Carla Lago",
      foto: "img/pescadores/pescador6.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/dourado.jpeg",
    titulo: "Dourado",
    descricao: "Peixe de água doce com carne firme.",
    preco: "R$ 50,00/kg",
    quantidade: 4,
    vendedor: {
      nome: "Fernando da Água",
      foto: "img/pescadores/pescador7.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/traira.jpeg",
    titulo: "Traíra",
    descricao: "Peixe de água doce com carne saborosa.",
    preco: "R$ 28,00/kg",
    quantidade: 10,
    vendedor: {
      nome: "Beatriz do Córrego",
      foto: "img/pescadores/pescador8.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/caranguejo.jpeg",
    titulo: "Caranguejo",
    descricao: "Crustáceo de carne saborosa.",
    preco: "R$ 40,00/kg",
    quantidade: 3,
    vendedor: {
      nome: "Roberto das Conchas",
      foto: "img/pescadores/pescador9.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/camarao.jpeg",
    titulo: "Camarão",
    descricao: "Crustáceo versátil na culinária.",
    preco: "R$ 70,00/kg",
    quantidade: 5,
    vendedor: {
      nome: "Sandra dos Frutos",
      foto: "img/pescadores/pescador10.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/polvo.jpeg",
    titulo: "Polvo",
    descricao: "Muito usado na culinária mediterrânea",
    preco: "R$ 95,00/kg",
    quantidade: 2,
    vendedor: {
      nome: "Guilherme Submarino",
      foto: "img/pescadores/pescador1.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/ostra.jpeg",
    titulo: "Ostra",
    descricao: "Delicada e fresca",
    preco: "R$ 80,00/kg",
    quantidade: 6,
    vendedor: {
      nome: "Mariana da Praia",
      foto: "img/pescadores/pescador2.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/lagosta.jpeg",
    titulo: "Lagosta",
    descricao: "Fruto do mar nobre e caro",
    preco: "R$ 160,00/kg",
    quantidade: 1,
    vendedor: {
      nome: "Ricardo do Alto Mar",
      foto: "img/pescadores/pescador3.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/badejo.jpeg",
    titulo: "Badejo",
    descricao: "Peixe muito apreciado em restaurantes",
    preco: "R$ 88,00/kg",
    quantidade: 4,
    vendedor: {
      nome: "Patrícia do Porto",
      foto: "img/pescadores/pescador4.jpeg",
    },
    link: "descricao" // Adicionado
  }
];


const peixesPerto = [
  {
    imagem: "img/peixes/anchova.jpeg",
    titulo: "Anchova",
    descricao: "Peixe de carne branca e saborosa",
    preco: "R$ 45,00/kg",
    quantidade: 7,
    vendedor: {
      nome: "Cesar da Costa",
      foto: "img/pescadores/pescador5.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/bagre.jpeg",
    titulo: "Bagre",
    descricao: "Peixe de água doce, ideal para fritura",
    preco: "R$ 30,00/kg",
    quantidade: 9,
    vendedor: {
      nome: "Bruno do Riacho",
      foto: "img/pescadores/pescador6.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/linguado.jpeg",
    titulo: "Linguado",
    descricao: "Peixe nobre de carne macia",
    preco: "R$ 85,00/kg",
    quantidade: 3,
    vendedor: {
      nome: "Sofia da Pescaria",
      foto: "img/pescadores/pescador7.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/pintado.jpeg",
    titulo: "Pintado",
    descricao: "Popular na culinária brasileira",
    preco: "R$ 50,00/kg",
    quantidade: 6,
    vendedor: {
      nome: "Thiago dos Lagos",
      foto: "img/pescadores/pescador8.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/robalo.jpeg",
    titulo: "Robalo",
    descricao: "Peixe de carne firme e delicada",
    preco: "R$ 90,00/kg",
    quantidade: 4,
    vendedor: {
      nome: "Julia da Lagoa",
      foto: "img/pescadores/pescador9.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/corvina.jpeg",
    titulo: "Corvina",
    descricao: "Ótimo para moquecas",
    preco: "R$ 40,00/kg",
    quantidade: 8,
    vendedor: {
      nome: "Gabriel do Mar",
      foto: "img/pescadores/pescador10.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/sardinha.jpeg",
    titulo: "Sardinha",
    descricao: "Peixe barato e nutritivo",
    preco: "R$ 18,00/kg",
    quantidade: 10,
    vendedor: {
      nome: "Fernanda das Redes",
      foto: "img/pescadores/pescador1.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/pescada.jpeg",
    titulo: "Pescada",
    descricao: "Carne leve e versátil",
    preco: "R$ 35,00/kg",
    quantidade: 5,
    vendedor: {
      nome: "Rafael do Barco",
      foto: "img/pescadores/pescador2.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/pargo.jpeg",
    titulo: "Pargo",
    descricao: "Peixe branco de sabor suave",
    preco: "R$ 60,00/kg",
    quantidade: 3,
    vendedor: {
      nome: "Larissa do Coral",
      foto: "img/pescadores/pescador3.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/garoupa.jpeg",
    titulo: "Garoupa",
    descricao: "Peixe nobre e suculento",
    preco: "R$ 95,00/kg",
    quantidade: 2,
    vendedor: {
      nome: "Daniel das Rochas",
      foto: "img/pescadores/pescador4.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/merluza.jpeg",
    titulo: "Merluza",
    descricao: "Peixe de carne branca e macia",
    preco: "R$ 38,00/kg",
    quantidade: 7,
    vendedor: {
      nome: "Camila da Maré",
      foto: "img/pescadores/pescador5.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/cacao.jpeg",
    titulo: "Cação",
    descricao: "Peixe ideal para moquecas",
    preco: "R$ 42,00/kg",
    quantidade: 6,
    vendedor: {
      nome: "Felipe do Mangue",
      foto: "img/pescadores/pescador6.jpeg",
    },
    link: "descricao" // Adicionado
  },
  {
    imagem: "img/peixes/tainha.jpeg",
    titulo: "Tainha",
    descricao: "Muito comum em regiões costeiras",
    preco: "R$ 28,00/kg",
    quantidade: 9,
    vendedor: {
      nome: "Vitória do Estuário",
      foto: "img/pescadores/pescador7.jpeg",
    },
    link: "descricao" // Adicionado
  }
];
let produtosDestaqueEmbaralhados = [];
let peixesPertoEmbaralhados = [];

function embaralharArray(array) {
    // Algoritmo de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function criarCards(produtos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container com ID '${containerId}' não encontrado.`);
        return;
    }
    container.innerHTML = "";

    const produtosAleatorios = embaralharArray([...produtos]).slice(0, 10);

    // Salva o array embaralhado globalmente
    if (containerId === 'produtos-destaque') {
        produtosDestaqueEmbaralhados = produtosAleatorios;
    } else if (containerId === 'peixes-perto') {
        peixesPertoEmbaralhados = produtosAleatorios;
    }

    produtosAleatorios.forEach((produto, idx) => {
        const card = document.createElement('div');
        card.className = 'card';

        // NÃO mostra vendedor nos cards!
        let cardContentHTML = `
            <div class="card-content">
                <img class="card-img" src="${produto.imagem}" alt="${produto.titulo}">
                <p class="preco">${produto.preco}</p>
                <h2 class="titulo">${produto.titulo}</h2>
                <p class="descricao">${produto.descricao}</p>
                <div class="card-footer">
                    <span class="localizacao"><i class="fas fa-map-marker-alt"></i> ${produto.local || "Localidade"}</span>
                    <span class="data"><i class="fas fa-clock"></i> ${produto.data || "Hoje"}</span>
                </div>
            </div>
        `;

        // Botão Comprar
        let buttonHTML = '';
        if (produto.link === "descricao") {
            buttonHTML = `<button class="botao_comprar" onclick="mostrarDetalheProdutoAutoPorIndice('${containerId}', ${idx})">Comprar</button>`;
        } else {
            buttonHTML = `<button class="botao_comprar" disabled>Comprar</button>`;
        }

        card.innerHTML = cardContentHTML + buttonHTML;
        container.appendChild(card);
    });
}

// Função para mostrar detalhes pelo índice, usando o array embaralhado correto
function mostrarDetalheProdutoAutoPorIndice(lista, idx) {
    let produtos;
    if (lista === 'produtos-destaque') {
        produtos = produtosDestaqueEmbaralhados;
    } else if (lista === 'peixes-perto') {
        produtos = peixesPertoEmbaralhados;
    } else {
        return;
    }
    mostrarDetalheProdutoAuto(produtos[idx]);
}

// Chamadas para criar os cards
criarCards(produtosDestaque, 'produtos-destaque');
criarCards(peixesPerto, 'peixes-perto');