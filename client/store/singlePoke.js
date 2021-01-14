import axios from 'axios'

//action types
const SET_POKEMON = 'SET_POKEMON'

// ACTION CREATOR
export const singlePokemon = pokemon => ({
  type: SET_POKEMON,
  pokemon
})

// Thunk
export const fetchPokemon = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/product/${id}`)

      dispatch(singlePokemon(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  pokemon: {}
}

const singlePokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {...state, pokemon: action.pokemon}
    default:
      return state
  }
}

export default singlePokemonReducer
