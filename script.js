const celulas = document.querySelectorAll('[data-celula]');
const status = document.getElementById('status');
const reiniciar = document.getElementById('reiniciar');

let jogador = 'X', ativo = true;

const vitorias = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function jogar(e) {
  const c = e.target;
  if (!ativo || c.textContent) return;

  c.textContent = jogador;

  const combo = vitorias.find(comb => comb.every(i => celulas[i].textContent === jogador));

  if (combo) {
    combo.forEach(i => celulas[i].classList.add('vencedor'));
    status.textContent = `Jogador ${jogador} venceu!`;
    ativo = false;
  } else if ([...celulas].every(c => c.textContent)) {
    status.textContent = 'Empate!';
    ativo = false;
  } else {
    jogador = jogador === 'X' ? 'O' : 'X';
    status.textContent = `Vez do jogador ${jogador}`;
  }
}

function reiniciarJogo() {
  jogador = 'X';
  ativo = true;
  celulas.forEach(c => {
    c.textContent = '';
    c.classList.remove('vencedor');
  });
  status.textContent = `Vez do jogador ${jogador}`;
}

celulas.forEach(c => c.addEventListener('click', jogar));
reiniciar.addEventListener('click', reiniciarJogo);
status.textContent = `Vez do jogador ${jogador}`;
