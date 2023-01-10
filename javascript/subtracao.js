function subtracao() {

    var input1 = document.querySelector(".corpo__subtracao--1").value;
    var input2 = document.querySelector(".corpo__subtracao--2").value;

    var subtracao = input1 - input2;

    var resultado = document.querySelector(".corpo__subtracao--resultado");

    resultado.textContent = subtracao;
}

var botao = document.querySelector(".corpo__subtracao--botao");

botao.addEventListener("click", subtracao);