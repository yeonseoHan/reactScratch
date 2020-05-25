import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Notice from './notice/Notice';
import Page from './notice/Page';
import SetAddress from './setAddress/SetAddress';


const MyRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact path="/notice" render={(props) => <Notice {...props}/>}/>
                    <Route path="/notice/:index" render={(props) => <Page {...props}/>}/>

                    <Route path="/setaddress" render={(props) => <SetAddress {...props}/>}/>
                </Switch>
            </div>
        </ BrowserRouter>
    );
}

const Hot = hot(MyRouter);

ReactDOM.render(<Hot />, document.querySelector('#root'));
