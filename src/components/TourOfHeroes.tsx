"use strict";

import * as React from "react";

class Hero {
    id: number;
    name: string;
}

export default class TourOfHeroes extends React.Component<{}, Hero> {

    state: Hero;

    constructor() {
        super();
        this.state = {id: 1, name: "Windstorm"};
        this.nameChange = this.nameChange.bind(this);
    }

    nameChange(event: any) {
        const name: string = event.target.value;
        let state = this.state;
        state.name = name;
        this.setState(state);
    }

    render() {
        const title = "Tour of Heroes";

        return (
            <div>
                <h1>{title}</h1>
                <h2>{this.state.name} details!</h2>
                <div>
                    <label>id: </label>{this.state.id}
                </div>
                <div>
                    <label>name: </label>
                    <input value={this.state.name} onChange={this.nameChange}/>
                </div>
            </div>
        );
    }
}