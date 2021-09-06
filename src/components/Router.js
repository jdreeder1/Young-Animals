import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../css/styles.css';
//import SlideShow from './SlideShow';
import App from './App';
import Blog from './Blog';
import Bio from './Bio';
import Tour from './Tour';
import Payment from './Payment';
import Shopping from './Shopping';
import AdminBlog from './AdminBlog';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/bio" component={Bio}/>
                <Route path="/tour" component={Tour}/>
                <Route path="/merch" component={App}/>
                <Route path="/cart" component={Shopping}/>
                <Route path="/success" component={Payment}/>
                <Route path="/cancel" component={Payment}/>
                <Route path="/admin_blog" component={AdminBlog}/>
                {/*<Redirect to="/"/>*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;