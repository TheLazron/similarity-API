"use client";

import { useTheme } from "next-themes";

import { FC, useEffect, useState } from "react";

interface CodeProps {
  code: string;
  show: boolean;
  language: string;
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  show,
  animated,
  animationDelay,
  language,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState<string>(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);

        return () => clearInterval(intervalId);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]);

  // number of lines
  const lines = text.split(/\r\n|\r|\n/).length;

  return <p>{code}</p>;
};

export default Code;
