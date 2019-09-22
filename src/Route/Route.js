import React, { Component } from 'react';
import { Route,BrowserRouter as Router ,Redirect ,Switch} from 'react-router-dom';
import Container from '../Components/Container';
import Rent from '../Components/Rent';
import Return from '../Components/Return'
class RouteList extends Component {
    render(){
        return(
            <Router>
                <Switch>
                 <Route exact path="/home" render={(props) => <Container {...props}/>} />
                 <Route exact path="/rent" render={(props) => <Rent {...props}/>} />
                 <Route exact path="/return" component={Return} />
                 <Route exact path="/" component={()=><Redirect to='/home' />} />
                 <Route component={()=><Redirect to='/home' />} />
                 </Switch>
           </Router>
        )
    }
}
export default RouteList;