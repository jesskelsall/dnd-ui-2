import { Button } from "~/components/framework/controls/Button";

interface ISyncButtonProps {
  applyChanges: () => void;
  changes: boolean;
  realTime: boolean;
  setRealTime: (realTime: boolean) => void;
}

export const SyncButton = ({
  applyChanges,
  changes,
  realTime,
  setRealTime,
}: ISyncButtonProps) => {
  if (realTime) {
    return (
      <Button block colour="orange" onClick={() => setRealTime(false)}>
        Real Time
      </Button>
    );
  }

  return (
    <Button
      block
      colour={changes ? "blue" : "grey"}
      onClick={() => (changes ? applyChanges() : setRealTime(true))}
    >
      {changes ? "Apply Changes" : "No Changes"}
    </Button>
  );
};
