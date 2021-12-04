import './Text.scss';

const Text = ({ text, isHeader = false }) => {
  if (isHeader) {
    return <h1 className='text'>{text}</h1>;
  }
  return <p className='text'>{text}</p>;
};

export default Text;
