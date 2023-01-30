import React from "react";
import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem } from "cdbreact";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies, topMovies } from "../store/movie/slice";
import { selectTopMovies } from "../store/movie/selector";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const topMovies = useSelector(selectTopMovies);

  useEffect(() => {
    dispatch(getTopMovies());
  }, []);

  return (
    <div className="sidebar">
      <h5>Popular Movies</h5>
      <div className="sidebar-item">
        <ul>
          {topMovies?.map((topMovie) => {
            return (
              <li key={topMovie.id}>
                <Link
                  className="navbar-brand navbar-item mt-3 mb-3"
                  to={`movies/${topMovie.id}`}
                  key={topMovie.id}
                >
                  {topMovie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
