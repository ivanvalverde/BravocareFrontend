import React from "react";
import DateTypography from "../../atoms/DateTypography";
import TimeTypography from "../../atoms/TimeTypography";
import "./ShiftCard.css";

interface IShiftCardProps {
  facilityName: string;
  shiftDate: string;
  startTime: string;
  endTime: string;
  cardNumber: number;
  selectedCardNumbers: number[];
  onClick: () => void;
}

export const ShiftCard = ({
  facilityName,
  shiftDate,
  startTime,
  endTime,
  cardNumber,
  selectedCardNumbers,
  onClick,
}: IShiftCardProps): JSX.Element => {
  return (
    <button
      className={`shiftcard-container ${
        selectedCardNumbers.includes(cardNumber) ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <div>
        <p>{facilityName}</p>
        <DateTypography>{shiftDate}</DateTypography>
        <div className="shiftcard-time-container">
          <TimeTypography>{startTime}</TimeTypography>
          <span>&nbsp;-&nbsp;</span>
          <TimeTypography>{endTime}</TimeTypography>
        </div>
      </div>
    </button>
  );
};
