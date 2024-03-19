/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Dropdown.css';

const Dropdown = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const handleClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="dropdown">
      <Link to="#" className="dropdown_header" onClick={handleClick}>
        <span className="dropdown_title">{props.title}</span>
        <FontAwesomeIcon
          {...(isContentVisible ? { icon: faAngleUp } : { icon: faAngleDown })}
        />
      </Link>
      <div
        className="dropdown_content"
        style={{ display: isContentVisible ? 'none' : 'flex' }}
      >
        {Array.isArray(props.item) ? (
          <ul>
            {props.item.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>{props.item}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
