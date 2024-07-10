import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {};

const Presentation = (props: Props) => {
  const el = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Identidade confirmada!\nSabrina Querem Apuque Lima Gomes de Oliveira.",
        "Olá, @sabrexe!",
        "Aqui você encontrará uma série de enigmas",
        "Ao resolvê-los, você descobrirá como será nosso dia juntos",
        "Boa sorte! Comece clicando no botão abaixo"
      ],
      typeSpeed: 60,
      backDelay: 3000,
      backSpeed: 40,
      onComplete: () => {
        setShowButton(true);
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex items-center">
        <div className="text-center flex-1">
          <span ref={el} className="whitespace-pre-wrap text-center" />
        </div>
      </div>
      <Button
        asChild
        className={`${
          showButton ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <Link href="/enigmas">
          Começar
        </Link>
      </Button>
    </div>
  );
};

export default Presentation;
