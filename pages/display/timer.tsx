import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ITimerDisplayElementProps, TimerDisplay } from "../../components";
import { useDataStore } from "../../providers";

interface ICenterProps {
  colour: string;
}

const Center = styled.div<ICenterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.colour};
`;

const Text = styled.span`
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 20rem;
  font-weight: bold;
`;

const TimerRender = ({ text: timerText }: ITimerDisplayElementProps) => (
  <Text>{timerText}</Text>
);

const TimerScreen: NextPage = () => {
  const router = useRouter();
  const { dataStore } = useDataStore();
  const { display } = dataStore.copies.display.screens.timer;
  const { colour } = router.query;

  return (
    <Center colour={typeof colour === "string" ? colour : "black"}>
      <TimerDisplay displayElement={TimerRender} timer={display} />
    </Center>
  );
};

export default TimerScreen;
