import Image from "next/image";
import BaseComponent from "./base";
import { ConfirmId } from "./confirm-id";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <ConfirmId />
    </main>
  );
}
