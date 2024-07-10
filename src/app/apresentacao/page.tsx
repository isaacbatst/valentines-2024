"use client";
import { useSearchParams } from "next/navigation";
import CalendarIcon from "../../components/icon/calendar-icon";
import Presentation from "../apresentacao/presentation";

export default function Enigmas() {
  const params = useSearchParams();

  return (
    <div className="flex flex-col flex-1 items-center min-h-screen bg-background text-foreground">
      <div className="max-w-md w-full px-6 py-8 flex flex-col flex-1">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Para @sabrexe</h1>
          <div className="w-full">
            <div className="text-2xl font-bold" />
          </div>
        </div>
        <Presentation />
      </div>
    </div>
  );
}
