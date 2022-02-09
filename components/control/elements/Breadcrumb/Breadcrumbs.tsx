import _ from "lodash/fp";
import Link from "next/link";
import styled from "styled-components";
import { randomId } from "../../../../functions";

const BREADCRUMB_ARROW = " - ";

const StyledBreadcrumbs = styled.p`
  margin: 0;
  pointer-events: none;
`;

const Breadcrumb = styled.a`
  pointer-events: initial;

  &:hover {
    text-decoration: underline;
  }
`;

interface IBreadcrumbProps {
  route: string;
}

export const Breadcrumbs = ({ route }: IBreadcrumbProps) => {
  if (route === "/control") return null;

  const linkedRouteParts = route
    .split("/")
    .filter((part) => part && part !== "control");
  const lastPart = linkedRouteParts.splice(-1)[0];

  const getPartName = (part: string): string => {
    const partName = part.startsWith("[") ? part.replace("Id]", "") : part;
    return _.startCase(partName);
  };

  const links = linkedRouteParts.map((part, partIndex) => {
    const href = [
      "",
      "control",
      ...linkedRouteParts.slice(0, partIndex + 1),
    ].join("/");

    return (
      <Link href={href} key={randomId([])} passHref>
        <Breadcrumb>{getPartName(part)}</Breadcrumb>
      </Link>
    );
  });

  const currentPage = <span>{getPartName(lastPart)}</span>;

  const arrows = Array(links.length).fill(BREADCRUMB_ARROW);

  return (
    <StyledBreadcrumbs>
      {BREADCRUMB_ARROW}
      {_.zip([...links, currentPage], arrows)}
    </StyledBreadcrumbs>
  );
};
