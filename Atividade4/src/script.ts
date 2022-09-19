import PromptSync = require('prompt-sync')
import { Funcionario } from './funcionario';

const prompt = PromptSync();

const cpf = prompt('Digite o CPF do funcionário (sem pontos)   ')
const name = prompt('Digite o nome do funcionário   ')
const hEntrada = prompt('Qual foi a hora de entrada no trabalho?   ')
const hSaida = prompt('Qual foi a hora de saída do trabalho?   ')

const funcionario = new Funcionario({
    cpf,
    name,
    hEntrada,
    hSaida
})

console.log(`\n\nO funcionário ${name}, do CPF ${cpf}, entrou no trabalho ás ${hEntrada} e saiu ás ${hSaida} `)