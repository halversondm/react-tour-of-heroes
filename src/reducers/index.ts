"use strict";

import Hero from "../components/Hero";
import {Action, ActionType} from "../actions/action";
import * as objectAssign from "object-assign";

export interface HeroState {
    heroes: Array<Hero>,
    selectedHero: Hero
}

const initialState: HeroState = {
    heroes: [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ],
    selectedHero: {id: 0, name: ""}
};

export const heroState = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE_NAME:
            console.log(action.hero);
            let heroes = state.heroes.map((hero: Hero) => {
                if (hero.id === action.hero.id) {
                    hero.name = action.hero.name;
                }
                return hero;

            });
            return objectAssign({}, state, {selectedHero: action.hero, heroes: heroes});
        case ActionType.SET_SELECTED:
            return objectAssign({}, state, {selectedHero: action.hero});
        default:
            return state;
    }
};
