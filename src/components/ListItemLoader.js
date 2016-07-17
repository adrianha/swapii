import React, { PropTypes } from 'react';

const ListItemLoader = (props) => {
  return (
    <div className="columns" style={{backgroundColor: 'tomato', color: '#fff'}}>
      <div className="column">{props.text}</div>
    </div>
  );
};

ListItemLoader.propTypes = {
  text: PropTypes.string
};

export default ListItemLoader;
