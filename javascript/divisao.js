function divisao() {

    var input1 = document.querySelector(".corpo__divisao--1").value;
    var input2 = document.querySelector(".corpo__divisao--2").value;
    var resultado = document.querySelector(".corpo__divisao--resultado");

    if (input1 == 0 || input2 == 0) {
        alert("Não é possível realizar divisão com 0!!!")
    }
    else {
        var divisao = input1 / input2;

        resultado.textContent = divisao;
    }
}

var botao = document.querySelector(".corpo__divisao--botao");

botao.addEventListener("click", divisao);