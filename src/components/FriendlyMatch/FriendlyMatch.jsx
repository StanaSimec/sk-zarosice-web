import { CategoryHeader } from "../CategoryHeader/CategoryHeader";
import { Match } from "../Match/Match";

export const FriendlyMatch = ({ matches = [] }) => {
  const now = Date.now();
  const matchesToDisplay =
    matches.length && matches.filter((match) => match.date >= now);
  if (matchesToDisplay.length) {
    return (
      <>
        <CategoryHeader text="Přátelská utkání:" />
        {matchesToDisplay.map((match) => (
          <Match match={match} key={match.date} />
        ))}
      </>
    );
  }
  return null;
};
