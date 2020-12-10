import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_FILMS, DELETE_FILM, ADD_FILM } from "./types";

// GET FILMS
export const getFilms = () => (dispatch, getState) => {
  axios
    .get("/api/films/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FILMS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE FILM
export const deleteFilm = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/films/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteFilm: "Film Deleted" }));
      dispatch({
        type: DELETE_FILM,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD FILM
export const addFilm = (film) => (dispatch, getState) => {
  axios
    .post("/api/films/", film, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFilm: "Film Added" }));
      dispatch({
        type: ADD_FILM,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
