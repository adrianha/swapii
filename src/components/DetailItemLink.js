import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DetailItemLink = (props) => {
  return (
    <div>
      <Link to={props.to}>
        {props.text}
      </Link>
    </div>
  );
};

DetailItemLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
};

export default DetailItemLink;
