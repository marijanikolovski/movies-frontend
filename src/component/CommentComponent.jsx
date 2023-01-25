import React from 'react'
import { Button } from "react-bootstrap";

export const CommentComponent = ({
    comments,
    handleAddNewComment,
    newComment,
    setNewComment,
    handlePaginate
}) => {
    return (
        <div>
            {comments && comments.data && (
                <div>
                    {comments.data.length ? <h3>Comments</h3> : <h3>No Comments</h3>}
                    <ul>
                        {comments.data.map((comment) => (
                            <li key={comment.id}>
                                <p>{comment.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div>
                {comments.current_page !== comments.last_page && (
                    <Button className='mb-3' onClick={() => handlePaginate(comments.current_page + 1)}>
                        Load More
                    </Button>
                )}
            </div>
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
