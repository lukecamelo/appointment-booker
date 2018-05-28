import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import AppointmentForm from './components/AppointmentForm';
import UpdateForm from './components/UpdateForm';
import Login from './components/Login'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/form' component={AppointmentForm} />
      <Route path='/appointments/:id' component={UpdateForm} />
      <Route path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));


registerServiceWorker();
