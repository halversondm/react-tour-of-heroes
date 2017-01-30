"use strict";

import "./styles/main.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {heroState} from "./reducers";
import TourOfHeroes from "./components/TourOfHeroes";

let store = createStore(heroState);

ReactDOM.render(
    <Provider store={store}>
        <TourOfHeroes />
    </Provider>
    , document.getElementById("anchor"));