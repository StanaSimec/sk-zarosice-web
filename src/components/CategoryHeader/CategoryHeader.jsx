import Text, { TEXT_SIZE } from '../Text/Text';
import './CategoryHeader.scss';

export const CategoryHeader = ({ text = '' }) => {
  return (
    <div className='categoryHeaderWrapper'>
      <Text text={text} classname='categoryHeader' isMainHeader={true} size={TEXT_SIZE.MIDDLE}/>
    </div>
  );
};
