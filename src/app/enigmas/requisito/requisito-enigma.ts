import { Requisito } from "./requisito";

export class RequisitoEnigma extends Requisito {
  constructor(public id: number) {
    super("enigma");
  }

  get descricao(): string {
    return `O enigma ${this.id} deve ser resolvido`;
  }
}