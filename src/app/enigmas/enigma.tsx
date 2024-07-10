import CheckIcon from "@/components/icon/check-icon";
import LockIcon from "@/components/icon/lock-icon";
import { CalendarIcon } from "lucide-react";
import { useUserContext } from "../context/user.context";
import EnigmaCurrent from "./enigma-current";
import { Enigma } from "./enigmas";
import { RequisitoData } from "./requisito/requisito-data";
import { RequisitoEnigma } from "./requisito/requisito-enigma";
import EnigmaRequisitos from "./enigma-requisitos";
import EnigmaPrevious from "./enigma-previous";
import { useState } from "react";

type Props = {
  enigma: Enigma;
};

const EnigmaComponent = ({ enigma }: Props) => {
  const { solvedEnigmas } = useUserContext();

  const requisitosValidados = enigma.requisitos.map((requisito) => {
    if (requisito instanceof RequisitoData) {
      return {
        atendido: requisito.data < new Date(),
        requisito: requisito,
      };
    }

    if (requisito instanceof RequisitoEnigma) {
      return {
        atendido: solvedEnigmas?.includes(requisito.enigmaId) ?? false,
        requisito: requisito,
      };
    }

    return {
      atendido: true,
      requisito: requisito,
    };
  });

  // 'current' | 'previous' | 'preview'
  const allRequisitosAtendidos = requisitosValidados.every(({ atendido }) => atendido);
  const displayType = solvedEnigmas?.includes(enigma.id)
    ? "previous"
    : allRequisitosAtendidos
    ? "current"
    : "preview";

  return (
    <li className="flex flex-col gap-4 bg-slate-50 p-6 rounded-xl">
      <h2
        className={`text-2xl font-bold text-center ${
          displayType === "previous" ? "line-through" : ""
        }`}
      >
        Enigma #{enigma.id}
      </h2>

      {displayType !== 'current' && (
        <EnigmaRequisitos enigma={enigma} requisitosValidados={requisitosValidados} />
      )}
      {displayType === "preview" && (
        <>
          <hr />
          <div className="flex items-center gap-4">
            <LockIcon />
            <span className="text-muted-foreground">Será liberado na data indicada se todos os requisitos forem atendidos.</span> 
          </div>
        </>
      )}

      {displayType === "current" && <EnigmaCurrent enigma={enigma} />}

      {displayType === "previous" && (
        <EnigmaPrevious enigma={enigma} />
      )}
    </li>
  );
};

export default EnigmaComponent;
