let carrinho = [];

// Adiciona produto ao carrinho, somando quantidade se já existir
function adicionarAoCarrinho(titulo, preco, imagem) {
    window.scrollTo(0, 0);
    const index = carrinho.findIndex(item => item.titulo === titulo && item.preco === preco && item.imagem === imagem);
    if (index !== -1) {
        carrinho[index].quantidade += 1;
    } else {
        carrinho.push({ titulo, preco, imagem, quantidade: 1 });
    }
}

// Remove produto do carrinho pelo índice
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    mostrarCarrinho();
}

// Atualiza a quantidade de um produto
function atualizarQuantidade(index, novaQuantidade) {
    novaQuantidade = parseInt(novaQuantidade);
    if (novaQuantidade < 1 || isNaN(novaQuantidade)) {
        removerDoCarrinho(index);
    } else {
        carrinho[index].quantidade = novaQuantidade;
        mostrarCarrinho();
    }
}

// Mostra o carrinho
function mostrarCarrinho() {
    document.getElementById('main-lista').style.display = 'none';
    document.getElementById('main-detalhe').style.display = 'none';
    document.getElementById('main-notificacao').style.display = 'none';
    document.getElementById('main-chat').style.display = 'none';
    document.getElementById('main-publicar').style.display = 'none';
    document.getElementById('main-carrinho').style.display = 'block';

    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = '<li>Carrinho vazio.</li>';
    } else {
        carrinho.forEach((produto, index) => {
            // Extrai o valor numérico do preço (ex: "R$ 10,00" -> 10.00)
            const precoNum = Number(produto.preco.replace(/[^\d,]/g, '').replace(',', '.'));
            total += precoNum * produto.quantidade;

            lista.innerHTML += `
                <li class="item-carrinho">
                    <img src="${produto.imagem}" alt="${produto.titulo}">
                    <span><strong>${produto.titulo}</strong> - ${produto.preco}</span>
                    <input type="number" min="1" value="${produto.quantidade}" class="input-quantidade" onchange="atualizarQuantidade(${index}, this.value)">
                    <button class="btn-remover" onclick="removerDoCarrinho(${index})">Remover</button>
                </li>
            `;
        });
        // Adiciona o total e o botão comprar
        lista.innerHTML += `
            <li class="total-carrinho">
                <span class="valor-total">Total: R$ ${total.toFixed(2).replace('.', ',')}</span>
                <button class="btn-comprar" disabled>Comprar</button>
            </li>
        `;
    }
}

function voltarParaLista() {
    document.getElementById('main-carrinho').style.display = 'none';
    document.getElementById('main-lista').style.display = 'block';
}

document.getElementById('carrinho').addEventListener('click', mostrarCarrinho);