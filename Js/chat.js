const conversas = {
    vendedor: [
        { autor: "vendedor", texto: "Olá! Como posso ajudar?" },
        { autor: "usuario", texto: "Olá, gostaria de saber se o peixe está fresco." },
        { autor: "vendedor", texto: "Sim, foi pescado hoje pela manhã!" }
    ],
    cliente: [
        { autor: "cliente", texto: "Oi, vocês entregam na minha região?" },
        { autor: "usuario", texto: "Qual sua cidade?" },
        { autor: "cliente", texto: "Salvador!" },
        { autor: "usuario", texto: "Entregamos sim, com frete grátis!" }
    ]
};

let conversaAtual = "vendedor";

function atualizarMensagens() {
    const chatBox = document.getElementById('chat-mensagens');
    chatBox.innerHTML = '';
    conversas[conversaAtual].forEach(msg => {
        chatBox.innerHTML += `
            <div class="mensagem ${msg.autor}">
                <span>${msg.texto}</span>
            </div>
        `;
    });
}

function mostrarChat() {
    document.getElementById('main-lista').style.display = 'none';
    document.getElementById('main-detalhe').style.display = 'none';
    document.getElementById('main-carrinho').style.display = 'none';
    document.getElementById('main-notificacao').style.display = 'none';
    document.getElementById('main-publicar').style.display = 'none';
    document.getElementById('main-chat').style.display = 'block';
    window.scrollTo(0, 0);
    atualizarMensagens();
}

// Troca de conversa ao clicar no contato
document.querySelectorAll('.chat-contatos .contato').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.chat-contatos .contato').forEach(i => i.classList.remove('ativo'));
        this.classList.add('ativo');
        conversaAtual = this.getAttribute('data-contato');
        atualizarMensagens();
    });
});

// Evento para o botão do header
document.getElementById('chat').addEventListener('click', mostrarChat);

// Enviar mensagem (apenas visual)
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    if (input.value.trim()) {
        conversas[conversaAtual].push({ autor: "usuario", texto: input.value });
        input.value = '';
        atualizarMensagens();
    }
});