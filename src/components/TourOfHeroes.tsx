"use strict";

import * as React from "react";
import {HeroState} from "../reducers/index";
import {HeroList} from "./HeroList";
import Hero from "./Hero";
import {bindActionCreators} from "redux";
import * as HeroActions from "../actions";
import {connect} from "react-redux";

interface StateProps {
    heroState: HeroState
}

interface DispatchProps {
    updateName(hero: Hero): void;
    setSelected(hero: Hero): void;
    removeSelected(): void;
    getHeroes(): void;
    router: any;
}

type TourOfHeroesProps = StateProps & DispatchProps;

function mapStateToProps(state: HeroState) {
    return {heroState: state};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(HeroActions, dispatch);
}

class TourOfHeroes extends React.Component<TourOfHeroesProps, any> {

    componentDidMount() {
        this.props.removeSelected();
        this.goToDetail = this.goToDetail.bind(this);
    }

    goToDetail() {
        this.props.router.push("/detail");
    }

    render() {
        return (
            <div data-heroes>
                <HeroList data-heroes heroes={this.props.heroState.heroes} setSelected={this.props.setSelected}/>
                <div data-heroes hidden={this.props.heroState.selectedHero.id === 0}>
                    <h2 data-heroes>{this.props.heroState.selectedHero.name.toUpperCase() + " is my hero"}</h2>
                    <button data-heroes onClick={this.goToDetail}>View Details</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourOfHeroes);
