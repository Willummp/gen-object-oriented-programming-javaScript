"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var cliente_1 = require("./cliente");
var prompt = PromptSync();
var nome = prompt("Digite o seu nome  ");
var cpf = Number(prompt('Digite seu CPF  '));
var rg = Number(prompt('Digite seu RG  '));
var cliente = new cliente_1.Cliente({
    nome: nome,
    cpf: cpf,
    rg: rg
});
console.log("Seu nome \u00E9: ".concat(nome, "\n Seu CPF \u00E9 : ").concat(cpf, "\n Seu RG \u00E9 ").concat(rg));
