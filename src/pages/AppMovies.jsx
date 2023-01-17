import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/movie/slice'
import { selectMovies } from '../store/movie/selector'
import { MovieRow } from '../component/MovieRow'

export const AppMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div>
            <h1>Movies</h1>

            {movies.length ? (
                <ul>
                    {movies.map((movie) => (
                        <MovieRow 
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </ul>
            ) : (
                <div className="fw-bold mb-3 mt-md-4 mb-2 text-center text-uppercase ">
                    No movies created.
                </div>
            )

            }
        </div>
    )
}
