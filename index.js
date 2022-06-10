const resposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPergunta = document.querySelector('#buttonPergunta')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


function fazerPergunta() {

  if(inputPergunta.value == '') {
    alert('Digite uma pergunta antes de continuar!')
    return
  }

  buttonPergunta.setAttribute('disabled', true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const tamanhoArray = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * tamanhoArray)

  resposta.innerHTML = pergunta + respostas[numeroAleatorio]

  resposta.style.opacity = 1;

  inputPergunta.value = ''

  setTimeout(function() {
    resposta.style.opacity = 0;
    buttonPergunta.removeAttribute('disabled')
  }, 3000)

}

