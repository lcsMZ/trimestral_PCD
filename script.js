const nav = document.querySelector('nav');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');
const pagina3 = document.getElementById('pagina3');
const pagina4 = document.getElementById('pagina4');

function handleButtonClick(button, page) {
  window.history.pushState({ page: button.dataset.page }, `Página ${button.dataset.page}`, `#${page.id}`);
  page.scrollIntoView({ behavior: 'smooth' });
  nav.classList.add('nav-moving');
  setTimeout(() => {
    nav.classList.remove('nav-moving');
  }, 1000);
}

botao1.addEventListener('click', () => {
  handleButtonClick(botao1, pagina1);
});

botao2.addEventListener('click', () => {
  handleButtonClick(botao2, pagina2);
});

botao3.addEventListener('click', () => {
  handleButtonClick(botao3, pagina3);
});

botao4.addEventListener('click', () => {
  handleButtonClick(botao4, pagina4);
});

function openFullscreen(img) {
  const overlay = document.getElementById('overlay');
  const fullscreenImage = document.getElementById('fullscreenImage');
  fullscreenImage.src = img.src;
  overlay.style.display = 'flex';
}

function closeFullscreen() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}