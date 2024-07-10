'use client';
import { UserContextProvider } from "../context/user.context";
import Redirect from "../redirect";
import EnigmasComponent from './enigmas-component';

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
            <EnigmasComponent />
          </div>
        </div>
      </Redirect>
    </UserContextProvider>
  );
}