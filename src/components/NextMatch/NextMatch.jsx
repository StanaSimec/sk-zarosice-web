import { CategoryHeader } from "../CategoryHeader/CategoryHeader";
import { Match } from "../Match/Match";

export const NextMatch = ({ match }) => {
  const isMatchToDisplay = match && match.date >= Date.now();
  if (isMatchToDisplay) {
    return (
      <>
        <CategoryHeader text="Mistrovské utkání:" />
        <Match match={match} />
      </>
    );
  }
  return null;
};
