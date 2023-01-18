import React, { useEffect } from 'react'
import { debounce } from 'lodash';
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, setSearchTerm } from '../store/movie/slice'
import { selectMovies, selectSearchTerm } from '../store/movie/selector'
import { MovieRow } from '../component/MovieRow'
import { MovieSearchComponent } from '../component/MovieSearchComponent';

export const AppMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const term = useSelector(selectSearchTerm);

    useEffect(() => {
        dispatch(getMovies({ page: 1, term: null }));
    }, []);

    function handlePaginate(page) {
        dispatch(getMovies({ page: page, term: term }));
    }

    function handleSearchTerm(event) {
        dispatch(setSearchTerm(event.target.value))
    }

    function handleSearch() {
        dispatch(getMovies({ page: 1, term: term }));
    }

    const debouncedHandleChange = (...args) => {
        const debounced = debounce(...args)

        return function (e) {
            e.persist()
            return debounced(e)
        }
    }

    return (
        <div>
            {movies.data.length ? (
                <div>
                    <MovieSearchComponent
                        handleSearchTerm={handleSearchTerm}
                        handleSearch={handleSearch}
                        debouncedHandleChange={debouncedHandleChange}
                    />
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
