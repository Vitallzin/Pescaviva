document.getElementById('carrinho').addEventListener('click', mostrarCarrinho);

document.getElementById('notificacao').addEventListener('click', function() {
    document.getElementById('main-lista').style.display = 'none';
    document.getElementById('main-detalhe').style.display = 'none';
    document.getElementById('main-carrinho').style.display = 'none';
    // document.getElementById('main-chat').style.display = 'none';
    // document.getElementById('main-publicar').style.display = 'none';
    document.getElementById('main-notificacao').style.display = 'block';
});
document.querySelectorAll('.notificacao-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove destaque de outros itens
        document.querySelectorAll('.notificacao-item').forEach(i => i.classList.remove('notificacao-selecionada'));
        // Adiciona destaque ao selecionado
        this.classList.add('notificacao-selecionada');
        // Mostra o detalhe
        document.getElementById('notificacao-detalhe').innerHTML = `
            <div>
                <img src="${this.querySelector('img').src}" alt="" style="width:48px;height:48px;margin-bottom:12px;">
                <div>${this.getAttribute('data-msg')}</div>
            </div>
        `;
    });
});
function voltarParaLista() {
    document.getElementById('main-carrinho').style.display = 'none';
    document.getElementById('main-detalhe').style.display = 'none';
    document.getElementById('main-notificacao').style.display = 'none';
    document.getElementById('main-chat').style.display = 'none';
    document.getElementById('main-lista').style.display = 'block';
    window.scrollTo(0, 0);

}