import React from 'react'
import { Button } from "react-bootstrap";

export const CommentComponent = ({
    movie,
    handleAddNewComment,
    newComment,
    setNewComment
}) => {
    return (
        <div>
            {movie && movie.comments && (
                <div>
                    {movie.comments.length ? <h3>Comments</h3> : <h3>No Comments</h3>}
                    <ul>
                        {movie.comments.map((comment) => (
                            <li key={comment.id}>
                                <p>{comment.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div>
                <form onSubmit={handleAddNewComment}>
                    <textarea
                        required
                        value={newComment.content}
                        placeholder="Enter comment"
                        onChange={({ target }) =>
                            setNewComment({ ...newComment, content: target.value })
                        }
                    />
                    <div>
                        <Button type="submit">Create Comment</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
