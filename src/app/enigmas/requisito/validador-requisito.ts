import { Requisito } from "./requisito";

export abstract class ValidadorRequisito<T extends Requisito> {
  constructor(protected requisito: T) {}

  abstract validar(): boolean;
}