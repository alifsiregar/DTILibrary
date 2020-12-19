import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HeaderPage } from './components';
import routes from './config/routes';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Switch>
        {routes.map((route) => {
          // if (route.isPublic) {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
          // }
          // return (
          //   <PrivateRoute
          //     path={route.path}
          //     component={route.component}
          //     key={route.path}
          //   />
          // );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
