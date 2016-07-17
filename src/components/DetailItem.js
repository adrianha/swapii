import React, { PropTypes } from 'react';
import StringHelper from '../utils/stringHelper';
import { connect } from 'react-redux';
import DetailItemLink from './DetailItemLink';

const DetailItem = (props) => {
  return (
    <div className="columns" style={{backgroundColor: '#474747', color: '#fff'}}>
      <div className="column is-3">
        <h5 className="title is-5" style={{color: '#fff'}}>{props.title}</h5>
      </div>
      <div className="column is-9">
        {
          typeof(props.data) === 'object' ?
          Object.keys(props.data).map((kk, i) => {
            return (
              <DetailItemLink
                key={i}
                to={`/${StringHelper.getFullRoutes(props.data[kk])}`}
                text={props.base[StringHelper.getRoutes(props.data[kk])][StringHelper.getRoutesId(props.data[kk])]} />
            );
          }) :
          props.title === 'Homeworld' && typeof(props.data) !== 'undefined' ?
            <DetailItemLink
              to={`/${StringHelper.getFullRoutes(props.data)}`}
              text={props.base[StringHelper.getRoutes(props.data)][StringHelper.getRoutesId(props.data)]} /> :
            props.data
        }
      </div>
    </div>
  );
};

DetailItem.propTypes = {
  base: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ])
};

function mapStateToProps(state) {
  return {
    base: state.base
  };
}

export default connect(mapStateToProps)(DetailItem);
