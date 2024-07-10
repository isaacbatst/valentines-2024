import LoadingSpinner from "@/components/loading-spinner";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { useUserContext } from "./context/user.context";

type Props = {};

const Redirect = (props: PropsWithChildren) => {
  const { identified, hasSeenPresentation } = useUserContext();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if(identified === null || hasSeenPresentation === null) return
    if (pathname === "/enigmas" && !identified) {
      router.replace("/");
    }

    if (pathname === "/enigmas" && !hasSeenPresentation) {
      router.replace("/apresentacao");
    }

    if (pathname === "/apresentacao" && identified && hasSeenPresentation) {
      router.replace("/enigmas");
    }

    if (pathname === "/apresentacao" && !identified) {
      router.replace("/");
    }

    if (pathname === "/" && identified && hasSeenPresentation) {
      router.replace("/enigmas");
    }

    if (pathname === "/" && identified && !hasSeenPresentation) {
      router.replace("/apresentacao");
    }
  }, [identified, hasSeenPresentation, pathname, router]);

  if (identified === null || hasSeenPresentation === null) {
    return <LoadingSpinner />;
  }

  return <>{props.children}</>;
};

export default Redirect;
