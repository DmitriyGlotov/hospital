import './App.scss';
import Registration from './User-Authentication/Registration';
import Authorization from './User-Authentication/Authorization';
import Shedule from './Shedule/index';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/authorization">
        <Authorization />
      </Route>
      <Route path="/main">
        <Shedule />
      </Route>
      <Redirect from="/" to="/authorization" />
    </Switch>
  )
}

export default App;