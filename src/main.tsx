"use strict";

import "./styles/main.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {heroState} from "./reducers";
import TourOfHeroes from "./components/TourOfHeroes";
import thunk from "redux-thunk";

let store = createStore(heroState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <TourOfHeroes />
    </Provider>
    , document.getElementById("anchor"));