//Array com os jogadores
var jogadores = [
  {
    nome: "Michael",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Jim",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Pam",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Dwight",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Ryan",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Meredith",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Darryl",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Kevin",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Oscar",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Kelly",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Stanley",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Andy",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Creed",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Phyllis",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Angela",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Erin",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Gabe",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Toby",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }
];

//Variável tabela
var elementoTabela = document.getElementById("tabelaJogadores");

//Função para comparar pontos
function compararPontos(a, b) {
  return b.pontos - a.pontos;
}

//Função de organizar jogadores
function exibirNaTela() {
  jogadores.sort(compararPontos);

  elementoTabela.innerHTML = "";

  //Laço principal criar a tabela e incrementar a cada loop
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];

    var linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${jogador.nome}</td>
      <td>${jogador.vitoria}</td>
      <td>${jogador.empate}</td>
      <td>${jogador.derrota}</td>
      <td>${jogador.pontos}</td>
      <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
    `;

    elementoTabela.appendChild(linha);
  }
}

//Função para adicionar vitória na tabela
function adicionarVitoria(index) {
  jogadores[index].vitoria++;
  jogadores[index].pontos = jogadores[index].pontos + 3;
  exibirNaTela();

  //Condicional de vitória e modificação de exibição
  if (jogadores[index].pontos >= 9) {
    linhaPrincipal.innerHTML = "";
    elementoTabela.innerHTML = "";
    var elementoTitulo = document.getElementById("medalha");
    elementoTitulo.innerHTML =
      "Parabéns, " + jogadores[index].nome + " você venceu!";
    var gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML =
      '<img src="https://thebruinpost.org/wp-content/uploads/2021/01/IMG_1824.gif">';
  }
}

//Função para adicionar empate na tabela
function adicionarEmpate(index) {
  jogadores[index].empate++;
  jogadores[index].pontos++;
  exibirNaTela();
}

//Função para adicionar derrota na tabela
function adicionarDerrota(index) {
  jogadores[index].derrota++;
  exibirNaTela();
}

exibirNaTela();
