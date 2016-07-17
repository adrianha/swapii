import React, { PropTypes } from 'react';

const DetailBack = (props) => {
  return (
    <div className="columns" style={{cursor: 'pointer', backgroundColor: '#df4747', color: '#fff'}} onClick={props.onClick}>
      <div className="column is-12">
        <span className="icon">
          <i className="fa fa-angle-left"></i>
        </span>
        <span className="icon-caption">
          Back
        </span>
      </div>
    </div>
  );
};

DetailBack.propTypes = {
  onClick: PropTypes.func
};

export default DetailBack;
