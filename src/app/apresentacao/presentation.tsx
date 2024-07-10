import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useUserContext } from "../context/user.context";

type Props = {};

const Presentation = (props: Props) => {
  const el = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = React.useState(false);
  const router = useRouter();
  const {setHasSeenPresentation} = useUserContext();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Identidade confirmada.\n\nSabrina Querem Apuque Lima Gomes de Oliveira.",
        "Olá, @sabrexe!",
        "Aqui você encontrará uma série de enigmas.\n\nAo resolvê-los, você descobrirá como será nosso dia 12.",
        "Boa sorte!\n\nPara começar aperte o botão abaixo.",
      ],
      typeSpeed: 60,
      backDelay: 3000,
      backSpeed: 40,
      onComplete: () => {
        setShowButton(true);
      },
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
        onClick={() => {
          setHasSeenPresentation(true)
          router.push("/enigmas");
        }}
        className={`${
          showButton ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        Começar
      </Button>
    </div>
  );
};

export default Presentation;
