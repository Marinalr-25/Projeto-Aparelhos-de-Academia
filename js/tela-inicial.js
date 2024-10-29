document.addEventListener('DOMContentLoaded', function () {
  const telaInicial = document.querySelector('.tela-inicial');
  const telaPrincipal = document.querySelector('.tela-principal');
  const primeiraTela = document.querySelector('.primeira-tela');
  const segundaTela = document.querySelector('.segunda-tela');
  const terceiraTela = document.querySelector('.terceira-tela');
  const box = document.querySelector('.box-inicial');
  const pontos = document.querySelectorAll('.pontos div');
  const inputNome = document.getElementById('nome');
  const comecar = document.getElementById('comecar');
  const proximo = document.getElementById('proximo');
  const bora = document.getElementById('bora');
  const header = document.querySelector('.header');

  let pontoAtivo = 0;

  function atualizarPontos() {
    pontos.forEach((ponto) => ponto.classList.remove('ativa'));
    if (pontoAtivo >= 0 && pontoAtivo < pontos.length) {
      pontos[pontoAtivo].classList.add('ativa');
    }
  }

  function trocarTela(novaTela, telaAtual) {
    telaAtual.classList.add('move-left');
    setTimeout(() => {
      telaAtual.style.display = 'none';
      novaTela.style.display = 'flex';
      novaTela.classList.add('move-right');
      setTimeout(() => {
        telaAtual.classList.remove('move-left');
        novaTela.classList.remove('move-right');
      }, 300);
    }, 300);
  }

  function ativarEnterParaInput() {
    inputNome.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        comecar.click();
      }
    });
  }

  function ativarEnterParaNavegacao(tela, botao) {
    document.addEventListener('keypress', function (event) {
      if (event.key === 'Enter' && tela.style.display === 'flex') {
        event.preventDefault();
        botao.click();
      }
    });
  }

  comecar.addEventListener('click', function () {
    const nome = inputNome.value || 'Vencedor';
    const saudacao = document.getElementById('nome-saudacao');
    saudacao.textContent = nome;
    trocarTela(segundaTela, primeiraTela);
    pontoAtivo = 1;
    atualizarPontos();
  });

  proximo.addEventListener('click', function () {
    trocarTela(terceiraTela, segundaTela);
    pontoAtivo = 2;
    atualizarPontos();
  });

  bora.addEventListener('click', function () {
    terceiraTela.classList.add('move-left');
    setTimeout(() => {
      box.classList.add('move-top');
      setTimeout(() => {
        telaInicial.style.display = 'none';
        box.style.display = 'none';
        window.location.href = 'telaPrincipal.html';
        telaPrincipal.style.display = 'flex';
        header.classList.add('sobe');
        telaPrincipal.classList.add('move-bottom');
        setTimeout(() => {
          header.style.display = 'flex';
          telaPrincipal.classList.remove('move-bottom');
        }, 800);
      }, 800);
    }, 800);
  });

  pontoAtivo = -1;
  atualizarPontos();
  document.querySelector('.pontos').style.display = 'none';

  ativarEnterParaInput();
  ativarEnterParaNavegacao(segundaTela, proximo);
  ativarEnterParaNavegacao(terceiraTela, bora);

  atualizarPontos();
});
