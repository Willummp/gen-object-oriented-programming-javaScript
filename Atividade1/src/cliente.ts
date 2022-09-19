
interface NewCliente {
    nome: string;
    cpf: number;
    rg: number;
}

class Cliente {
    private nome: string;
    private cpf: number
    private rg: number;

    constructor ({nome,cpf,rg}:NewCliente){
      this.nome=nome;
      this.cpf=cpf;
      this.rg=rg;
    }
}

export { Cliente }
    