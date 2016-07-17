import React, { PropTypes } from 'react';

const Loader = (props) => {
  return (
    <div className="columns">
      <div className="column">
        <p className={`notification is-${props.primary ? 'primary':'success'} has-text-centered`}>
          {props.primary ? 'Initializing data...':'Please wait...'}
        </p>
      </div>
    </div>
  );
};

Loader.propTypes = {
  primary: PropTypes.bool
};

export default Loader;
