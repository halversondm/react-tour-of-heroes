"use strict";

import Hero from "../components/Hero";
import {Action, ActionType} from "../actions/action";
import * as objectAssign from "object-assign";

export interface HeroState {
    heroes: Array<Hero>,
    selectedHero: Hero
}

const initialState: HeroState = {
    heroes: [],
    selectedHero: {id: 0, name: ""}
};

export const heroState = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_HEROES:
            return objectAssign({}, state, {heroes: action.heroes});
        case ActionType.UPDATE_NAME:
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
