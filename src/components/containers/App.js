import React from 'react';
import MyPlayer from './MyPlayer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={MyPlayer} />
        <Route exact path="/:activeVideo" component={MyPlayer} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
);

export default App;
