import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectWatchList } from '../store/movie/selector';
import { deleteMovieFromList, getWatchList, watchedMovie } from '../store/movie/slice';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

export const WatchList = () => {
    const dispatch = useDispatch();
    const watchLists = useSelector(selectWatchList);
    const history = useHistory();

    useEffect(() => {
        dispatch(getWatchList());
    }, [])

    return (
        <div>
            {watchLists.length ? <h3>Watch List</h3> : <h3>Watch List is empty</h3>}
            <ul>
                {watchLists && watchLists?.map((watchList) => {
                    return (<li key={watchList.id}>
                        <div>
                            <img src={watchList.movie.cover_image} width="600" height="200" alt="Movie cover" />
                        </div>
                        <h1 className="fw-bold mb-3 mt-md-4 mb-2 text-center">
                            {watchList.movie.title}
                        </h1>
                        <p className="justify-content-center">{watchList.movie.description}</p>
                        <div>
                            {watchList.watched == true ?
                                <p className="text-danger">* The movie was watched!</p> :
                                <>
                                    <label className="mb-2">Have you seen the movie?</label>
                                    <input
                                        className="mb-2"
                                        required
                                        type="checkbox"
                                        name="watched"
                                        value={true}
                                        onChange={() =>
                                            dispatch(watchedMovie(watchList.id))
                                        }
                                        onClick={() => history.push('movies')}
                                    />
                                </>
                            }
                        </div>
                        <div className="d-lg-flex justify-content-center mt-4 mb-4">
                            <Button onClick={() => {
                                dispatch(deleteMovieFromList(watchList.id))
                                history.push('movies')
                            }
                            }>
                                Delete the movie from your list
                            </Button>
                        </div>
                    </li>)
                })
                }
            </ul>
        </div>
    )
}
