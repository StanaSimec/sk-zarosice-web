import classNames from 'classnames';

import './Text.scss';

export const TEXT_COLOR = {
  WHITE: "white",
  YELLOW: "yellow",
  GREEN: "green"
};

const Text = ({ text, isHeader = false, classname = '', color = '' }) => {
  const Tag = isHeader ? 'h1' : 'p';
  return (
    <Tag
      className={classNames({
        text: true,
        header: isHeader,
        paragraph: !isHeader,
        [classname]: !!classname,
        [color]: !!color,
      })}
    >
      {text}
    </Tag>
  );
};

export default Text;
