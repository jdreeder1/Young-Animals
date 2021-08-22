import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import SlideShow from './SlideShow';
import App from './App';
import Blog from './Blog';
import Bio from './Bio';
import Tour from './Tour';
//import Merch from './Merch';
import Inventory from './Inventory';
import Payment from './Payment';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/blog" component={Blog} />
                <Route path="/bio" component={Bio} />
                <Route path="/tour" component={Tour} />
                <Route path="/merch" component={Inventory} />
                <Route path="/success" component={Payment} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;