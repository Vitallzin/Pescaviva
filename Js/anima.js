document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const imgs = banner.querySelectorAll('img');
    let idx = 0;

    // Esconde todas as imagens, mostra só a primeira
    imgs.forEach((img, i) => img.style.display = i === 0 ? 'block' : 'none');

    setInterval(() => {
        imgs[idx].style.display = 'none';
        idx = (idx + 1) % imgs.length;
        imgs[idx].style.display = 'block';
    }, 6500); // Troca a cada 6,5 segundos
});