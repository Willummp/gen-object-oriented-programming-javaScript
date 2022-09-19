interface NewAviao {
    assentos: number;
    peso: number;
    tipoMotor: string;
  }
  
  class Aviao {
      private qtdAssentos: number;
      private peso: string;
      private tipoMotor:string; 
      
      constructor({qtdAssentos,peso,tipoMotor}){
      this.qtdAssentos=qtdAssentos;
      this.peso=this.peso;
      this.tipoMotor=tipoMotor;
  }
}
export { Aviao }
 