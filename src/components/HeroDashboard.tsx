"use strict";

import * as React from "react";
import Hero from "./Hero";
import "../styles/HeroDashboard.css";
import {Link} from "react-router";
import {HeroState} from "../reducers/index";
import {bindActionCreators} from "redux";
import * as HeroActions from "../actions";
import {connect} from "react-redux";

interface StateProps {
    heroState: HeroState
}

interface DispatchProps {
    updateName(hero: Hero): void;
    setSelected(hero: Hero): void;
    getHeroes(): void;
}

type HeroDashboardProps = StateProps & DispatchProps;

function mapStateToProps(state: HeroState) {
    return {heroState: state};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(HeroActions, dispatch);
}

class HeroDashboard extends React.Component<HeroDashboardProps, any> {
    render() {
        let heroes = this.props.heroState.heroes.slice(1, 5);
        const title = "Top Heroes";
        return (
            <div data-dashboard>
                <h3 data-dashboard>{title}</h3>
                <div data-dashboard className="grid grid-pad">
                    {
                        heroes.map((hero: Hero) => {
                            return (
                                <Link data-dashboard key={hero.id} className="col-1-4" to="/detail"
                                      onClick={this.props.setSelected.bind(this, hero)}>
                                    <div data-dashboard className="module hero">
                                        <h4 data-dashboard>{hero.name}</h4>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDashboard);
