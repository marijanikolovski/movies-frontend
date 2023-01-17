import React from 'react'
import { Link } from "react-router-dom";

export const MovieRow = ({ movie }) => {
  return (
    <div>
      <h3>
        <Link
          to={`/movies/${movie.id}`}
        >
          {movie.title}
        </Link>
      </h3>
      <p>
        {movie.description}
      </p>
      <div>
        <img src={movie.cover_image} alt="Movie cover" />
      </div>
    </div>
  )
}
