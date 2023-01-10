function multiplicacao() {

    var input1 = document.querySelector(".corpo__multiplicacao--1").value;
    var input2 = document.querySelector(".corpo__multiplicacao--2").value;

    var multiplicacao = input1 * input2;

    var resultado = document.querySelector(".corpo__multiplicacao--resultado");

    resultado.textContent = multiplicacao;
}

var botao = document.querySelector(".corpo__multiplicacao--botao");

botao.addEventListener("click", multiplicacao);