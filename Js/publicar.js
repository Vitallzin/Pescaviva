// Espera que produtosDestaque e peixesPerto já estejam definidos

// Junta todos os peixes dos dois arrays, sem repetir nomes
const todosPeixes = [...(produtosDestaque || []), ...(peixesPerto || [])];
const peixesUnicos = [];
const nomesPeixes = new Set();

todosPeixes.forEach(p => {
    if (!nomesPeixes.has(p.titulo)) {
        peixesUnicos.push(p);
        nomesPeixes.add(p.titulo);
    }
});

// Preenche o datalist
const datalist = document.getElementById('lista-peixes');
if (datalist) {
    peixesUnicos.forEach(p => {
        const option = document.createElement('option');
        option.value = p.titulo;
        datalist.appendChild(option);
    });
}

// Função para extrair preço em reais (ex: "R$ 25,00/kg" => 25.00)
function extrairPrecoReais(precoStr) {
    if (!precoStr) return 0;
    const cleaned = precoStr.replace(/[^\d,]/g, '').replace(',', '.');
    return Number(cleaned);
}

// Função para formatar preço para exibição
function formatarPrecoExibicao(valor) {
    return `R$ ${Number(valor).toFixed(2).replace('.', ',')}`;
}

let precoBase = 0;

const produtoPeixeInput = document.getElementById('produto-peixe');
if (produtoPeixeInput) {
    produtoPeixeInput.addEventListener('change', function() {
        const nome = this.value;
        const precos = todosPeixes
            .filter(p => p.titulo.toLowerCase() === nome.toLowerCase())
            .map(p => extrairPrecoReais(p.preco));

        const faixaPrecoDiv = document.getElementById('faixa-preco');
        const precoBaseSpan = document.getElementById('preco-base');
        const range = document.getElementById('ajuste-preco');
        const produtoPrecoInput = document.getElementById('produto-preco');

        if (precos.length && faixaPrecoDiv && precoBaseSpan && range && produtoPrecoInput) {
            precoBase = ((Math.min(...precos) + Math.max(...precos)) / 2);
            faixaPrecoDiv.style.display = '';
            precoBaseSpan.textContent = formatarPrecoExibicao(precoBase);

            // Range e input number: min = base-3, max = base+3
            range.min = (precoBase - 3).toFixed(2);
            range.max = (precoBase + 3).toFixed(2);
            range.step = 0.01;
            range.value = precoBase.toFixed(2);

            produtoPrecoInput.min = (precoBase - 3).toFixed(2);
            produtoPrecoInput.max = (precoBase + 3).toFixed(2);
            produtoPrecoInput.step = 0.01;
            produtoPrecoInput.value = precoBase.toFixed(2);
        } else if (faixaPrecoDiv && produtoPrecoInput) {
            faixaPrecoDiv.style.display = 'none';
            produtoPrecoInput.value = '';
        }
    });
}

// Sincroniza o valor do input number ao mover o range
const ajustePrecoRange = document.getElementById('ajuste-preco');
const produtoPrecoInput = document.getElementById('produto-preco');
if (ajustePrecoRange && produtoPrecoInput) {
    ajustePrecoRange.addEventListener('input', function() {
        produtoPrecoInput.value = this.value;
    });
}

// Sincroniza o valor do range ao digitar no input number (limitando ao min/max)
if (produtoPrecoInput && ajustePrecoRange) {
    produtoPrecoInput.addEventListener('input', function() {
        let val = parseFloat(this.value);
        if (isNaN(val)) val = Number(ajustePrecoRange.value);
        val = Math.max(Number(ajustePrecoRange.min), Math.min(Number(ajustePrecoRange.max), val));
        this.value = val.toFixed(2);
        ajustePrecoRange.value = val;
    });
}
const btnPublicar = document.getElementById('publicar');
if (btnPublicar) {
    btnPublicar.addEventListener('click', function() {
        // Esconde todos os mains
        const ids = [
            'main-lista',
            'main-detalhe',
            'main-carrinho',
            'main-notificacao',
            'main-chat',
            'main-publicar'
        ];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = (id === 'main-publicar') ? 'block' : 'none';
        });
        window.scrollTo(0, 0);
    });
}