import Text, { TEXT_COLOR } from '../Text/Text';

import './Results.scss';

const BannerDate = ({ date }) => {
  return (
    <Text
      text={new Intl.DateTimeFormat('cs-CZ', {
        dateStyle: 'long',
      }).format(date)}
      color='yellow'
    />
  );
};

const Teams = ({ result }) => {
  return (
    <div className='team-header'>
      <Text
        text={result.homeTeam}
        classname='teams'
        color={
          result.homeScore > result.awayScore
            ? TEXT_COLOR.GREEN
            : TEXT_COLOR.WHITE
        }
      />
      <Text text=':' classname='teams' color={TEXT_COLOR.WHITE} />
      <Text
        text={result.awayTeam}
        classname='teams'
        color={
          result.awayScore > result.homeScore
            ? TEXT_COLOR.GREEN
            : TEXT_COLOR.WHITE
        }
      />
    </div>
  );
};

const Banner = ({ result }) => {
  return (
    <div className='banner'>
      <div className='info'>
        <Text text={`${result.round}. kolo`} color={TEXT_COLOR.YELLOW} />
        <BannerDate date={result.date} />
      </div>
      <Teams result={result} />
      <Text
        text={`${result.homeScore} : ${result.awayScore}`}
        isHeader={true}
        classname='score'
        color={TEXT_COLOR.WHITE}
      />
    </div>
  );
};

const Results = ({ results }) => {
  return (
    <div className='results'>
      {results.map((result) => (
        <Banner result={result} />
      ))}
    </div>
  );
};

export default Results;
