import PromptSync = require('prompt-sync')
import { Produto } from "./produto";

const prompt = PromptSync();

const bateria = prompt('O aparelho tem bateria?  ')
const cor = prompt('Qual é a cor do aparelho? ');
const tipo = prompt('Qual é o tipo de produto?  ')
const preco = prompt('Qual é o preço do aparelho?  ')


const produto = new Produto({
  bateria,
  cor,
  tipo,
  preco
})
console.clear()
console.log(`\n\nO aparelho tem bateria? >> ${bateria}`);
console.log(`\n\nQual é a cor do aparelho? >> ${cor}`);
console.log(`\n\nQual é o tipo de produto? >>${tipo}`);
console.log(`\n\nQual é o preço do aparelho ? >>${preco}`);