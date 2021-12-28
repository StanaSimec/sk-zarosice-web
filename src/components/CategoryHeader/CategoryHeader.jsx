import Text from '../Text/Text';
import './CategoryHeader.scss';

export const CategoryHeader = ({ text = '' }) => {
  return (
    <div className='categoryHeaderWrapper'>
      <Text text={text} classname='categoryHeader' />
    </div>
  );
};
