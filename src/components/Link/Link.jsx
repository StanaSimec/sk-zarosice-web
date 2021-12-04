import Text from "../Text/Text";
import "./Link.scss";

const Link = ({ text, href, textIsHeader = false }) => {
  return (
    <a href={href} className="link">
      <Text text={text} isHeader={textIsHeader} />
    </a>
  );
};

export default Link;
