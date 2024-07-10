import { RequisitoData } from "./requisito";
import { ValidadorRequisito } from "./validador-requisito";

export class ValidadorRequisitoData extends ValidadorRequisito<RequisitoData> {
  constructor(requisito: RequisitoData, private dataAtual: Date = new Date()) {
    super(requisito);
  }

  validar() {
    return this.requisito.data > this.dataAtual;
  }
}