import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducer from './reducers'
import EventIndex from './components/event_index';
import EventsNew from './components/event_new';
import EventsShow from './components/event_show';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route path="/" component={EventIndex} />
        <Route path="/events" component={EventIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
