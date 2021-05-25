import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../routes/Home';

function Main() {
    return (
        <div>
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default Main;
