
interface NewProduto {
    preco: number;
    cor: string;
    bateria: boolean;
    tipo: string;

  }

  class Produto{
    private preco: number;
    private cor: string;
    private bateria: boolean;
    private tipo:string;
    
    constructor ({preco,cor,bateria,tipo}){
    this.preco = preco;
    this.cor=cor;
    this.bateria=bateria;
    this.tipo=tipo;
  
  }

} export { Produto };