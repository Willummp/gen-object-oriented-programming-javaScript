"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var produto_1 = require("./produto");
var prompt = PromptSync();
var bateria = prompt('O aparelho tem bateria?  ');
var cor = prompt('Qual é a cor do aparelho? ');
var tipo = prompt('Qual é o tipo de produto?  ');
var preco = prompt('Qual é o preço do aparelho?  ');
var produto = new produto_1.Produto({
    bateria: bateria,
    cor: cor,
    tipo: tipo,
    preco: preco
});
console.clear();
console.log("\n\nO aparelho tem bateria? >> ".concat(bateria));
console.log("\n\nQual \u00E9 a cor do aparelho? >> ".concat(cor));
console.log("\n\nQual \u00E9 o tipo de produto? >>".concat(tipo));
console.log("\n\nQual \u00E9 o pre\u00E7o do aparelho ? >>".concat(preco));
