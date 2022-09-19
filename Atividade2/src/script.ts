import PromptSync = require('prompt-sync');
import { Aviao } from "./aviao";

const prompt = PromptSync();

const peso = Number(prompt('Digite o peso do avião  '))
const qtdAssentos = Number(prompt('Digite a qtd de assentos do avião  '))
const tipoMotor = prompt('Qual é o tipo de motor do avião? ')

const aviao = new Aviao({
    peso,
    qtdAssentos,
    tipoMotor
})

console.log(`Seu avião é um ${tipoMotor}, pesa ${peso} e tem ${qtdAssentos} kgs `);
