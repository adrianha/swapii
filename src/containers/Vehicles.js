'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Infinite from 'react-infinite';
import ListHeader from '../components/ListHeader';
import ListItem from '../components/ListItem';
import ListItemLoader from '../components/ListItemLoader';
import Loader from '../components/Loader';

export class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      name: 'Name'
    };

    this.state = {
      isFetchingMore: false,
      current: 1,
      maxItem: 20
    };
  }

  onRowClick(id) {
    browserHistory.push({
      pathname: `vehicles/${id}`
    });
  }

  onInfiniteLoad() {
    if (this.props.base.vehicles.length > (this.state.maxItem * this.state.current)) {
      this.setState({
        isFetchingMore: true
      }, () => {
        setTimeout(() => {
          this.setState({
            current: this.state.current + 1,
            isFetchingMore: false
          });
        }, 1000);
      });
    } else {
      this.setState({
        isFetchingMore: false
      });
    }
  }

  getLoader() {
    return <ListItemLoader text="Loading more vehicles..." />;
  }

  render() {
    if (this.props.base.isFetching) {
      return <Loader />;
    } else {
      return (
        <div className="vehicles">
          <ListHeader fields={this.fields} />
          <Infinite
            containerHeight={500}
            infiniteLoadBeginEdgeOffset={200}
            elementHeight={40}
            className="infiniteScrollContainer"
            useWindowAsScrollContainer
            onInfiniteLoad={this.onInfiniteLoad.bind(this)}
            loadingSpinnerDelegate={this.getLoader()}
            isInfiniteLoading={this.state.isFetchingMore}
          >
          {
            Object.keys(this.props.base.vehicles)
              .filter((vehicle, i) => i < (this.state.maxItem * this.state.current))
              .map((vehicle, i) => {
                return (
                  <ListItem key={i} fields={this.fields} id={vehicle} name={this.props.base.vehicles[vehicle]} onClick={this.onRowClick.bind(this)} />
                );
              })
          }
          </Infinite>
        </div>
      );
    }
  }
}

Vehicles.propTypes = {
  base: PropTypes.object
};

function mapStateToProps(state) {
  return {
    base: state.base
  };
}

export default connect(mapStateToProps)(Vehicles);
