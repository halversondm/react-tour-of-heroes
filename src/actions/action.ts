"use strict";
import Hero from "../components/Hero";

export interface Action {
    type: ActionType,
    hero: Hero
}

export enum ActionType {
    UPDATE_NAME,
    SET_SELECTED
}