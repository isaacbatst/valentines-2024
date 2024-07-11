import CheckIcon from '@/components/icon/check-icon';
import React from 'react'
import { Enigma } from './enigmas';
import { BrainIcon, InfoIcon } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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

      <Collapsible>
        <CollapsibleTrigger>
          <p className="underline text-blue-500 cursor-pointer">
            Ver enigma
          </p>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col gap-2 py-4">
            <p
              className='text-lg font-bold'
            >Pergunta</p>
            <p className="text-muted-foreground">{enigma.pergunta}</p>
            <p
              className='text-lg font-bold'
            >Resposta</p>
            <p className="text-muted-foreground">{enigma.resposta}</p>
            {/* pista */}
            {enigma.pista && (
              <>
                <p
                  className='text-lg font-bold'
                >Pista</p>
                <p className="text-muted-foreground">{enigma.pista}</p>
              </>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default EnigmaPrevious