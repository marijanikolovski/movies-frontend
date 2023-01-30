import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { selectComments, selectMovie, selectNewMovie, selectStatus } from '../store/movie/selector';
import { addComment, createWatchList, dislikeMovie, getComments, getMovie, likeMovie } from '../store/movie/slice';
import { Button } from "react-bootstrap";
import { CommentComponent } from '../component/CommentComponent';
import { RelateMovies } from './RelateMovies';

export const SingleMovie = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(selectMovie);
    const { id } = useParams();
    const newMovie = useSelector(selectNewMovie)
    const status = useSelector(selectStatus);
    const comments = useSelector(selectComments)
    const [newComment, setNewComment] = useState({
        content: "",
    });

    const handleLike = (e) => {
        e.preventDefault();
        dispatch(likeMovie(movie.id));
    }

    const handleDislike = (e) => {
        e.preventDefault();
        dispatch(dislikeMovie(movie.id));
    }

    const handleAddNewComment = (e) => {
        e.preventDefault();
        dispatch(addComment({ comment: newComment, movieId: id }));
        setNewComment({ content: "" });
    };

    function handlePaginate(page) {
        dispatch(getComments({ movieId: id, page: page }));
    }

    function handleCreateWatchList(e) {
        e.preventDefault();
        dispatch(createWatchList(id));
        history.push('/watchlist');
    }

    useEffect(() => {
        dispatch(getMovie(id));
        dispatch(getComments({ movieId: id, page: 1 }))
    }, [id])

    return (
        <div>
            <div>
                <RelateMovies
                    id={id}
                />
            </div>
            <div>
                <img src={movie.cover_image} width="600" height="200" alt="Movie cover" />
            </div>
            <h1 className="fw-bold mb-3 mt-md-4 mb-2 text-center">
                {movie.title}
            </h1>
            {movie.watch_lists?.map(({ movie_id, watched }) => {
                if (movie_id == id && watched == true) {
                    return <p key={id} className="text-danger">* The movie was watched!</p>
                }
            })
            }
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
            <div className="d-lg-flex justify-content-center mt-4 mb-4">
                {movie.watch_lists?.some(({ movie_id }) => movie_id == id) ?
                    <p className="text-danger">This movie is in your watch list</p> :
                    <Button onClick={handleCreateWatchList}>Add the movie to your watch list</Button>
                }
            </div>
            <p className="justify-content-center">The number of visits for this film is: {movie.visits}</p>
            <div>
                <CommentComponent
                    key={movie.id}
                    comments={comments}
                    handleAddNewComment={handleAddNewComment}
                    newComment={newComment}
                    setNewComment={setNewComment}
                    handlePaginate={handlePaginate}
                />
            </div>
        </div>
    )
}
