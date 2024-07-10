import { Requisito } from "./requisito";

export class RequisitoEnigma extends Requisito {
  constructor(public enigmaId: number) {
    super("enigma");
  }

  get descricao(): string {
    return `O enigma #${this.enigmaId} deve ser resolvido`;
  }
}