import { Screen } from "../../framework";
import { Header } from "../../control";

export interface IControlLayoutProps {
  children: React.ReactNode;
}

export const ControlLayout = ({ children }: IControlLayoutProps) => (
  <Screen>
    <Header />
    {children}
  </Screen>
);
