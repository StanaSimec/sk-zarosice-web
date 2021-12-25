import { Link as RouterLink } from 'react-router-dom';
import Text, { TEXT_COLOR } from '../Text/Text';

import './Link.scss';

const Link = ({ text, href, textIsHeader = false }) => {
  return (
    <RouterLink to={href} className='link'>
      <Text
        text={text}
        isHeader={textIsHeader}
        color={TEXT_COLOR.RED}
      />
    </RouterLink>
  );
};

export default Link;
