import "./Tag.css";

const Tag = (props) => {
  return <button className="tag">{props.tagName}</button>;
};

export default Tag;
