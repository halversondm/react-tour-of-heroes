"use strict";

import * as React from "react";
import Hero from "./Hero";
import "../styles/HeroList.css";

export interface HeroListProps {
    heroes: Array<Hero>;
    setSelected: (hero: Hero) => void;
}

interface HeroListState {
    hero: Hero
}

export class HeroList extends React.Component<HeroListProps, HeroListState> {

    state: HeroListState;

    constructor(props: HeroListProps) {
        super(props);
        this.setSelected = this.setSelected.bind(this);
        this.state = {hero: {id: 0, name: ""}};
    }

    setSelected(hero: Hero) {
        this.setState({hero: hero});
        this.props.setSelected(hero);
    }

    render() {
        return (
            <div data-heroes>
                <h2 data-heroes>My Heroes</h2>
                <ul data-heroes className="heroes">
                    {this.props.heroes.map((hero: Hero) => {
                        return <li data-heroes key={hero.id}
                                   className={this.state.hero.id === hero.id ? "selected" : ""}
                                   onClick={this.setSelected.bind(this, hero)}><span
                            data-heroes className="badge">{hero.id}</span> {hero.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}
