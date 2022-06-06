import { useState } from "react";
import classNames from "classnames";
import { Match } from "../../components";

import "./MatchPlan.scss";

const DisplayAllMatchButton = ({ onClick, isOpen }) => {
  return (
    <div className="showMatchPlanWrapper">
      <div
        onClick={onClick}
        className={classNames("triangleIcon", isOpen ? "arrowUp" : "arrowDown")}
      ></div>
    </div>
  );
};

export const MatchPlan = ({ matchPlan }) => {
  const [isMatchPlanDisplayed, setIsMatchDisplayed] = useState(false);
  const onButtonClick = () => {
    setIsMatchDisplayed(!isMatchPlanDisplayed);
  };
  const isMatchPlan = matchPlan.length > 1;
  return (
    <div className="matchPlan">
      {isMatchPlan && (
        <DisplayAllMatchButton
          onClick={onButtonClick}
          isOpen={isMatchPlanDisplayed}
        />
      )}
      <div className="matchPlanComplete">
        {isMatchPlanDisplayed &&
          matchPlan.map((match) => <Match match={match} key={match.date} />)}
      </div>
    </div>
  );
};
