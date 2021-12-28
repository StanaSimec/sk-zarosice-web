import Text, { TEXT_COLOR } from '../Text/Text';

import './NextMatch.scss';

export const NextMatch = ({ match }) => {
  const { homeTeam, awayTeam, date } = match;
  return (
    <div className='nextMatch'>
      <div className='match'>
        <Text text={`${homeTeam} : ${awayTeam}`} color={TEXT_COLOR.WHITE} />
        <Text
          color={TEXT_COLOR.YELLOW}
          text={new Intl.DateTimeFormat('cs-CZ', {
            dateStyle: 'long',
            timeStyle: 'short',
          }).format(date)}
        />
      </div>
    </div>
  );
};
