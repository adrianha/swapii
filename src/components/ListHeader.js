import React, { PropTypes } from 'react';

const ListHeader = (props) => {
  return (
    <div className="columns" style={{backgroundColor: '#df4747', color: '#fff', paddingLeft: 5, paddingRight: 5}}>
      {
        Object.keys(props.fields).map((field, i) => {
          return (
            <div key={i} className="column">{props.fields[field]}</div>
          );
        })
      }
    </div>
  );
};

ListHeader.propTypes = {
  fields: PropTypes.object
};

export default ListHeader;
