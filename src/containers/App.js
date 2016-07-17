import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchBase } from '../actions/baseActions';
import Loader from '../components/Loader';
const logo = require('../images/logo.png');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchBase());
  }

  onToggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  onMenuClick(e) {
    const pathname = e.target.getAttribute('to');
    this.setState({
      isMenuOpen: false
    }, () => {
      browserHistory.replace({
        pathname: pathname
      });
    });
  }

  render() {
    if (this.props.base.isFetching) {
      return <Loader primary />;
    } else {
      return (
        <div>
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item" href="#">
                <img src={logo} alt="Bulma logo" />
              </a>
            </div>

            <span className="nav-toggle" onClick={this.onToggleMenu.bind(this)}>
              <span></span>
              <span></span>
              <span></span>
            </span>

            <div className={`nav-right nav-menu ${this.state.isMenuOpen ? 'is-active':''}`}>
              <a className="nav-item" to="/films" onClick={this.onMenuClick.bind(this)}>
                Films
              </a>
              <a className="nav-item" to="/people" onClick={this.onMenuClick.bind(this)}>
                People
              </a>
              <a className="nav-item" to="/planets" onClick={this.onMenuClick.bind(this)}>
                Planets
              </a>
              <a className="nav-item" to="/species" onClick={this.onMenuClick.bind(this)}>
                Species
              </a>
              <a className="nav-item" to="/starships" onClick={this.onMenuClick.bind(this)}>
                Starships
              </a>
              <a className="nav-item" to="/vehicles" onClick={this.onMenuClick.bind(this)}>
                Vehicles
              </a>
            </div>
          </nav>
          <div className="wrapper">
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}

App.propTypes = {
  base: PropTypes.object,
  children: PropTypes.element,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    base: state.base
  };
}

export default connect(mapStateToProps)(App);
