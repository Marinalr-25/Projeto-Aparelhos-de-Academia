document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const telaPrincipal = document.querySelector('.tela-principal');
  const menu = document.querySelector('.nav-icone--menu');
  const fechar = document.querySelector('.nav-icone--fechar');
  const fecharPedido = document.querySelector('.icone-fechar');
  const body = document.querySelector('body');
  const mainBody = document.querySelector('.mainBody ');
  const logo = document.querySelector('.logo');
  const nav = document.querySelector('nav');
  const home = document.getElementById('home');
  const pedido = document.getElementById('pedido');
  const tema = document.getElementById('tema');
  const links = document.querySelectorAll('.box a');
  const popUpPedido = document.querySelector('.pop-up-pedido');

  window.addEventListener('load', function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  function animacao(header, main) {
    header.classList.remove('sobe');
    main.classList.remove('move-bottom');
  }
  setTimeout(() => {
    animacao(header, telaPrincipal);
  }, 500);

  setTimeout(() => {
    animacao(header, mainBody);
  }, 800);

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href = this.href;
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  function fecharNav() {
    setTimeout(() => {
      fechar.style.display = 'none';
      nav.classList.remove('aberto');
      setTimeout(() => {
        body.classList.remove('aberto');
        menu.style.display = 'block';
      }, 300);
    }, 300);
  }

  function voltarHome(element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = 'telaPrincipal.html';
    });
  }

  menu.addEventListener('click', function () {
    setTimeout(() => {
      menu.style.display = 'none';
      body.classList.add('aberto');
      setTimeout(() => {
        fechar.style.display = 'block';
        nav.classList.add('aberto');
      }, 300);
    }, 300);
  });

  pedido.onclick = function () {
    popUpPedido.classList.toggle('aberto');
    popUpPedido.style.display = 'flex;';
  };

  fechar.addEventListener('click', function () {
    fecharNav();
  });

  home.addEventListener('click', function () {
    fecharNav();
  });
  pedido.addEventListener('click', function () {
    fecharNav();
  });
  tema.addEventListener('click', function () {
    fecharNav();
  });
  fecharPedido.addEventListener('click', function () {
    fecharNav();
  });

  voltarHome(logo);
});
