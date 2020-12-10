import { GET_FILMS, DELETE_FILM, ADD_FILM, CLEAR_FILMS } from '../actions/types.js'

const initialState = {
  films: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload
      }
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film.id !== action.payload)
      }
    case ADD_FILM:
      return {
        ...state,
        films: [...state.films, action.payload]
      }
    case CLEAR_FILMS:
      return {
        ...state,
        films: []
      }
    default:
      return state
  }
}
