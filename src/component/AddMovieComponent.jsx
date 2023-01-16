import React from "react";
import { setNewMovie } from "../store/movie/slice";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export const AddMovieComponent = ({
    newMovie,
    handleOnSubmit,
    genres
}) => {
    const dispatch = useDispatch();

    return (
        <div>
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
                        value={newMovie.cover_image}
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

