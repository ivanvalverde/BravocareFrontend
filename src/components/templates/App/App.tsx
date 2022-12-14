import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIResponse, OverlapShifts, Shifts } from "../../../utils";
import QuestionsContainer from "../../molecules/QuestionsContainer";
import OverlapDisplayer from "../../organisms/OverlapDisplayer";
import ShiftCard from "../../organisms/ShiftCard";
import "./App.css";

export const App = (): JSX.Element => {
  const [shifts, setShifts] = useState<Shifts[]>([]);
  const [overlapShifts, setOverlapShifts] = useState<OverlapShifts>(
    {} as OverlapShifts
  );
  const [selectedCardNumbers, setSelectedCardNumbers] = useState<number[]>([]);

  useEffect(() => {
    const getShifts = async () => {
      try {
        const { data } = await axios.get<APIResponse<Shifts[]>>(
          "http://localhost:3001/shifts"
        );
        setShifts(data.data);
      } catch {
        setShifts([]);
      }
    };
    getShifts();
  }, []);

  const handleClickCard = (cardNumber: number) => {
    if (selectedCardNumbers.includes(cardNumber)) {
      setSelectedCardNumbers(
        selectedCardNumbers.filter((card) => {
          return card !== cardNumber;
        })
      );
    } else if (selectedCardNumbers.length < 2) {
      setSelectedCardNumbers([...selectedCardNumbers, cardNumber]);
    }
  };

  const handleClickSubmitBtn = () => {
    const getOverlapShifts = async () => {
      try {
        const { data } = await axios.get<APIResponse<OverlapShifts>>(
          `http://localhost:3001/shifts/overlap?firstShift=${
            shifts[selectedCardNumbers[0]].shift_id
          }&secondShift=${shifts[selectedCardNumbers[1]].shift_id}`
        );
        setOverlapShifts(data.data);
      } catch {
        setOverlapShifts({} as OverlapShifts);
      }
    };
    if (selectedCardNumbers.length === 2) getOverlapShifts();
  };

  return (
    <div className="app-displayer-external-container">
      <div className="app-displayer-container">
        <OverlapDisplayer
          exceedsOverlapThreshold={
            !overlapShifts.hasOwnProperty("exceedsOverlapThreshold")
              ? "-"
              : overlapShifts.exceedsOverlapThreshold
          }
          maxOverlapthreshold={
            !overlapShifts.hasOwnProperty("maxOverlapthreshold")
              ? "-"
              : overlapShifts.maxOverlapthreshold
          }
          overlapTime={
            !overlapShifts.hasOwnProperty("overlapTime")
              ? "-"
              : overlapShifts.overlapTime
          }
          onClick={handleClickSubmitBtn}
        />
        <div className="app-shiftcards-container">
          {shifts.map((shift, index) => (
            <ShiftCard
              key={index}
              facilityName={shift.facility_name}
              shiftDate={shift.shift_date}
              endTime={shift.end_time}
              startTime={shift.start_time}
              cardNumber={index}
              selectedCardNumbers={selectedCardNumbers}
              onClick={() => handleClickCard(index)}
            />
          ))}
        </div>
      </div>
      <QuestionsContainer />
    </div>
  );
};
