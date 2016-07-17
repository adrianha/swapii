import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Films from './containers/Films';
import Film from './containers/Film';
import People from './containers/People';
import Person from './containers/Person';
import Planets from './containers/Planets';
import Planet from './containers/Planet';
import Specieses from './containers/Specieses';
import Species from './containers/Species';
import Starships from './containers/Starships';
import Starship from './containers/Starship';
import Vehicles from './containers/Vehicles';
import Vehicle from './containers/Vehicle';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/films" />
    <Route path="films" component={Films} />
    <Route path="films/:id" component={Film} />
    <Route path="people" component={People} />
    <Route path="people/:id" component={Person} />
    <Route path="planets" component={Planets} />
    <Route path="planets/:id" component={Planet} />
    <Route path="species" component={Specieses} />
    <Route path="species/:id" component={Species} />
    <Route path="starships" component={Starships} />
    <Route path="starships/:id" component={Starship} />
    <Route path="vehicles" component={Vehicles} />
    <Route path="vehicles/:id" component={Vehicle} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
