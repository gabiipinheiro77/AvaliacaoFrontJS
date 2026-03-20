function exercicio1 () {
    alert("teste")  
    // Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
    const GanhoporHora = Number(prompt("Digite o quanto você ganha por hora:"))
    const HorasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas no mês:"))
    alert("Você vai receber no final do mês:"+ GanhoporHora*HorasTrabalhadas) 
}
const buttonExercicio1 = document.getElementById("exercicio1")
buttonExercicio1.addEventListener('click' , () => {exercicio1()})

//exercício2
//Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
function exercicio2 () {
    //alert("teste")
    const milhas = Number(prompt("Digite a distância em milhas:"))
    const quilometros = (milhas*1.60934)
    alert("As milhas em km é:" + quilometros)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => {exercicio2()})

//exercicio3
//. Peça o valor de um capital inicial, a taxa de juros (em formato decimal, como 0.05) e o tempo em dias. Mostre:
//Capital
//Juros
//Montante (capital + juros)
function exercicio3 () {
   // alert("teste")
const capitalinicial = Number(prompt("Digite o valor de um capital inicial:"))
const taxadeJuros = Number(prompt("Digite a taxa de juros em formato decimal:"))
alert("O Montante é:"+ (capitalinicial + taxadeJuros))
}
const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click' , () => {exercicio3()})

function exercicio4 () {
   // alert("testejjvnbjlb")
   //Peça a velocidade permitida na via e a velocidade que o motorista estava. Calcule a multa:
//Até 20% acima → R$ 102,00
//Mais de 20% acima → R$ 500,00
const velocidade = Number(prompt("Digite a velocidade permitida na via"))
const velocidadeP = Number(prompt("Digite a velocidade que o motorista ESTAVA:"))

}
const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click' , () => {exercicio4()})
