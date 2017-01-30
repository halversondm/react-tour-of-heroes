"use strict";

import * as React from "react";
import {connect} from "react-redux";
import {HeroState} from "../reducers/index";
import {HeroList} from "./HeroList";
import {HeroDetail} from "./HeroDetail";
import * as HeroActions from "../actions";
import Hero from "./Hero";
import {bindActionCreators} from "redux";

interface StateProps {
    heroState: HeroState
}

interface DispatchProps {
    updateName(hero: Hero): void;
    setSelected(hero: Hero): void;
}

type TourOfHeroesProps = StateProps & DispatchProps;

function mapStateToProps(state: HeroState) {
    return {heroState: state};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(HeroActions, dispatch);
}
class TourOfHeroes extends React.Component<TourOfHeroesProps, any> {

    constructor() {
        super();
    }

    render() {
        const title = "Tour of Heroes";
        return (
            <div>
                <h1>{title}</h1>
                <HeroList heroes={this.props.heroState.heroes} setSelected={this.props.setSelected}/>
                <div hidden={this.props.heroState.selectedHero.id === 0}>
                    <HeroDetail selectedHero={this.props.heroState.selectedHero} updateName={this.props.updateName}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourOfHeroes);
