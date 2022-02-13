import _ from "lodash/fp";
import Link from "next/link";
import { Button } from "../../../framework";
import { IButtonProps } from "../../../framework/controls/Button/Button";

export interface INavButtonProps extends IButtonProps {
  href: string;
}

export const NavButton = ({
  children,
  href,
  ...buttonProps
}: INavButtonProps) => {
  const lastPath = _.last(href.split("/")) || "";

  return (
    <Link href={href} passHref>
      <Button {...buttonProps}>{children || _.startCase(lastPath)}</Button>
    </Link>
  );
};
