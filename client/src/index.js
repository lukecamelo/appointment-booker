import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import AppointmentForm from './components/AppointmentForm';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/form' component={AppointmentForm} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));


registerServiceWorker();
