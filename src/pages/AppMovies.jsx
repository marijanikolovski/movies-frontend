import React, { useEffect } from 'react'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/movie/slice'
import { selectMovies } from '../store/movie/selector'
import { MovieRow } from '../component/MovieRow'

export const AppMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(getMovies({ page: 1 }));
    }, []);

    function handlePaginate(page) {
        dispatch(getMovies({ page: page }));
    }

    return (
        <div>
            {movies.data.length ? (
                <div>
                    <ul>
                        {movies.data.map((movie) => (
                            <MovieRow
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </ul>
                    {movies.current_page !== movies.last_page && (
                        <Button onClick={() => handlePaginate(movies.current_page + 1)}>
                            Load More
                        </Button>
                    )}
                </div>
            ) : (
                <div>No movies created.</div>
            )}
        </div>
    )
}
