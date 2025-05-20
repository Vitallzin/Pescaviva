// Mensagens simuladas
const mensagens = [
    { autor: "vendedor", texto: "Olá! Como posso ajudar?" },
    { autor: "usuario", texto: "Olá, gostaria de saber se o peixe está fresco." },
    { autor: "vendedor", texto: "Sim, foi pescado hoje pela manhã!" }
];

// Função para exibir o chat
function mostrarChat() {
    document.getElementById('main-lista').style.display = 'none';
    document.getElementById('main-detalhe').style.display = 'none';
    document.getElementById('main-carrinho').style.display = 'none';
    document.getElementById('main-notificacao').style.display = 'none';
    // document.getElementById('main-publicar').style.display = 'none';
    document.getElementById('main-chat').style.display = 'block';

    const chatBox = document.getElementById('chat-mensagens');
    chatBox.innerHTML = '';
    mensagens.forEach(msg => {
        chatBox.innerHTML += `
            <div class="mensagem ${msg.autor}">
                <span>${msg.texto}</span>
            </div>
        `;
    });
}

// Evento para o botão do header
document.getElementById('chat').addEventListener('click', mostrarChat);

// Opcional: enviar mensagem (apenas visual)
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    if (input.value.trim()) {
        mensagens.push({ autor: "usuario", texto: input.value });
        input.value = '';
        mostrarChat();
    }
});