import { Link as RouterLink } from 'react-router-dom';
import Text, { TEXT_COLOR, TEXT_SIZE } from '../Text/Text';

import './Link.scss';

const Link = ({ text, href, size = TEXT_SIZE.SMALL, isMainHeader = false}) => {
  return (
    <RouterLink to={href} className='link'>
      <Text
        text={text}
        size={size}
        color={TEXT_COLOR.RED}
        isMainHeader={isMainHeader}
      />
    </RouterLink>
  );
};

export default Link;
