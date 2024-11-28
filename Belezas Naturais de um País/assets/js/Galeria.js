const imagens = document.querySelectorAll('.imagens img');
const visor = document.getElementById('visor');
const imagemGrande = visor.querySelector('.imagem-grande');
const fechar = visor.querySelector('.fechar');
const anterior = visor.querySelector('.anterior');
const proximo = visor.querySelector('.proximo');
const listaImagens = visor.querySelector('.lista-imagens');

// Abrir imagem
imagens.forEach((img) => {
  img.addEventListener('click', () => {
    visor.classList.add('ativo');
    imagemGrande.src = img.src;
  });
});

// Fechar imagem
fechar.addEventListener('click', () => {
  visor.classList.remove('ativo');
});

// Navegação
anterior.addEventListener('click', () => {
  // Lógica para navegar para a imagem anterior
});

proximo.addEventListener('click', () => {
  // Lógica para navegar para a próxima imagem
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