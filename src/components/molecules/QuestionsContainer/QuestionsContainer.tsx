import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIResponse, Button, CoWorkers, RemainingSpots, TEXTS } from "../../../utils";
import QuestionButton from "../../atoms/QuestionButton";
import './QuestionsContainer.css';

export const QuestionsContainer = (): JSX.Element => {
  const [remainingSpots, setRemainingSpots] = useState<RemainingSpots[]>([]);
  const [coWorkers, setCoWorkers] = useState<CoWorkers[]>([]);
  const btns: Button[] = [
    {
      text: TEXTS.QUESTION_FOUR,
      action: () => {
        handleClick(remainingSpots);
      },
    },
    {
      text: TEXTS.QUESTION_FIVE,
      action: () => {},
    },
    {
      text: TEXTS.QUESTION_SIX,
      action: () => {
        handleClick(coWorkers);
      },
    },
  ];
  useEffect(() => {
    const getRemainingSpots = async () => {
      try {
        const { data } = await axios.get<APIResponse<RemainingSpots[]>>(
          "http://localhost:3001/remaining-spots"
        );
        setRemainingSpots(data.data);
      } catch {
        setRemainingSpots([]);
      }
    };
    const getCoWorkers = async () => {
      try {
        const { data } = await axios.get<APIResponse<CoWorkers[]>>(
          "http://localhost:3001/co-workers"
        );
        setCoWorkers(data.data);
      } catch {
        setRemainingSpots([]);
      }
    };
    getRemainingSpots();
    getCoWorkers();
  }, []);

  const handleClick = (data: RemainingSpots[] | CoWorkers[]) => {
    console.log(data);
  };
  return (
    <div className="question-container">
      {btns.map((btn, index) => (
        <QuestionButton
          key={index}
          buttonText={btn.text}
          onClick={() => {
            btn.action();
          }}
        />
      ))}
    </div>
  );
};
