import React, { PropTypes } from 'react';

const ListItem = (props) => {
  return (
    <div className="columns" style={{cursor: 'pointer', backgroundColor: '#474747', color: '#fff', borderBottom: 'solid 1px #fff'}} onClick={props.onClick.bind(this, props.id)}>
      <div className="column">{props.name}</div>
    </div>
  );
};

ListItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string
};

export default ListItem;
