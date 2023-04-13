

/* Autor: Allan Furlani;
    Data: 13/06/2022;
    Versão: 1.0;
    Professor: Archimedes
    Objetivo: Calculadora utilizando a estrutura de seleção Switch Case */


// Inputs de Entrada

const inOperacao = document.getElementById("inOperacao");
const inOperando1 = document.getElementById("inOperando1");
const inOperando2 = document.getElementById("inOperando2");

// Botões

const btCalcular = document.getElementById("btCalcular");
const btLimpar = document.getElementById("btLimpar");

// Saída  

let outSaida = document.getElementById("outSaida");

function calcularOperando() {

    var operando1 = Number(inOperando1.value);
    var operando2 = Number(inOperando2.value);
    var resultado;


    if (inOperacao.value == "") {
        alert(" A Operação Não foi Inserida!");
        inOperacao.focus();
    } else {
        if (inOperando1.value == "") {
            alert("O Operando 1 Não foi Inserido!");
            inOperando1.focus();
        }  else {

            switch (inOperacao.value) {

                case "+":
                    if (inOperando2.value == "") {
                        alert("O Operando 2  Deve ser Preenchido");
                        inOperando2.focus();
                    } else {
                        resultado = operando1 + operando2;
                        outSaida.textContent = operando1 + " + " + operando2 + " = " + resultado.toFixed(2);
                    }
                    break;
                case "-":
                    if (inOperando2.value == "") {
                        alert("O Operando 2  Deve ser Preenchido");
                        inOperando2.focus();
                    } else {
                        resultado = operando1 - operando2;
                        outSaida.textContent = operando1 + " - " + operando2 + " = " + resultado.toFixed(2);
                    }
                    break;
                case "*":
                    if (inOperando2.value == "") {
                        alert("O Operando 2  Deve ser Preenchido");
                        inOperando2.focus();
                    } else {
                        resultado = operando1 * operando2;
                        outSaida.textContent = operando1 + " * " + operando2 + " = " + resultado.toFixed(2);
                    }
                    break;
                case "/":
                    if (inOperando2.value == "" || operando2 == 0) {
                        alert("O Operando 2 Necessita ser Diferente de Zero!");
                        inOperando2.focus();
                    } else {
                        resultado = operando1 / operando2;
                        outSaida.textContent = operando1 + " / " + operando2 + " = " + resultado.toFixed(2);
                    }
                    break;
                case "^":
                    if (operando2 < 0) {
                        alert("O Operando 2 Não Pode ser Negativo");
                        inOperando2.focus();
                    } else if (inOperando2.value == "") {
                        alert("O Operando 2  Deve ser Preenchido");
                        inOperando2.focus();
                    } else {
                        resultado = operando1 ** operando2;
                        outSaida.textContent = operando1 + " ^ " + operando2 + " = " + resultado.toFixed(2);
                    }
                    break;
                case "SQRT":
                case "sqrt":
                    if (operando1 < 0) {
                        alert(" O Operando 1 Não Pode ser Menor que Zero!");
                        inOperando1.focus();
                    } else {
                        inOperando2.value = "";
                        resultado = Math.sqrt(operando1);
                        outSaida.textContent = " SQRT (" + operando1 + ")" + " = " + resultado.toFixed(2);
                    }  
                    break;
                default:
                    alert("O Operador Inserido é Invalido!");
                    inOperacao.focus();
            }
        }
    }
}
btCalcular.addEventListener("click", calcularOperando);



function limparDados() {
    inOperacao.value = "";
    inOperando1.value = "";
    inOperando2.value = "";
    outSaida.textContent = "";
} btLimpar.addEventListener("click", limparDados);