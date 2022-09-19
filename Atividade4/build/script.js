"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var funcionario_1 = require("./funcionario");
var prompt = PromptSync();
var cpf = prompt('Digite o CPF do funcionário (sem pontos)   ');
var name = prompt('Digite o nome do funcionário   ');
var hEntrada = prompt('Qual foi a hora de entrada no trabalho?   ');
var hSaida = prompt('Qual foi a hora de saída do trabalho?   ');
var funcionario = new funcionario_1.Funcionario({
    cpf: cpf,
    name: name,
    hEntrada: hEntrada,
    hSaida: hSaida
});
console.log("\n\nO funcion\u00E1rio ".concat(name, ", do CPF ").concat(cpf, ", entrou no trabalho \u00E1s ").concat(hEntrada, " e saiu \u00E1s ").concat(hSaida, " "));
