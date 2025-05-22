function mostrarDetalheProdutoAuto(produto) {
    window.scrollTo(0, 0);

    // Esconde o main da lista
    document.getElementById('main-lista').style.display = 'none';

    // Sugestão de card (pega o primeiro dos produtosDestaque)
    const sugestao = produtosDestaque[0];

    // Garante vendedor e foto padrão caso falte no produto
    const vendedor = produto.vendedor || { nome: "Vendedor desconhecido", foto: "img/pescadores/semfoto.jpg" };
    const fotoVendedor = vendedor.foto || "img/pescadores/semfoto.jpg";
    const nomeVendedor = vendedor.nome || "Vendedor desconhecido";
    const quantidade = produto.quantidade !== undefined ? produto.quantidade : "N/A";

    // Preenche o main-detalhe
    let mainDetalhe = document.getElementById('main-detalhe');
    mainDetalhe.innerHTML = `
        <div class="produto-detalhe-container">
            <button class="btn-voltar-detalhe" onclick="voltarLista()">Voltar</button>
            <img id="detalhe-imagem" class="imagem-detalhe-produto" src="${produto.imagem}" alt="Foto do Produto">
            <div class="info-detalhe-produto">
                <h1 id="detalhe-titulo" class="titulo-detalhe-produto">${produto.titulo}</h1>
                <h1 id="detalhe-preco" class="preco-detalhe-produto">${produto.preco}</h1>
                <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho('${produto.titulo}', '${produto.preco}', '${produto.imagem}')">Adicionar ao Carrinho</button>
                <button class="btn-comprar-detalhe">Comprar</button>
            </div>
            <section class="box-produto-detalhado">
                <h2 class="titulo-box-detalhe">Detalhes do Produto</h2>
                <div class="box-lista-detalhe">
                    <ul id="detalhe-lista" class="lista-detalhe-produto">
                        <li><strong>Descrição:</strong> ${produto.descricao}</li>
                        <li><strong>Disponibilidade:</strong> ${quantidade} kg</li>
                        <li>
                            <strong>Vendedor:</strong>
                            <span style="display: flex; align-items: center; gap: 8px;">
                                <img src="${fotoVendedor}" alt="Foto do vendedor" style="width:32px;height:32px;border-radius:50%;border:1.5px solid #003b73;">
                                ${nomeVendedor}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
           <section class="sugestao-produto" style="margin-top:32px;">
    <h3>Você também pode gostar:</h3>
    <div class="sugestoes-lista" style="display:flex;gap:16px;flex-wrap:wrap;">
        ${getSugestoes(produto, 5).map(sugestao => `
            <div class="card-sugestao" style="display:flex;align-items:center;gap:12px;background:#f0f4fa;padding:10px 12px;border-radius:10px;max-width:180px;min-width:150px;">
                <img src="${sugestao.imagem}" alt="${sugestao.titulo}" style="width:48px;height:48px;border-radius:8px;">
                <div>
                    <div style="font-weight:bold;font-size:0.95em;">${sugestao.titulo}</div>
                    <div style="color:#003b73;font-size:0.9em;">${sugestao.preco}</div>
                    <button style="margin-top:6px;background:#003b73;color:#fff;border:none;border-radius:6px;padding:3px 10px;cursor:pointer;font-size:0.9em;" onclick='mostrarDetalheProdutoAuto(${JSON.stringify(sugestao)})'>Ver detalhes</button>
                </div>
            </div>
        `).join('')}
    </div>
</section>
    `;
    mainDetalhe.style.display = 'block';
}
function getSugestoes(produtoAtual, quantidade = 5) {
    // Filtra o produto atual para não aparecer na sugestão
    const outros = produtosDestaque.filter(p => p.titulo !== produtoAtual.titulo);
    // Embaralha e pega os primeiros 'quantidade'
    for (let i = outros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [outros[i], outros[j]] = [outros[j], outros[i]];
    }
    return outros.slice(0, quantidade);
}
function voltarLista() {
    document.getElementById('main-detalhe').style.display = 'none';
    document.getElementById('main-lista').style.display = 'block';
    window.scrollTo(0, 0);
}