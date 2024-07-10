import { Requisito } from "./requisito";

export class RequisitoLocalizacao extends Requisito {
  constructor(public latitude: number, public longitude: number, public raio: number) {
    super("localizacao");
  }

  get descricao(): string {
    return `A localização deve ser próxima de (${this.latitude}, ${this.longitude}) com raio de ${this.raio} metros`;
  }
}