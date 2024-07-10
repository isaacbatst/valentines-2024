import CheckIcon from '@/components/icon/check-icon';
import React from 'react'
import { Enigma } from './enigmas';
import { BrainIcon, InfoIcon } from 'lucide-react';

type Props = {
  enigma: Enigma
}

const EnigmaPrevious = ({enigma}: Props) => {
  const lastDescoberta = enigma.descoberta?.[enigma.descoberta.length - 1]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 bg-green-100 p-2 rounded-lg">
        <CheckIcon />
        <span>Enigma resolvido</span>
      </div>
      {lastDescoberta && (
        <div className="flex items-center gap-2 bg-blue-100 p-2 rounded-lg">
          <InfoIcon size={36} /> 
          <span>{lastDescoberta}</span>
        </div>
      )}
    </div>
  );
}

export default EnigmaPrevious