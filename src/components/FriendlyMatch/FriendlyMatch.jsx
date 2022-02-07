import { CategoryHeader } from '../CategoryHeader/CategoryHeader';
import { NextMatch } from '../NextMatch/NextMatch';

export const FriendlyMatch = ({ matches }) => {
  return (
    <>
      <CategoryHeader text='Přátelská utkání:' />
      {matches.map((match) => (
        <NextMatch match={match} />
      ))}
    </>
  );
};
