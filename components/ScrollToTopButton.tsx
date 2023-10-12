import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import React, { useRef, useEffect } from "react";

type Props = {
  topElem: React.RefObject<HTMLDivElement>;
};

function ScrollToTopButton({ topElem }: Props) {
  const windowScrollY = useRef<number>(0);
  const [scrolling, setScrolling] = React.useState(false);

  useEffect(() => {
    windowScrollY.current = window.scrollY;
    console.log(window.screenY);
  }, [scrolling]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      setTimeout(() => {
        setScrolling(false);
      }, 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScrollY.current > 100 ? (
    <footer className="sticky bottom-5 flex w-full items-center justify-center">
      <ArrowUpCircleIcon
        className="aspect-square w-10 animate-pulse cursor-pointer justify-center text-primary"
        onClick={() => topElem.current?.scrollIntoView({ behavior: "smooth" })}
      />
    </footer>
  ) : null;
}

export default ScrollToTopButton;
