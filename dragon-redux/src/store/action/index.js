import {
    DRAGON_ADD,
    DRAGON_DELETE,
    DRAGON_SET_ERROR,
    DRAGON_SET_VALUE, KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR,
    KNIGHT_SET_VALUE
} from "../constant/action-type.js";

export const addDragon = () => ({
    type: DRAGON_ADD
})

export const setDragonName = (payload) => ({
    type: DRAGON_SET_VALUE,
    payload
})

export const setDragonError = (payload) => {
    return {
        type: DRAGON_SET_ERROR,
        payload
    }
}

export const deleteDragon = (payload) => {
    return {
        type: DRAGON_DELETE,
        payload
    }
}

export const setKnightInfo = (payload) => ({
    type: KNIGHT_SET_VALUE,
    payload
})

export const addKnight = () => ({
    type: KNIGHT_ADD
})

export const deleteKnight = (payload) => ({
    type: KNIGHT_DELETE,
    payload
})

export const setKnightError = (payload) => ({
    type: KNIGHT_SET_ERROR,
    payload
})