let hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function () {
  document.querySelector('.container').classList.toggle('show-menu');
});

document.querySelector('#qtde').addEventListener('change', atualizarPreco);
document.querySelector('#js').addEventListener('change', atualizarPreco);
document
  .querySelector('#layout-sim')
  .addEventListener('change', atualizarPreco);
document
  .querySelector('#layout-nao')
  .addEventListener('change', atualizarPreco);
document.querySelector('#prazo').addEventListener('change', function () {
  const prazo = document.querySelector('#prazo').value;
  document.querySelector(
    'label[for=prazo]'
  ).innerHTML = `Prazo: ${prazo} semana(s)`;
  atualizarPreco();
});

function atualizarPreco() {
  const qtde = document.querySelector('#qtde').value;
  const temJS = document.querySelector('#js').checked;
  const incluiLayout = document.querySelector('#layout-sim').checked;
  const prazo = document.querySelector('#prazo').value;
  let preco = qtde * 125;
  if (temJS) preco *= 1.2;
  if (incluiLayout) preco += 370;
  let taxaUrgencia = 1 - prazo * 0.1;
  preco = preco + preco * taxaUrgencia;
  document.querySelector('#preco').value = `R$ ${preco
    .toFixed(2)
    .replace('.', ',')}`;
}

let totalSlides = document.querySelectorAll('.card').length;
let currentSlide = 0;

document.querySelector('.slider--controls').style.height = `${
  document.querySelector('.slider--width').clientHeight
}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.card').clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector('.slider--width').style.marginLeft = `${-newMargin}px`;
}

setInterval(goNext, 10000);

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windoheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windoheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
