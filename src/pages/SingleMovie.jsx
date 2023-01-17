import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { selectMovie } from '../store/movie/selector';
import { getMovie } from '../store/movie/slice';

export const SingleMovie = () => {
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMovie(id));
    }, [id])

    return (
        <div>
            <div>
                <img src={movie.cover_image} width="600" height="200" alt="Movie cover" />
            </div>
            <h1 className="fw-bold mb-3 mt-md-4 mb-2 text-center">
                {movie.title}
            </h1>
            <h4 className="justify-content-center"><strong>Genre: </strong>{movie?.genre?.name}</h4>
            <p className="justify-content-center">{movie.description}</p>
        </div>
    )
}
