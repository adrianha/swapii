'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchVehicle } from '../actions/vehiclesActions';
import DetailBack from '../components/DetailBack';
import DetailItem from '../components/DetailItem';

export class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      name: 'Name',
      model: 'Model',
      manufacturer: 'Manufacturer',
      cost_in_credits: 'Cost in Credits',
      length: 'Length',
      max_atmosphering_speed: 'Max Atmosphering Speed',
      crew: 'Crew',
      passengers: 'Passengers',
      cargo_capacity: 'Cargo Capacity',
      consumables: 'Consumables',
      vehicle_class: 'Vehicle Class',
      pilots: 'Pilots',
      films: 'Films'
    };
  }

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.props.dispatch(fetchVehicle(id));
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    if (this.props.vehicles.isFetching) {
      return (
        <div>Loading vehicle data...</div>
      );
    } else {
      return (
        <div className="vehicle">
          <DetailBack onClick={this.goBack} />
          {
            Object.keys(this.fields).map((k, i) => {
              return (
                <DetailItem
                  key={i}
                  data={this.props.vehicles.detail[k]}
                  title={this.fields[k]} />
              );
            })
          }
        </div>
      );
    }
  }
}

Vehicle.propTypes = {
  routeParams: PropTypes.object,
  dispatch: PropTypes.func,
  vehicles: PropTypes.object
};

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

export default connect(mapStateToProps)(Vehicle);
