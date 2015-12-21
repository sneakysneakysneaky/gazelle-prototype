const {Router, Route} = ReactRouter;
import { createHistory } from 'history';
import MainApp from './MainApp';
import Private from './components/Private';
import Public from './components/Public';
import PublicRoutes from 'Public/client/routes';

const history = createHistory();

//function requireAuth(nextState, replaceState) {
//    if (!Meteor.userId()) {
//        replaceState({nextPathname: nextState.location.pathname}, '/login')
//    }
//}

var routes = (
    <Router history={history}>
        <Route path="/" component={MainApp}>
            <Route component={Public}>
                {PublicRoutes}
            </Route>
            <Route component={Private}>
            </Route>
        </Route>
    </Router>
);

ReactRouterSSR.Run(routes);
