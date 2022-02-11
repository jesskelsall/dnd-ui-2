import _ from "lodash/fp";
import Link from "next/link";
import { Button } from "../../../framework";

export interface INavButtonProps {
  href: string;
}

export const NavButton = ({ href }: INavButtonProps) => {
  const lastPath = _.last(href.split("/")) || "";

  return (
    <Link href={href} passHref>
      <Button>{_.startCase(lastPath)}</Button>
    </Link>
  );
};
