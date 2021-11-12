import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Menu />
      </Route>
    </Switch>
  )
}

export default Routes;