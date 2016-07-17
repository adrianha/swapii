'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchSpecies } from '../actions/speciesesActions';
import DetailBack from '../components/DetailBack';
import DetailItem from '../components/DetailItem';

export class Species extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      name: 'Name',
      classification: 'Classification',
      designation: 'Designation',
      average_height: 'Average Height',
      skin_colors: 'Skin Colors',
      hair_colors: 'Hair Colors',
      eye_colors: 'Eye Colors',
      average_lifespan: 'Average Lifespan',
      homeworld: 'Homeworld',
      language: 'Language',
      people: 'People',
      films: 'Films'
    };
  }

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.props.dispatch(fetchSpecies(id));
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    if (this.props.specieses.isFetching) {
      return (
        <div>Loading species data...</div>
      );
    } else {
      return (
        <div className="species">
          <DetailBack onClick={this.goBack} />
          {
            Object.keys(this.fields).map((k, i) => {
              return (
                <DetailItem
                  key={i}
                  data={this.props.specieses.detail[k]}
                  title={this.fields[k]} />
              );
            })
          }
        </div>
      );
    }
  }
}

Species.propTypes = {
  routeParams: PropTypes.object,
  dispatch: PropTypes.func,
  specieses: PropTypes.object
};

function mapStateToProps(state) {
  return {
    specieses: state.specieses
  };
}

export default connect(mapStateToProps)(Species);
