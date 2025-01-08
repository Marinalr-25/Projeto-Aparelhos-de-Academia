document.addEventListener('DOMContentLoaded', function () {
  const temas = document.getElementById('tema');
  const fecharTemas = document.querySelector('.icone-fechar');
  const popUpTemas = document.querySelector('.pop-up-temas');
  const bolinhaVerde = document.querySelector('.bolinha.verde');
  const bolinhaAzul = document.querySelector('.bolinha.azul');
  const bolinhaRosa = document.querySelector('.bolinha.rosa');
  const bolinhaVermelho = document.querySelector('.bolinha.vermelho');
  const bolinhaRoxo = document.querySelector('.bolinha.roxo');
  const bolinhaLaranja = document.querySelector('.bolinha.laranja');
  const imgLogo = document.querySelector('.logo');
  const nav = document.querySelector('nav');
  const fechar = document.querySelector('.nav-icone--fechar');
  const body = document.querySelector('body');
  const menu = document.querySelector('.nav-icone--menu');

  const logos = {
    verde: 'imagens/logoverde.png',
    azul: 'imagens/logoazul.png',
    rosa: 'imagens/logorosa.png',
    vermelho: 'imagens/logovermelho.png',
    roxo: 'imagens/logoroxo.png',
    laranja: 'imagens/logolaranja.png',
  };

  function mudarCoresDoHeader(backgroundColor, textColor, tema) {
    document.documentElement.style.setProperty('--cor-fundo', backgroundColor);
    document.documentElement.style.setProperty('--cor-texto', textColor);
    imgLogo.src = logos[tema];

    localStorage.setItem('corFundo', backgroundColor);
    localStorage.setItem('corTexto', textColor);
    localStorage.setItem('tema', tema);
  }

  const corFundo = localStorage.getItem('corFundo');
  const corTexto = localStorage.getItem('corTexto');
  const tema = localStorage.getItem('tema');

  if (corFundo && corTexto && tema) {
    mudarCoresDoHeader(corFundo, corTexto, tema);
  }

  temas.onclick = function () {
    popUpTemas.classList.toggle('aberto');
    popUpTemas.style.display = 'flex;';
    setTimeout(() => {
      fechar.style.display = 'none';
      nav.classList.remove('aberto');
      setTimeout(() => {
        body.classList.remove('aberto');
        menu.style.display = 'block';
      }, 300);
    }, 300);
  };

  fecharTemas.addEventListener('click', function () {
    setTimeout(() => {
      popUpTemas.classList.remove('aberto');
    }, 500);
  });

  if (bolinhaVerde) {
    bolinhaVerde.addEventListener('click', function () {
      mudarCoresDoHeader('#234a4e', '#4fa679', 'verde');
    });
  }
  if (bolinhaAzul) {
    bolinhaAzul.addEventListener('click', function () {
      mudarCoresDoHeader('#0d6bb2', '#83e3ff', 'azul');
    });
  }
  if (bolinhaRosa) {
    bolinhaRosa.addEventListener('click', function () {
      mudarCoresDoHeader('#ae2478', '#eed3e4', 'rosa');
    });
  }
  if (bolinhaVermelho) {
    bolinhaVermelho.addEventListener('click', function () {
      mudarCoresDoHeader('#a50000', '#e4b2b2', 'vermelho');
    });
  }
  if (bolinhaRoxo) {
    bolinhaRoxo.addEventListener('click', function () {
      mudarCoresDoHeader('#4c4c99', '#c9c9e0', 'roxo');
    });
  }
  if (bolinhaLaranja) {
    bolinhaLaranja.addEventListener('click', function () {
      mudarCoresDoHeader('#ff6c37', '#ffd2c3', 'laranja');
    });
  }
});
