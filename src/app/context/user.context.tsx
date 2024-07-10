import { useStoredState } from "@/hooks/useStoredState";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
} from "react";

type UserContextType = {
  identified: boolean | null;
  solvedEnigmas: number[] | null;
  presentedEnigmas: number[] | null;
  hasSeenPresentation: boolean | null;
  setSolvedEnigmas: Dispatch<SetStateAction<number[] | null>> 
  setPresentedEnigmas: Dispatch<SetStateAction<number[] | null>>;
  setIdentified: Dispatch<SetStateAction<boolean | null>>;
  setHasSeenPresentation: Dispatch<SetStateAction<boolean | null>>;
};

const UserContext = createContext<UserContextType>(null as any);

type UserContextProviderProps = PropsWithChildren;

const UserContextProvider = (props: UserContextProviderProps) => {
  const [identified, setIdentified] = useStoredState<boolean>(
    "identified",
    false
  );
  const [solvedEnigmas, setSolvedEnigmas] = useStoredState<number[]>(
    "solvedEnigmas",
    []
  );
  const [presentedEnigmas, setPresentedEnigmas] = useStoredState<number[]>(
    "presentedEnigmas",
    []
  );
  const [hasSeenPresentation, setHasSeenPresentation] = useStoredState<boolean>(
    "hasSeenPresentation",
    false
  );

  const value = useMemo(
    () => ({
      identified,
      solvedEnigmas,
      presentedEnigmas,
      hasSeenPresentation,
      setSolvedEnigmas,
      setPresentedEnigmas,
      setIdentified,
      setHasSeenPresentation,
    }),
    [
      identified,
      solvedEnigmas,
      presentedEnigmas,
      setSolvedEnigmas,
      setPresentedEnigmas,
      setIdentified,
      hasSeenPresentation,
      setHasSeenPresentation,
    ]
  );

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }

  return context;
};

export { UserContext, UserContextProvider, useUserContext };
