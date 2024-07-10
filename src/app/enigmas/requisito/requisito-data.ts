import { Requisito } from "./requisito";

export class RequisitoData extends Requisito {
  constructor(public data: Date) {
    super("data");
  }

  get descricao(): string {
    return `A data deve ser posterior a ${this.data.toLocaleDateString()}`;
  }

}