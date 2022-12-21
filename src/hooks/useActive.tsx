import { useRootContext } from "@/context/context";
import { useEffect, useRef } from "react";
import useScroll from "./useScroll";

const useActive = (id: string) => {
  const ref:any = useRef();
  const rootContext: any = useRootContext();
  const { setCurrentActive } = rootContext;
  const { scroll } = useScroll();

  useEffect(() => {
    if (ref.current) {
      if (ref.current.offsetTop <= scroll + 100) {
        setCurrentActive(id);
      }
    }
  }, [scroll, setCurrentActive, id]);

  return ref;
};

export default useActive;
