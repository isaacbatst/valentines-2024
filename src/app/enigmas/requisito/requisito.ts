export type TipoRequisito = "data" | "localizacao" | "enigma";

export type RequisitoData = {
  descricao: string;
  data: Date;
  tipo: "data";
};

export type RequisitoLocalizacao = {
  descricao: string;
  latitude: number;
  longitude: number;
  raio: number;
  tipo: "localizacao";
};

export type RequisitoEnigma = {
  descricao: string;
  id: number;
  tipo: "enigma";
};

export abstract class Requisito {
  constructor(public tipo: TipoRequisito) {}
  abstract get descricao(): string;
}
