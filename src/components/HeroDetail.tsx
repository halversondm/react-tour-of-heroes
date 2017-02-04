"use strict";

import * as React from "react";
import Hero from "./Hero";
import "../styles/HeroDetail.css";
import {HeroState} from "../reducers/index";
import {bindActionCreators} from "redux";
import * as HeroActions from "../actions";
import {connect} from "react-redux";
import {InjectedRouter} from "react-router";

interface StateProps {
    selectedHero: Hero;
    router: InjectedRouter;
}

interface DispatchProps {
    updateName(hero: Hero): void;
}

type HeroDetailProps = StateProps & DispatchProps;

function mapStateToProps(state: HeroState) {
    return {selectedHero: state.selectedHero};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(HeroActions, dispatch);
}

class HeroDetail extends React.Component<HeroDetailProps, Hero> {

    state: Hero;

    constructor(props: HeroDetailProps) {
        super(props);
        this.state = this.props.selectedHero;
        this.nameChange = this.nameChange.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    nameChange(event: any) {
        const name: string = event.target.value;
        let state = this.state;
        state.name = name;
        this.setState(state);
        this.props.updateName(state);
    }

    goBack() {
        this.props.router.goBack();
    }

    render() {
        return (
            <div data-hero-detail>
                <h2 data-hero-detail>{this.state.name} details!</h2>
                <div data-hero-detail>
                    <label data-hero-detail>id: </label>{this.state.id}
                </div>
                <div data-hero-detail>
                    <label data-hero-detail>name: </label>
                    <input data-hero-detail value={this.state.name} onChange={this.nameChange}/>
                </div>
                <button data-hero-detail onClick={this.goBack}>Back</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);