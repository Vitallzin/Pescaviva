const produtosDestaque = [
    {
        imagem: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2023/01/05174817/atum-de-R-14-milhao.jpg",
        titulo: "Atum Azul",
        descricao: "Fresco e nobre",
        preco: "R$ 140,00",
        link: "descricao"
    },
    {
        imagem: "https://ogimg.infoglobo.com.br/in/25126461-9c6-aee/FT1086A/760/Kiyoshi-Kimura.jpg",
        titulo: "Salmão Selvagem",
        descricao: "Rico em ômega",
        preco: "R$ 120,00",
        link: "descricao"
    },
    {
        imagem: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2023/01/05174817/atum-de-R-14-milhao.jpg",
        titulo: "Atum Vermelho",
        descricao: "Corte premium",
        preco: "R$ 98,00"
    },
    {
        imagem: "https://ogimg.infoglobo.com.br/in/25126461-9c6-aee/FT1086A/760/Kiyoshi-Kimura.jpg",
        titulo: "Salmão Alaska",
        descricao: "Filé especial",
        preco: "R$ 110,00"
    },
    {
        imagem: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2023/01/05174817/atum-de-R-14-milhao.jpg",
        titulo: "Atum Branco",
        descricao: "Leve e macio",
        preco: "R$ 85,00"
    },
    {
        imagem: "https://ogimg.infoglobo.com.br/in/25126461-9c6-aee/FT1086A/760/Kiyoshi-Kimura.jpg",
        titulo: "Salmão Orgânico",
        descricao: "Cultivo natural",
        preco: "R$ 130,00"
    },
    {
        imagem: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2023/01/05174817/atum-de-R-14-milhao.jpg",
        titulo: "Atum Grelhado",
        descricao: "Pronto consumo",
        preco: "R$ 70,00"
    },
    {
        imagem: "https://ogimg.infoglobo.com.br/in/25126461-9c6-aee/FT1086A/760/Kiyoshi-Kimura.jpg",
        titulo: "Salmão Defumado",
        descricao: "Sabor marcante",
        preco: "R$ 95,00"
    }
];

const peixesPerto = [
    {
        imagem: "img/peixe.png",
        titulo: "Bacalhau",
        descricao: "Caro e gostoso",
        preco: "R$ 1000,00",
        link: "descricao"
    }
];

function criarCards(produtos, containerId) {
    const container = document.getElementById(containerId);
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';

        // Só permite abrir o detalhe se link for "descricao"
        if (produto.link === "descricao") {
            card.innerHTML = `
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
                <button class="botao_comprar" onclick="mostrarDetalheProduto('${produto.titulo}', '${produto.preco}', '${produto.imagem}', '${produto.descricao}')">Comprar</button>
            `;
        } else {
            card.innerHTML = `
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
                <button class="botao_comprar" disabled>Comprar</button>
            `;
        }
        container.appendChild(card);
    });
}


criarCards(produtosDestaque, 'produtos-destaque');
criarCards(peixesPerto, 'peixes-perto');