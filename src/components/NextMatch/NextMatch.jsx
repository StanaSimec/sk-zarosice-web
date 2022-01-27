import Text, { TEXT_COLOR } from '../Text/Text';

import './NextMatch.scss';

export const NextMatch = ({ match }) => {
  const { homeTeam, awayTeam, date, place } = match;
  var intlOptions = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
  return (
    <div className='nextMatch'>
      <div className='match'>
        <Text text={`${homeTeam} : ${awayTeam}`} color={TEXT_COLOR.WHITE} classname='nextTeams'/>
        <Text
          color={TEXT_COLOR.YELLOW}
          text={new Intl.DateTimeFormat('cs-CZ', intlOptions).format(date)}
        />
        {place && <Text text={place} color={TEXT_COLOR.YELLOW} classname='friendlyMatch'/>}
      </div>
    </div>
  );
};
