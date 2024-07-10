'use client'
import { ConfirmId } from "./confirm-id";
import { UserContextProvider } from "./context/user.context";
import Redirect from "./redirect";

export default function Home() {
  return (
    <UserContextProvider>
      <Redirect>
        <main className="min-h-dvh flex flex-col bg-background">
          <ConfirmId />
        </main>
      </Redirect>
    </UserContextProvider>
  );
}
