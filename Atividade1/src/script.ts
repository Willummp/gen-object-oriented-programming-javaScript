import PromptSync = require('prompt-sync')
import { Cliente } from "./cliente"

const prompt = PromptSync()

const nome = prompt("Digite o seu nome  ")
const cpf = Number(prompt('Digite seu CPF  '))
const rg = Number(prompt('Digite seu RG  '))


const cliente = new Cliente({
    nome,
    cpf,
    rg
})

console.log(`Seu nome é: ${nome}\n Seu CPF é : ${cpf}\n Seu RG é ${rg}`);