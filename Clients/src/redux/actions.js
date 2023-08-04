import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER,  } from "./actionTypes.js"
import axios from "axios"


// ACTION | addFav
export const addFavorite = (character) => {
   return async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
   
      const {data} =await axios.post(endpoint, character)
     
         return dispatch({
            type: ADD_FAVORITES,
            payload: data,
       
      });
   }  catch (error) {
      return {error: error.message}
   }
   } 
   
}


// ACTION | removeFav
export const deleteFavorite = (id) => {
   return async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      
         const { data } = await axios.delete(endpoint)
            return dispatch({
               type: DELETE_FAVORITES,
               payload: data,
         })
      }catch (error) {
      return { error: error.message}
   }
   } 
   

 };


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