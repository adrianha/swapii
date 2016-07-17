'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchStarship } from '../actions/starshipsActions';
import DetailBack from '../components/DetailBack';
import DetailItem from '../components/DetailItem';

export class Starship extends Component {
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
      hyperdrive_rating: 'Hyperdrive Rating',
      MGLT: 'MGLT',
      starship_class: 'Starship Class',
      pilots: 'Pilots',
      films: 'Films'
    };
  }

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.props.dispatch(fetchStarship(id));
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    if (this.props.starships.isFetching) {
      return (
        <div>Loading starship data...</div>
      );
    } else {
      return (
        <div className="starship">
          <DetailBack onClick={this.goBack} />
          {
            Object.keys(this.fields).map((k, i) => {
              return (
                <DetailItem
                  key={i}
                  data={this.props.starships.detail[k]}
                  title={this.fields[k]} />
              );
            })
          }
        </div>
      );
    }
  }
}

Starship.propTypes = {
  routeParams: PropTypes.object,
  dispatch: PropTypes.func,
  starships: PropTypes.object
};

function mapStateToProps(state) {
  return {
    starships: state.starships
  };
}

export default connect(mapStateToProps)(Starship);
