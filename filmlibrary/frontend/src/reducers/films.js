import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS } from '../actions/types.js';

const initialState = {
  films: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        films: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        films: state.films.filter((film) => film.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        films: [...state.films, action.payload],
      };
    case CLEAR_LEADS:
      return {
        ...state,
        films: [],
      };
    default:
      return state;
  }
}
