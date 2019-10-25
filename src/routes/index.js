import { createStackNavigator } from 'react-navigation';
import Home from '../pages/home'
import Login from '../pages/login'

const Routes = createStackNavigator({
      Home,
      Login,
    })

  export default Routes;