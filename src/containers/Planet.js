'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchPlanet } from '../actions/planetsActions';
import DetailBack from '../components/DetailBack';
import DetailItem from '../components/DetailItem';

export class Planet extends Component {
  constructor(props) {
    super(props);

    this.fields = {
    name: 'Name',
    rotation_period: 'Rotation Period',
    orbital_period: 'Orbital Period',
    diameter: 'Diameter',
    climate: 'Climate',
    gravity: 'Gravity',
    terrain: 'Terrain',
    surface_water: 'Surface Water',
    population: 'Population',
    residents: 'Residents',
    films: 'Films'
    };
  }

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.props.dispatch(fetchPlanet(id));
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    if (this.props.planets.isFetching) {
      return (
        <div>Loading planet data...</div>
      );
    } else {
      return (
        <div className="planet">
          <DetailBack onClick={this.goBack} />
          {
            Object.keys(this.fields).map((k, i) => {
              return (
                <DetailItem
                  key={i}
                  data={this.props.planets.detail[k]}
                  title={this.fields[k]} />
              );
            })
          }
        </div>
      );
    }
  }
}

Planet.propTypes = {
  routeParams: PropTypes.object,
  dispatch: PropTypes.func,
  planets: PropTypes.object
};

function mapStateToProps(state) {
  return {
    planets: state.planets
  };
}

export default connect(mapStateToProps)(Planet);
