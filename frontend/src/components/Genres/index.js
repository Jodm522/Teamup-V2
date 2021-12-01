import { getCategories } from "../../store/categories";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./genresStyle.css";
import { NavLink, Link } from "react-router-dom";

function Genres() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const genres = useSelector((state) => {
    return state?.genres;
  });

  const list = genres?.list;
  // if (!genres.list) return null;
  // else
    return (
      <div>
        <div className="cardsTitle">Genres</div>
        <div className="cardContainer">

          {list && list.map((genre) => (
            <NavLink to={`/genres/${genre.id}`}>
              <div
                className="card"
                style={{
                  backgroundImage: `url("${genre.url}.jpg")`,
                }}
              >
                {genre.genre}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
}

export default Genres;
