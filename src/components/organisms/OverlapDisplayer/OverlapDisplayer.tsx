import React from "react";
import { TEXTS } from "../../../utils";
import './OverlapDisplayer.css';

interface IOverlapDisplayerProps {
  maxOverlapthreshold: number | "-";
  overlapTime: number | "-";
  exceedsOverlapThreshold: boolean | "-";
  onClick: () => void;
}

export const OverlapDisplayer = ({
  overlapTime,
  maxOverlapthreshold,
  exceedsOverlapThreshold,
  onClick,
}: IOverlapDisplayerProps): JSX.Element => {
  return (
    <div className="overlapdisplayer-container">
      <div className="overlapdisplayer-information-container">
        <p>{`${TEXTS.OVERLAP_MINUTES}${overlapTime}`}</p>
        <p>{`${TEXTS.MAX_OVERLAP_TRESHOLD}${maxOverlapthreshold}`}</p>
        <p>{`${TEXTS.EXCEEDS_OVERLAP_THRESHOLD}${exceedsOverlapThreshold}`}</p>
      </div>
      <div className="overlapdisplayer-button-container">
        <button onClick={onClick}>{TEXTS.SUBMIT}</button>
      </div>
    </div>
  );
};
