const modal = document.getElementById("modal");
const local = document.getElementById("local");
const jogadores = [];
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const botao__fecha = document.getElementById('botao__fecha')


function criaJogadoresInicial() {
  jogadores.forEach((jogador) => {
    criaJogador(jogador);
  });
}
criaJogadoresInicial();

btn1.addEventListener("click", chamaModal);
function chamaModal() {
    
  modal.classList.add("ativa");

  botao__fecha.addEventListener('click', fechaModal)

}

btn2.addEventListener("click", criaCardJogador);
function criaCardJogador() {
  let nome = document.getElementById("nome");
  let idade = document.getElementById("idade");
  let posicao = document.getElementById("posicao");


  const pessoa = {
    nome: nome.value,
    idade: idade.value,
    posicao: posicao.value,
  };
  const existe = jogadores.find(nome => nome.nome == pessoa.nome)
  console.log(existe)
  criaJogador(pessoa);
  jogadores.push(pessoa);
  nome.value = "";
  idade.value = "";
  posicao.value = "";

  modal.classList.remove("ativa");
}

function criaJogador(jogador) {
  local.innerHTML += `
        <ul class="local__lista">
            <div class="local__inputs">
                <li data-nome>Nome:${jogador.nome}<br></li>
                <li>Idade:${jogador.idade} anos<br></li>
                <li>Posição:${jogador.posicao}<br></li>
            </div>
            <div class="container__botao__card">
                <button id="botao__apaga__jogador" class="botao__apaga__jogador">
                    x
                </button>
            </div>
        </ul>
    `
    ;
    const btn__deleta__card = document.getElementById('botao__apaga__jogador')
btn__deleta__card.addEventListener('click', (card) =>{

    const cardSelecionado = card.target.parentNode.parentNode
    jogadores.splice(card.target.parentNode.parentNode)
    cardSelecionado.remove()
})

}


function fechaModal(){
    modal.classList.remove("ativa");
}

