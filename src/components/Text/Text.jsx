import classNames from 'classnames';

import './Text.scss';

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
