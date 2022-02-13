import _ from "lodash/fp";
import { NextPage } from "next";
import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormRow,
  FormRowButtons,
  InputText,
  ITimerDisplayElementProps,
  TimerDisplay,
} from "../../../components";
import {
  secondsToTimeDisplay,
  timeRemaining,
  timeStringToSeconds,
  updateDataStore,
} from "../../../functions";
import { useDataStore, useSocket } from "../../../providers";
import { timerIsPaused, timerIsRunning, timerIsStopped } from "../../../types";

const SECONDS_PRESETS: number[] = [300, 600, 900, 1800];

interface ITimerScreenInputs {
  timer: string;
}

const TimerControls = ({ text: timerText }: ITimerDisplayElementProps) => {
  const socket = useSocket();
  const { dataStore } = useDataStore();
  const [inputs, setInputs] = useState<ITimerScreenInputs>({ timer: "" });

  const { display: timerDisplay } = dataStore.copies.control.screens.timer;
  // The timer isn't considered to be running if the time has elapsed
  const isRunning =
    timerIsRunning(timerDisplay) && timeRemaining(timerDisplay.endTime) > 0;
  const isPaused = timerIsPaused(timerDisplay);
  // If it has elapsed, consider it to be stopped instead
  const isStopped = timerIsStopped(timerDisplay) || (!isRunning && !isPaused);

  const formatTimer = () => {
    const seconds = timeStringToSeconds(inputs.timer);
    setInputs(_.set("timer", secondsToTimeDisplay(seconds), inputs));

    updateDataStore(socket, {
      action: "timer-prepare",
      payload: seconds,
    });
  };

  const onCancel = () =>
    updateDataStore(socket, {
      action: "timer-clear",
    });

  const onPause = () =>
    updateDataStore(socket, {
      action: "timer-pause",
    });

  const onResume = () =>
    updateDataStore(socket, {
      action: "timer-resume",
    });

  const onStart = () =>
    updateDataStore(socket, {
      action: "timer-start",
      payload: timeStringToSeconds(inputs.timer),
    });

  return (
    <FormGroup>
      <FormRow>
        <FormLabel>Timer</FormLabel>
        <InputText
          data={inputs}
          disabled={!isStopped}
          onBlur={formatTimer}
          path="timer"
          setter={setInputs}
        />

        {/* Controls */}
        {isStopped && (
          <Button colour="green" onClick={onStart}>
            Start
          </Button>
        )}
        {isPaused && (
          <Button colour="green" onClick={onResume}>
            Resume
          </Button>
        )}
        {isRunning && (
          <Button colour="yellow" onClick={onPause}>
            Pause
          </Button>
        )}
        {(isRunning || isPaused) && (
          <Button colour="red" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </FormRow>

      <FormRow>
        <FormLabel>Status</FormLabel>
        <Button fake outline wide>
          {timerText}
        </Button>
        {isRunning && (
          <Button colour="green" fake outline>
            Running
          </Button>
        )}
        {isPaused && (
          <Button colour="yellow" fake outline>
            Paused
          </Button>
        )}
        {isStopped && (
          <Button colour="red" fake outline>
            Stopped
          </Button>
        )}
      </FormRow>
    </FormGroup>
  );
};

const TimerScreenPage: NextPage = () => {
  const socket = useSocket();
  const { dataStore } = useDataStore();

  const onStart = (seconds: number) => () =>
    updateDataStore(socket, {
      action: "timer-start",
      payload: seconds,
    });

  return (
    <Form title="Timer Screen">
      <TimerDisplay
        displayElement={TimerControls}
        timer={dataStore.copies.control.screens.timer.display}
      />

      <FormGroup title="Presets">
        <FormRowButtons>
          {SECONDS_PRESETS.map((seconds) => (
            <Button key={`preset-${seconds}`} onClick={onStart(seconds)}>
              {secondsToTimeDisplay(seconds)}
            </Button>
          ))}
        </FormRowButtons>
      </FormGroup>
    </Form>
  );
};

export default TimerScreenPage;
