import LoadingSpinner from "@/components/loading-spinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useMemo, useState } from "react";
import { useUserContext } from "../context/user.context";
import EnigmaComponent from "./enigma";
import { enigmas } from "./enigmas";

type Props = {};

const EnigmasComponent = (props: Props) => {
  const { solvedEnigmas } = useUserContext();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  const currentEnigma = useMemo(() => {
    if (!solvedEnigmas) return undefined;
    return enigmas.find((enigma) => !solvedEnigmas.includes(enigma.id));
  }, [solvedEnigmas]);
  const defaultOpen = currentEnigma ? `enigma-${currentEnigma.id}` : undefined;
  useEffect(() => {
    if (currentEnigma) setOpenItem(`enigma-${currentEnigma.id}`);
  }, [currentEnigma]);

  const allSolved = solvedEnigmas?.length === enigmas.length;

  if (allSolved) {
    return (
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold text-center">
          Parabéns! Você deve estar tendo um dia incrível!
        </h1>
        <p className="text-center">
          Obrigado por participar e por resolver todos os enigmas. Você é incrível!
        </p>
      </div>
    );
  }

  if (defaultOpen === undefined) return <LoadingSpinner />;


  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
    >
      <ul className="flex flex-col gap-4">
        {enigmas.map((enigma) => (
          <AccordionItem key={enigma.id} value={`enigma-${enigma.id}`}>
            <AccordionTrigger>Enigma #{enigma.id}</AccordionTrigger>
            <AccordionContent>
              <EnigmaComponent enigma={enigma} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </ul>
    </Accordion>
  );
};

export default EnigmasComponent;
