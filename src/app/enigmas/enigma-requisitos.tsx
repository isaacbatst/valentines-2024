import React from 'react'
import { Requisito } from './requisito/requisito';
import { RequisitoData } from './requisito/requisito-data';
import CalendarIcon from '@/components/icon/calendar-icon';
import { RequisitoEnigma } from './requisito/requisito-enigma';
import CheckIcon from '@/components/icon/check-icon';
import { Enigma } from './enigmas';

type Props = {
  requisitosValidados: { atendido: boolean; requisito: Requisito }[]
  enigma: Enigma
}

const EnigmaRequisitos = ({
  requisitosValidados,
  enigma
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold" htmlFor={`requisitos_${enigma.id}`}>
        Requisitos
      </label>
      <ul className="flex flex-col gap-2">
        {requisitosValidados.map(({ atendido, requisito }, index) => {
          if (requisito instanceof RequisitoData) {
            return (
              <li
                key={index}
                className={`flex items-center gap-2 ${
                  atendido ? "line-through" : ""
                }`}
              >
                <CalendarIcon />
                <span>{requisito.descricao}</span>
              </li>
            );
          }

          if (requisito instanceof RequisitoEnigma) {
            return (
              <li
                key={index}
                className={`flex items-center gap-2 ${
                  atendido ? "line-through" : ""
                }`}
              >
                <CheckIcon />
                <span>{requisito.descricao}</span>
              </li>
            );
          }

          return (
            <li
              key={index}
              className={`flex items-center gap-2 ${
                atendido ? "line-through" : ""
              }`}
            >
              <span>{requisito.descricao}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnigmaRequisitos