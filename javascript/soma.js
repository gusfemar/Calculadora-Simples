function soma() {

    var input1 = document.querySelector(".corpo__soma--1").value;
    var input2 = document.querySelector(".corpo__soma--2").value;

    var soma = parseFloat(input1) + parseFloat(input2);

    var resultado = document.querySelector(".corpo__soma--resultado");

    resultado.textContent = soma;
    console.log(resultado.textContent);
}

var botao = document.querySelector(".corpo__soma--botao");

botao.addEventListener("click", soma);
