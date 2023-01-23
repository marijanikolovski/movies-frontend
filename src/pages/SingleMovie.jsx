import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { selectMovie, selectNewMovie, selectStatus } from '../store/movie/selector';
import { dislikeMovie, getMovie, likeMovie } from '../store/movie/slice';
import { Button } from "react-bootstrap";

export const SingleMovie = () => {
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    const { id } = useParams();
    const newMovie = useSelector(selectNewMovie)
    const status = useSelector(selectStatus);

    const handleLike = (e) => {
        e.preventDefault();
        dispatch(likeMovie(movie.id));
    }

    const handleDislike = (e) => {
        e.preventDefault();
        dispatch(dislikeMovie(movie.id));
    }

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
            <div className="d-lg-flex justify-content-center">
                <p className="text-danger">{status}</p>
                <Button onClick={handleLike}>Like</Button>
                <p className="mt-3 ml-3">The number of likes is: {movie.likes}</p>
            </div>
            <div className="d-lg-flex justify-content-center mt-4">
                <Button onClick={handleDislike}>Dislike</Button>
                <p className="mt-3 ml-3">The number of dislikes is: {movie.dislikes}</p>
            </div>
            <p className="justify-content-center">The number of visits for this film is: {movie.visits}</p>
        </div>
    )
}
