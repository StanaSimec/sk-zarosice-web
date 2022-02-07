import classNames from 'classnames';

import './Text.scss';

export const TEXT_COLOR = {
  WHITE: 'white',
  YELLOW: 'yellow',
  GREEN: 'green',
  RED: 'red',
};

export const TEXT_SIZE = {
  SMALL: 'small',
  MIDDLE: 'middle',
  BIG: 'big',
};

const TEXT_SIZE_ELEMENTS = {
  [TEXT_SIZE.SMALL]: 'p',
  [TEXT_SIZE.MIDDLE]: 'h3',
  [TEXT_SIZE.BIG]: 'h1',
};

const Text = ({
  text,
  size = TEXT_SIZE.SMALL,
  classname = '',
  color = '',
  isMainHeader = false,
}) => {
  const Tag = TEXT_SIZE_ELEMENTS[size];
  return (
    <Tag
      className={classNames({
        text,
        [size]: true,
        [classname]: !!classname,
        [color]: !!color,
        mainHeader: isMainHeader,
      })}
    >
      {text}
    </Tag>
  );
};

export default Text;
