import React from "react";
import "./QuestionButton.css";

interface IQuestionButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const QuestionButton = ({
  onClick,
  buttonText,
}: IQuestionButtonProps): JSX.Element => {
  return <button className="question-button" onClick={onClick}>{buttonText}</button>;
};
