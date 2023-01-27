import React, { useState } from "react";
import { setNewMovie } from "../store/movie/slice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { selectOmdvMoves } from "../store/movie/selector";

export const AddMovieComponent = ({
    newMovie,
    handleOnSubmit,
    genres
}) => {
    const dispatch = useDispatch();
    const omdbMoves = useSelector(selectOmdvMoves);
    const [inputTitle, setInputTitle] = useState("");

    return (
        <div>
            {omdbMoves ?
                <div className="movies">
                    <h5>Choose a title</h5>
                    {omdbMoves?.map(movie => (
                        <div key={movie.imdbID} className="movie">
                            <div className="movie-title">
                                <p onClick={(e) => {
                                    setInputTitle(e.target.innerText);
                                    dispatch(setNewMovie({ ...newMovie, title: movie.Title, cover_image: movie.Poster }))
                                }}>{movie.Title}</p>
                            </div>
                        </div>))}
                </div>
                : null}
            <h2>Create New Movie</h2>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input
                        className="mb-2"
                        required
                        type="text"
                        placeholder="Title"
                        value={newMovie.title}
                        onChange={({ target }) =>
                            dispatch(setNewMovie({ ...newMovie, title: target.value }))
                        }
                    />
                </div>
                <div>
                    <textarea
                        className="mb-2"
                        placeholder="Description"
                        value={newMovie.description}
                        onChange={({ target }) =>
                            dispatch(setNewMovie({ ...newMovie, description: target.value }))
                        }
                    />
                </div>
                <div>
                    <input
                        className="mb-2"
                        required
                        name="cover_image"
                        value={omdbMoves?.map((movie) => {
                            if (inputTitle == movie.Title) {
                                return movie.Poster
                            }
                        })}
                        placeholder="Image url goes here"
                        onChange={({ target }) =>
                            dispatch(setNewMovie({ ...newMovie, cover_image: target.value }))
                        }
                    />
                </div>
                <div>
                    <select
                        value={newMovie.genre_id}
                        onChange={({ target }) =>
                            dispatch(setNewMovie({ ...newMovie, genre_id: target.value }))}
                    >
                        <option key={'-1'}> ------ </option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>
                <span className="mb-2">
                    <Button type="submit">Add Movie</Button>
                </span>
            </form>
        </div>
    );
};

