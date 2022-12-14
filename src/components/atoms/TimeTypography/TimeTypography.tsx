import React from "react";

interface ITimeTypographyProps {
  children: string;
}

export const TimeTypography = ({
  children,
}: ITimeTypographyProps): JSX.Element => {

    const formatTime = (time: string): string => {
        const hours = time.slice(0, 2);
        const minutes = time.slice(3,5);
        let newTime: string;

        if(Number(hours) < 12) {
            newTime = `${hours}:${minutes} am`
        } else {
            newTime = `${Number(hours) - 12}:${minutes} pm`
        }
        return newTime;
    }
  return <p>{formatTime(children)}</p>;
};
