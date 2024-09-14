import {
  containerStyle,
  contentParagraphStyle,
  headingStyle,
  subContentParagraphStyle,
} from './box.css';

interface BoxProps {
  title: string;
  content: string;
  subContent?: string;
}

const Box = ({ title, content, subContent }: BoxProps) => {
  return (
    <div className={containerStyle}>
      <h3 className={headingStyle}>{title}</h3>
      <p className={contentParagraphStyle}>{content}</p>
      {subContent && <p className={subContentParagraphStyle}>{subContent}</p>}
    </div>
  );
};

export default Box;
