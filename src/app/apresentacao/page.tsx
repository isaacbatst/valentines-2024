"use client";
import Presentation from "../apresentacao/presentation";
import { UserContextProvider } from "../context/user.context";
import Redirect from "../redirect";

export default function Enigmas() {
  return (
    <UserContextProvider>
      <Redirect>
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
      </Redirect>
    </UserContextProvider>
  );
}
