export interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => (
  <>{children}</>
);
