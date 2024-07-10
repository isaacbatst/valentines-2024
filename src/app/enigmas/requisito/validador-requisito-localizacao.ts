import { RequisitoLocalizacao } from "./requisito";
import { ValidadorRequisito } from "./validador-requisito";

export class ValidadorRequisitoLocalizacao extends ValidadorRequisito<RequisitoLocalizacao> {
  constructor(requisito: RequisitoLocalizacao, private latitude: number, private longitude: number) {
    super(requisito);
  }

  validar() {
    const distancia = Math.sqrt(
      Math.pow(this.requisito.latitude - this.latitude, 2) +
      Math.pow(this.requisito.longitude - this.longitude, 2)
    );
    return distancia <= this.requisito.raio;
  }
}