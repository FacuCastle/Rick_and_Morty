import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actionTypes.js"

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}


export const deleteFavorite = (id)=> {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const order = (id)=> {
    return {
        type: ORDER,
        payload: id
    }
}