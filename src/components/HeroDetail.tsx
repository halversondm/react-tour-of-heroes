"use strict";

import * as React from "react";
import Hero from "./Hero";

export interface HeroDetailProps {
    selectedHero: Hero;
    updateName: (hero: Hero) => void;
}

export class HeroDetail extends React.Component<HeroDetailProps, Hero> {

    state: Hero;

    constructor(props: HeroDetailProps) {
        super(props);
        this.state = this.props.selectedHero;
        this.nameChange = this.nameChange.bind(this);
    }

    componentWillReceiveProps(nextProps: HeroDetailProps) {
        this.setState(nextProps.selectedHero);
    }

    nameChange(event: any) {
        const name: string = event.target.value;
        let state = this.state;
        state.name = name;
        this.props.updateName(state);
    }

    render() {
        return (
            <div>
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
