import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRelateMovies } from "../store/movie/selector";
import { getRelateMovies } from "../store/movie/slice";
import { Link } from "react-router-dom";

export const RelateMovies = ({ id }) => {
    const dispatch = useDispatch();
    const relateMovies = useSelector(selectRelateMovies);

    useEffect(() => {
        dispatch(getRelateMovies(id));
    }, []);

    return (
        <div className="sidebar">
            <h5>Relate Movies</h5>
            <div className="sidebar-item">
                <ul>
                    {relateMovies?.map((relateMovie) => {
                        return (
                            <li key={relateMovie.id}>
                                <Link
                                    className="navbar-brand navbar-item mt-3 mb-3"
                                    to={`${relateMovie.id}`}
                                    key={relateMovie.id}
                                    onClick={() => dispatch(getRelateMovies(relateMovie.id))}
                                >
                                    {relateMovie.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
