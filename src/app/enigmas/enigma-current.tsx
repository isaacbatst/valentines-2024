import React, { useRef, useState } from "react";
import { Enigma } from "./enigmas";
import { useTyped } from "@/hooks/useTyped";
import { useUserContext } from "../context/user.context";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import EnigmaCurrentSolvedNow from "./enigma-current-solved-now";

type Props = {
  enigma: Enigma;
};

const EnigmaCurrent = ({ enigma }: Props) => {
  const typedElement = useRef<HTMLSpanElement>(null);
  const { presentedEnigmas, setPresentedEnigmas, setSolvedEnigmas } =
    useUserContext();
  const [solvedNow, setSolvedNow] = useState(false);

  const typedPergunta = useTyped(typedElement, {
    strings: [enigma.pergunta],
    typeSpeed: 60,
    backDelay: 3000,
    backSpeed: 40,

    onComplete: () => {
      setPresentedEnigmas((presentedEnigmas) => [
        ...(presentedEnigmas ?? []),
        enigma.id,
      ]);
    },
  });
  const alreadyPresented = presentedEnigmas?.includes(enigma.id);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const resposta = formData.get("resposta") as string;

    if (resposta.toLowerCase().trim() === enigma.resposta.toLowerCase().trim()) {
      setSolvedNow(true);
    } else {
      toast({
        title: "Resposta incorreta",
        description: "Podemos tentar novamente?",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {alreadyPresented ? (
        <span className="whitespace-pre-wrap text-center">
          {enigma.pergunta}
        </span>
      ) : (
        <div className="text-center whitespace-pre-wrap">
          <span
            ref={typedElement}
            className="whitespace-pre-wrap text-center"
          />
        </div>
      )}
      {alreadyPresented && !solvedNow && (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Resposta"
            className="border-2 border-black rounded-lg p-2"
            name="resposta"
            id="resposta"
          />
          <Button>Enviar</Button>
          {enigma.pista && (
            <Collapsible>
              <CollapsibleTrigger>
                <p className="text-blue-500 cursor-pointer text-center">
                  Precisa de uma dica?
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p
                  className="text-muted-foreground py-2"
                >{enigma.pista}</p>
              </CollapsibleContent>
            </Collapsible>
          )}
        </form>
      )}

      {solvedNow && <EnigmaCurrentSolvedNow enigma={enigma} />}
    </div>
  );
};

export default EnigmaCurrent;
