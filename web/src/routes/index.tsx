import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';
import PrivateRoute from './PrivateRoute';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <PrivateRoute path="/landing" component={Landing} />
      <PrivateRoute path="/study" component={TeacherList} />
      <PrivateRoute path="/give-classes" component={TeacherForm} />
    </Switch>
  );
}

export default Routes;