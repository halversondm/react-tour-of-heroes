"use strict";

import "./styles/main.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {heroState} from "./reducers";
import TourOfHeroes from "./components/TourOfHeroes";
import thunk from "redux-thunk";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import HeroDashboard from "./components/HeroDashboard";
import HeroDetail from "./components/HeroDetail";
import {App} from "./components/App";
import {getHeroes} from "./actions/index";

let store = createStore(heroState, applyMiddleware(thunk));
store.dispatch(getHeroes());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/dashboard"/>
                <Route path="/dashboard" component={HeroDashboard}/>
                <Route path="/heroes" component={TourOfHeroes}/>
                <Route path="/detail" component={HeroDetail}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("anchor"));