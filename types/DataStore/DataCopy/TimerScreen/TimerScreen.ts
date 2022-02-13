export type TTimerTimestamp = string | null;

export interface ITimerScreen {
  display: {
    start: TTimerTimestamp;
    end: TTimerTimestamp;
  };
}
