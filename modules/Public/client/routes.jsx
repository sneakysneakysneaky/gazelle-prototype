import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'

const {Route, IndexRoute} = ReactRouter;

//TODO Clean up route

export default (
    <Route>
        <IndexRoute component={Landing}/>
        <Route path="login" component={Login}/>
        <Route path="sign-up" component={SignUp}/>
    </Route>

);