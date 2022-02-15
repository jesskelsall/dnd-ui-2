import { useEffect, useState } from "react";
import { displayTimer } from "../../../functions";
import { TTimerDisplay } from "../../../types";

export interface ITimerDisplayElementProps {
  text: string;
}

export interface ITimerDisplayProps {
  displayElement: React.ElementType<ITimerDisplayElementProps>;
  timer: TTimerDisplay;
}

export const TimerDisplay = ({
  displayElement: Display,
  timer,
}: ITimerDisplayProps) => {
  const [text, setText] = useState<string>("--:--");

  useEffect(() => {
    const timeout = setInterval(() => {
      setText(displayTimer(timer));
    }, 1000);

    return () => clearTimeout(timeout);
  });

  return <Display text={text} />;
};
