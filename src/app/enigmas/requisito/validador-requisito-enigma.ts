import { RequisitoEnigma } from "./requisito";
import { ValidadorRequisito } from "./validador-requisito";

export class ValidadorRequisitoEnigma extends ValidadorRequisito<RequisitoEnigma> {
  constructor(requisito: RequisitoEnigma, private enigmasResolvidos: number[]) {
    super(requisito);
  }

  validar() {
    return this.enigmasResolvidos.includes(this.requisito.id);
  }
}