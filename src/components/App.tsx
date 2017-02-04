"use strict";

import * as React from "react";
import {Link} from "react-router";
import "../styles/App.css";

interface AppProps {
    children: any;
}

export class App extends React.Component<AppProps, any> {
    render() {
        return (
            <div data-main>
                <div data-app>
                    <h1 data-app>Tour of Heroes</h1>
                    <nav data-app>
                        <Link data-app to="/dashboard" activeClassName="active">Dashboard</Link>
                        <Link data-app to="/heroes" activeClassName="active">Heroes</Link>
                    </nav>
                </div>
                {this.props.children}
            </div>
        );
    }
}