import React from "react";

interface IDateTypographyProps {
  children: string;
}

export const DateTypography = ({
  children,
}: IDateTypographyProps): JSX.Element => {

 const formatDate = (date: string): string => {
    return date.slice(0, 10);
 }

  return <p>{formatDate(children)}</p>;
};
