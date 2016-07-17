'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchFilm } from '../actions/filmsActions';
import DetailBack from '../components/DetailBack';
import DetailItem from '../components/DetailItem';

export class Film extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      title: 'Title',
      episode_id: 'Episode',
      opening_crawl: 'Description',
      director: 'Director',
      producer: 'Producer',
      release_date: 'Release Date',
      characters: 'Characters',
      planets: 'Planets',
      starships: 'Starships',
      vehicles: 'Vehicles',
      species: 'Species'
    };
  }

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.props.dispatch(fetchFilm(id));
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    if (this.props.films.isFetching) {
      return (
        <div>Loading film data...</div>
      );
    } else {
      return (
        <div className="film">
          <DetailBack onClick={this.goBack} />
          {
            Object.keys(this.fields).map((k, i) => {
              return (
                <DetailItem
                  key={i}
                  data={this.props.films.detail[k]}
                  title={this.fields[k]} />
              );
            })
          }
        </div>
      );
    }
  }
}

Film.propTypes = {
  routeParams: PropTypes.object,
  dispatch: PropTypes.func,
  films: PropTypes.object
};

function mapStateToProps(state) {
  return {
    films: state.films
  };
}

export default connect(mapStateToProps)(Film);
