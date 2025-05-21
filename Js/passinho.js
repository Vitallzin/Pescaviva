function configurarSlide(botaoId, containerId, direcao = 1, botaoVoltarId = null, botaoProximoId = null) {
  
  const botao = document.getElementById(botaoId);
  const container = document.getElementById(containerId);
  const botaoVoltar = botaoVoltarId ? document.getElementById(botaoVoltarId) : null;
  const botaoProximo = botaoProximoId ? document.getElementById(botaoProximoId) : null;

  function atualizarVisibilidadeBotoes() {
    // Botão voltar
    if (botaoVoltar) {
      if (container.scrollLeft > 0) {
        botaoVoltar.style.display = 'block';
      } else {
        botaoVoltar.style.display = 'none';
      }
    }
    // Botão próximo
    if (botaoProximo) {
      // Verifica se está no final
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 2) {
        botaoProximo.style.display = 'none';
      } else {
        botaoProximo.style.display = 'block';
      }
    }
  }

  // Inicializa o estado
  atualizarVisibilidadeBotoes();
  // Atualiza ao rolar
  container.addEventListener('scroll', atualizarVisibilidadeBotoes);

  botao.addEventListener('click', () => {
    const card = container.querySelector('.card');
    if (!card) return;

    const larguraCard = card.offsetWidth;
    const margem = parseInt(getComputedStyle(card).marginRight || 0);
    const scrollAmount = (larguraCard + margem) * 2 * direcao;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    // Pequeno delay para garantir atualização após scroll animado
    setTimeout(atualizarVisibilidadeBotoes, 400);
  });
}

// Slides para frente
configurarSlide('botao-destaque', 'produtos-destaque', 1, 'botao-destaque-voltar', 'botao-destaque');
configurarSlide('botao-peixes', 'peixes-perto', 1, 'botao-peixes-voltar', 'botao-peixes');

// Slides para trás
configurarSlide('botao-destaque-voltar', 'produtos-destaque', -1, null, 'botao-destaque');
configurarSlide('botao-peixes-voltar', 'peixes-perto', -1, null, 'botao-peixes');