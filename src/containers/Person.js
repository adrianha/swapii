'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchPerson } from '../actions/peopleActions';
import DetailBack from '../components/DetailBack';
import DetailItem from '../components/DetailItem';

export class Person extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      name: 'Name',
      height: 'Height',
      mass: 'Mass',
      hair_color: 'Hair Color',
      skin_color: 'Skin Color',
      eye_color: 'Eye Color',
      birth_year: 'Birth Year',
      gender: 'Gender',
      homeworld: 'Homeworld',
      films: 'Films',
      species: 'Species',
      vehicles: 'Vehicles',
      starships: 'Starships'
    };
  }

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.props.dispatch(fetchPerson(id));
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    if (this.props.people.isFetching) {
      return (
        <div>Loading person data...</div>
      );
    } else {
      return (
        <div className="person">
          <DetailBack onClick={this.goBack} />
          {
            Object.keys(this.fields).map((k, i) => {
              return (
                <DetailItem
                  key={i}
                  data={this.props.people.detail[k]}
                  title={this.fields[k]} />
              );
            })
          }
        </div>
      );
    }
  }
}

Person.propTypes = {
  routeParams: PropTypes.object,
  dispatch: PropTypes.func,
  people: PropTypes.object
};

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

export default connect(mapStateToProps)(Person);
