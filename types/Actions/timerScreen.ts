// Timer

export interface IActionTimerClear {
  action: "timer-clear";
}

export interface IActionTimerPause {
  action: "timer-pause";
}

export interface IActionTimerPrepare {
  action: "timer-prepare";
  payload: number; // Seconds
}

export interface IActionTimerResume {
  action: "timer-resume";
}

export interface IActionTimerStart {
  action: "timer-start";
  payload: number; // Seconds
}
