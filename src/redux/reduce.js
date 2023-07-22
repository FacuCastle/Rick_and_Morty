import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actionTypes";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            const copyCharacters =[...state.allCharacters, action.payload]
            return {
                ...state,
                myFavorites: copyCharacters,
                allCharacters: [...copyCharacters]
            }
            
        case DELETE_FAVORITES: 
        return {
            ...state,
            myFavorites: state.myFavorites.filter((character)=> character.id !== action.payload )
        }
    
        case FILTER:

            const filterCharacter = state.allCharacters.filter((character)=> character.gender === action.payload)
            return{
            ...state,
            myFavorites: filterCharacter
            
        }
        case ORDER:
            //metodo sort
            //si retorna 1 si a es mayor a b
            //retorna -1  si a es menor a b
           // retorna 0 si a y b son ===
            const orderCharacter = state.allCharacters.sort((a, b)=>{
                if(action.payload=== 'Ascendete'){
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return -1
                    return 0
                }
                //descendente
                else{
                    if(a.id < b.id) return 1
                    if(b.ad < a.id) return -1
                    return 0
                }
            })
            return{
                ...state,
                myFavorites: orderCharacter

            }
        default:
            return {
                ...state
            }
    }
}

export default reducer