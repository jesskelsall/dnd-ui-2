// Timer States

export interface ITimerDisplayStopped {
  endTime: null;
  seconds: null;
  secondsRemaining: number | null;
}

export interface ITimerDisplayRunning {
  endTime: string;
  seconds: number;
  secondsRemaining: null;
}

export interface ITimerDisplayPaused {
  endTime: null;
  seconds: number;
  secondsRemaining: number;
}

// Timer

export type TTimerDisplay =
  | ITimerDisplayStopped
  | ITimerDisplayRunning
  | ITimerDisplayPaused;

export interface ITimerScreen {
  display: TTimerDisplay;
}

// Timer State Assertions

export const timerIsRunning = (
  timer: TTimerDisplay
): timer is ITimerDisplayRunning => typeof timer.endTime === "string";

export const timerIsPaused = (
  timer: TTimerDisplay
): timer is ITimerDisplayPaused =>
  typeof timer.seconds === "number" &&
  typeof timer.secondsRemaining === "number";

export const timerIsStopped = (
  timer: TTimerDisplay
): timer is ITimerDisplayStopped => timer.seconds === null;
