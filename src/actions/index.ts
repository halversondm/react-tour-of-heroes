"use strict";
import Hero from "../components/Hero";
import {Action, ActionType} from "./action";

export function updateName(hero: Hero): Action {
    return {
        type: ActionType.UPDATE_NAME,
        hero
    };
}

export function setSelected(hero: Hero): Action {
    return {
        type: ActionType.SET_SELECTED,
        hero
    };
}
