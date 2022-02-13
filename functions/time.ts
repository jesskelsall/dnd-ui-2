import _ from "lodash/fp";
import { DateTime } from "luxon";
import { TTimerDisplay } from "../types";
import { zeroPad } from "./text";

const SECONDS_PER_MINUTE = 60;

const parseNumber = (string: string): number => {
  const parsed = parseFloat(string);
  return _.isNaN(parsed) ? 0 : parsed;
};

export const timeRemaining = (isoString: string): number => {
  const timestamp = DateTime.fromISO(isoString);
  const duration = timestamp.diffNow();

  return Math.max(0, Math.round(duration.as("seconds")));
};

export const timeStringToSeconds = (timeString: string): number => {
  let minutes = 0;
  let seconds = 0;

  if (timeString.includes(":")) {
    // Digital clock format - "04:30"
    const timeParts = timeString.split(":");
    minutes = parseNumber(timeParts[0]);
    seconds = parseNumber(timeParts[1]);
  } else if (timeString.includes("m") || timeString.includes("s")) {
    // Minutes & seconds format - "4m30s"
    const matchMinutes = timeString.match(/(\d+)m/);
    const matchSeconds = timeString.match(/(\d+)s/);

    if (matchMinutes) minutes = parseNumber(matchMinutes[1]);
    if (matchSeconds) seconds = parseNumber(matchSeconds[1]);
  } else if (/^[\d.]+$/.test(timeString)) {
    // Minutes format - "1.5"
    minutes = parseNumber(timeString);
  }

  return minutes * SECONDS_PER_MINUTE + seconds;
};

export const secondsToTimeDisplay = (seconds: number): string => {
  const displayMinutes = zeroPad(2, Math.floor(seconds / SECONDS_PER_MINUTE));
  const displaySeconds = zeroPad(2, Math.round(seconds % SECONDS_PER_MINUTE));

  return `${displayMinutes}:${displaySeconds}`;
};

export const displayTimer = (timer: TTimerDisplay): string => {
  let seconds: number = timer.secondsRemaining || 0;

  if (!seconds && timer.endTime) {
    seconds = timeRemaining(timer.endTime);
  }

  return secondsToTimeDisplay(seconds);
};
