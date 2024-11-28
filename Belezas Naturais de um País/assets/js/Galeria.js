const imagens = document.querySelectorAll('.imagens img');
const visor = document.getElementById('visor');
const imagemGrande = visor.querySelector('.imagem-grande');
const fechar = visor.querySelector('.fechar');
const anterior = visor.querySelector('.anterior');
const proximo = visor.querySelector('.proximo');
const listaImagens = visor.querySelector('.lista-imagens');
/*
// Abrir imagem
imagens.forEach((img) => {
  img.addEventListener('click', () => {
    visor.classList.add('ativo');
    imagemGrande.src = img.src;
  });
});
*/

// Abrir imagem no visor
imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    imagemAtual = index; // Salva o índice da imagem clicada
    abrirImagem(img.src);
  });
});

// Função para abrir a imagem no visor
function abrirImagem(src) {
  visor.classList.add('ativo');
  imagemGrande.src = src; // Define o src da imagem grande
}

/*
// Fechar imagem
fechar.addEventListener('click', () => {
  visor.classList.remove('ativo');
});
*/
// Fechar o visor
fechar.addEventListener('click', () => {
  visor.classList.remove('ativo');
});

/*
// Navegação
anterior.addEventListener('click', () => {
  // Lógica para navegar para a imagem anterior
});

proximo.addEventListener('click', () => {
  // Lógica para navegar para a próxima imagem
});
*/

// Navegar para a imagem anterior
anterior.addEventListener('click', () => {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length; // Navega circularmente
  abrirImagem(imagens[imagemAtual].src);
});

// Navegar para a próxima imagem
proximo.addEventListener('click', () => {
  imagemAtual = (imagemAtual + 1) % imagens.length; // Navega circularmente
  abrirImagem(imagens[imagemAtual].src);
});

// Lista de imagens
imagens.forEach((img) => {
  const thumb = document.createElement('img');
  thumb.src = img.src;
  thumb.addEventListener('click', () => {
    imagemGrande.src = img.src;
  });
  listaImagens.appendChild(thumb);
});
