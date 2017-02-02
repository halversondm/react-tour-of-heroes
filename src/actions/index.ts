"use strict";
import Hero from "../components/Hero";
import {Action, ActionType} from "./action";
import * as fetch from "isomorphic-fetch";

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

export function setHeroes(heroes: Array<Hero>): Action {
    return {
        type: ActionType.GET_HEROES,
        hero: null,
        heroes
    }
}

export function getHeroes(): any {
    return (dispatch: any) => fetch("/api/data")
        .then((response: any) => response.json())
        .then((json: any) => dispatch(setHeroes(json.heroes)));
}

export function setHeroes(heroes: Array<Hero>): Action {
    return {
        type: ActionType.GET_HEROES,
        hero: null,
        heroes
    }
}

export function getHeroes(): any {
    return (dispatch: any) => fetch("/api/data")
        .then((response: any) => response.json())
        .then((json: any) => dispatch(setHeroes(json.heroes)));
}