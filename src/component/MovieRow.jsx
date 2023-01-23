import React from 'react'
import { Link } from "react-router-dom";

export const MovieRow = ({ movie, handleLike }) => {
  return (
    <div>
      <div>
        <img src={movie.cover_image} width="300" alt="Movie cover" />
      </div>
      <div style={{ marginLeft: 25, marginTop: 20 }}>
        <h3 className="mt-1 mb-1 ml-1">
          <Link
            style={{ textDecoration: "none" }}
            to={`/movies/${movie.id}`}
          >
            {movie.title}
          </Link>
        </h3>
        <p className="mb-1">
          {movie.description}
        </p>
        <div className="d-lg-flex justify-content-center">
          <p className="mt-3 ml-3">The number of likes is: {movie.likes}</p>
        </div>
        <div className="d-lg-flex justify-content-center mt-4 mb-5">
          <p className="mt-3 ml-3">The number of dislikes is: {movie.dislikes}</p>
        </div>
      </div>
    </div>
  )
}
