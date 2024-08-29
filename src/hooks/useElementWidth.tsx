import { useEffect, useRef } from "react";

type Props = {
  handleDivWidth: Function;
  width: number;
};

const useElementWidth = <T extends HTMLElement>(
  props: Props
): [React.RefObject<T>, number] => {
  const { handleDivWidth, width } = props;
  const elementRef = useRef<T>(null);

  const updateWidth = () => {
    if (elementRef.current) {
      const currentWidth = elementRef.current.getBoundingClientRect().width;

      if (currentWidth > 800) {
        handleDivWidth({ width: 800 });
      } else {
        handleDivWidth({ width: currentWidth });
      }
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return [elementRef, width];
};

export default useElementWidth;
