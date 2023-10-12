import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  topElem: React.RefObject<HTMLDivElement>;
};

function ScrollToTopButton({ topElem }: Props) {
  return (
    <footer className="sticky bottom-5 flex w-full items-center justify-center">
      <ArrowUpCircleIcon
        className="aspect-square w-10 animate-pulse cursor-pointer justify-center text-primary"
        onClick={() => topElem.current?.scrollIntoView({ behavior: "smooth" })}
      />
    </footer>
  );
}

export default ScrollToTopButton;
