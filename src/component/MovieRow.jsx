import React from 'react'
import { Link } from "react-router-dom";

export const MovieRow = ({ movie }) => {
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
        <p className="mb-5">
          {movie.description}
        </p>

      </div>
    </div>
  )
}
