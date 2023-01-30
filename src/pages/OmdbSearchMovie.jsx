import React, { useState } from "react";
import { getOmdbMovies, setNewMovie, setInputTitle } from "../store/movie/slice";
import { selectOmdvMoves, selectNewMovie } from "../store/movie/selector";
import { useDispatch, useSelector } from "react-redux";


export const OmdbSearchMovie = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const omdbMoves = useSelector(selectOmdvMoves);
    const newMovie = useSelector(selectNewMovie);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getOmdbMovies({ name: name }))
    }

    return (
        <div>
            <form>
                <div className='searchBar'>
                    <label htmlFor='name'></label>
                    <input
                        type='text'
                        name='name'
                        placeholder='movie name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' onClick={(e) => handleSubmit(e)}>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};
