interface NewFuncionario {
    name: string;
    hSaida: number;
    hEntrada: number;
    cpf: number;
}

class Funcionario {
    private name: string;
    private hSaida: number;
    private hEntrada: number;
    private cpf: number;

    constructor({name,hEntrada,hSaida,cpf}){
        this.name = name;
        this.hSaida = hSaida;
        this.hEntrada = hEntrada;
        this.cpf = cpf;
    }
} export { Funcionario }