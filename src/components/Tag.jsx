/* eslint-disable react/prop-types */
import '../styles/Tag.css';

const Tag = (props) => {
  return (
    <div className="tag">
      <p className="tag_name">{props.tag}</p>
    </div>
  );
};

export default Tag;
