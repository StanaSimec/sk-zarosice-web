import Text from '../Text/Text';

import './Results.scss';

const Banner = ({ result }) => {
  return (
    <div className='banner'>
      <div className='info'>
        <Text text={`${result.round}. kolo`} color='yellow' />
        <Text text={`${result.weekDay} ${result.date}`} color='yellow' />
      </div>
      <div className='team-header'>
        <Text
          text={result.homeTeam}
          classname='teams'
          color={result.homeScore > result.awayScore ? 'green' : 'white'}
        />
        <Text text=':' classname='teams' color='white' />
        <Text
          text={result.awayTeam}
          classname='teams'
          color={result.awayScore > result.homeScore ? 'green' : 'white'}
        />
      </div>
      <Text
        text={`${result.homeScore} : ${result.awayScore}`}
        isHeader={true}
        classname='score'
        color='white'
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
