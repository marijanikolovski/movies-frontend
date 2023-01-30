import React, { useEffect } from "react";
import { addMovie } from "../store/movie/slice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectNewMovie } from "../store/movie/selector";
import { setResetForm } from "../store/movie/slice";
import { AddMovieComponent } from "../component/AddMovieComponent";
import { selectGenres } from "../store/genre/selector";
import { getGenres } from "../store/genre/slice";
import { OmdbSearchMovie } from "./OmdbSearchMovie";

export const AddMovie = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const newMovie = useSelector(selectNewMovie);
    const genres = useSelector(selectGenres);

    useEffect(() => {
          dispatch(getGenres());
      }, []);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        dispatch(addMovie(newMovie));
        dispatch(setResetForm());
        history.push("/");
    };

    return (
        <div>
            <OmdbSearchMovie />
            <AddMovieComponent
                newMovie={newMovie}
                handleOnSubmit={handleOnSubmit}
                genres={genres}
            />
        </div>
    );
};

