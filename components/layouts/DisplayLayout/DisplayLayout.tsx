import styled from "styled-components";

const FullScreen = styled.div`
  height: 100vh;
`;

export interface IDisplayLayoutProps {
  children: React.ReactNode;
}

export const DisplayLayout = ({ children }: IDisplayLayoutProps) => (
  <FullScreen>{children}</FullScreen>
);
