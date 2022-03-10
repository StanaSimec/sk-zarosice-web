import Text, { TEXT_COLOR, TEXT_SIZE } from "../Text/Text";

import "./Match.scss";

export const Match = ({ match }) => {
  const { homeTeam, awayTeam, date, place } = match;
  const intlOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return (
    <div className="nextMatch">
      <div className="match">
        <Text
          text={`${homeTeam} : ${awayTeam}`}
          color={TEXT_COLOR.WHITE}
          size={TEXT_SIZE.MIDDLE}
          classname="nextTeams"
        />
        <Text
          color={TEXT_COLOR.YELLOW}
          text={new Intl.DateTimeFormat("cs-CZ", intlOptions).format(date)}
        />
        {place && (
          <Text
            text={place}
            color={TEXT_COLOR.YELLOW}
            classname="friendlyMatch"
          />
        )}
      </div>
    </div>
  );
};