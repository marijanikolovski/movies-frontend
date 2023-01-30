import React, { useEffect } from "react";
import { debounce } from "lodash";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, setSearchTerm } from "../store/movie/slice";
import { selectMovies, selectSearchTerm } from "../store/movie/selector";
import { MovieRow } from "../component/MovieRow";
import { MovieSearchComponent } from "../component/MovieSearchComponent";
import { MovieFilterComponent } from "../component/MovieFilterComponent";
import { selectGenres } from "../store/genre/selector";
import { getGenres } from "../store/genre/slice";
import { Sidebar } from "../pages/Sidebar";

export const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const term = useSelector(selectSearchTerm);
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(getMovies({ page: 1, term: null }));
    dispatch(getGenres());
  }, []);

  function handlePaginate(page) {
    dispatch(getMovies({ page: page, term: term }));
  }

  function handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }

  function handleSearch() {
    dispatch(getMovies({ page: 1, term: term }));
  }

  const debouncedHandleChange = (...args) => {
    const debounced = debounce(...args);

    return function (e) {
      e.persist();
      return debounced(e);
    };
  };

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="movies-container">
        <div className="root-div">
          <div>
            {movies.data.length ? (
              <div>
                <MovieSearchComponent
                  handleSearchTerm={handleSearchTerm}
                  handleSearch={handleSearch}
                  debouncedHandleChange={debouncedHandleChange}
                />
                <MovieFilterComponent
                  handleSearch={handleSearch}
                  handleSearchTerm={handleSearchTerm}
                  genres={genres}
                />
                <ul>
                  {movies.data.map((movie) => (
                    <MovieRow key={movie.id} movie={movie} />
                  ))}
                </ul>
                {movies.current_page !== movies.last_page && (
                  <Button
                    onClick={() => handlePaginate(movies.current_page + 1)}
                  >
                    Load More
                  </Button>
                )}
              </div>
            ) : (
              <div>No movies created.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
