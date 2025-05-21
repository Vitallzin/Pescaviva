// Use apenas esta função em main.js OU detalhes.js, não nos dois!
function mostrarDetalheProduto(titulo, preco, imagem, descricao) {
    window.scrollTo(0, 0);

    // Esconde o main da lista
    document.getElementById('main-lista').style.display = 'none';

    // Preenche o main-detalhe
    let mainDetalhe = document.getElementById('main-detalhe');
    mainDetalhe.innerHTML = `
        <div class="produto-detalhe-container">
            <button class="btn-voltar-detalhe" onclick="voltarLista()">Voltar</button>
            <img id="detalhe-imagem" class="imagem-detalhe-produto" src="${imagem}" alt="Foto do Produto">
            <div class="info-detalhe-produto">
                <h1 id="detalhe-titulo" class="titulo-detalhe-produto">${titulo}</h1>
                <h1 id="detalhe-preco" class="preco-detalhe-produto">${preco}</h1>
                <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho('${titulo}', '${preco}', '${imagem}')">Adicionar ao Carrinho</button>
                <button class="btn-comprar-detalhe">Comprar</button>
            </div>
            <section class="box-produto-detalhado">
                <h2 class="titulo-box-detalhe">Detalhes do Produto</h2>
                <div class="box-lista-detalhe">
                    <ul id="detalhe-lista" class="lista-detalhe-produto">
                        <li><strong>Descrição:</strong> ${descricao}</li>
                        <li><strong>Disponibilidade:</strong> Em estoque</li>
                        <li><strong>Vendedor:</strong> João da Pesca</li>
                    </ul>
                </div>
            </section>
        </div>
    `;
    mainDetalhe.style.display = 'block';
}

function voltarLista() {
    let mainDetalhe = document.getElementById('main-detalhe');
    if (mainDetalhe) mainDetalhe.style.display = 'none';
    document.getElementById('main-lista').style.display = 'block';
}