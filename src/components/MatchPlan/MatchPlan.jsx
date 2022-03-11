import { useState, Fragment } from "react";
import { CategoryHeader } from "../CategoryHeader/CategoryHeader";
import { Match } from "../Match/Match";
import Text from "../Text/Text";

import "./MatchPlan.scss";

const DisplayAllMatchButton = ({ onClick, isOpen }) => {
  const buttonText = isOpen ? "Skrýt" : "Zobrazit";
  return (
    <div className="showMatchPlanButtonWrapper">
      <button onClick={onClick} className="showMatchPlanButton">
        <Text text={`${buttonText} celý rozpis`}></Text>
      </button>
    </div>
  );
};

export const MatchPlan = ({ matchPlan }) => {
  const [isMatchPlanDisplayed, setIsMatchDisplayed] = useState(false);
  const onButtonClick = () => {
    setIsMatchDisplayed(!isMatchPlanDisplayed);
  };
  return (
    <Fragment>
      <DisplayAllMatchButton
        onClick={onButtonClick}
        isOpen={isMatchPlanDisplayed}
      />
      {isMatchPlanDisplayed &&
        matchPlan.map((match) => <Match match={match} key={match.date} />)}
    </Fragment>
  );
};
