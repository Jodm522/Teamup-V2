import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory } from "../../store/categories";
import { NavLink } from "react-router-dom";
function Genre() {
  const { genreId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneCategory(genreId));
  }, [dispatch]);

  const genre = useSelector((state) => {
    return state?.genres.genre;
  });
  return (
    <div>
      {genre && (
        <>
          <h1 className="cardsTitle">{genre[0].genre} Games</h1>
          <div className="cardContainer">
            {genre[1].map((game) => (
              <NavLink to={`/sessions/game/${game.id}`}>
                <div
                  className="card"
                  style={{
                    backgroundImage: `url("${game.url}.jpg")`,
                  }}
                ></div>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Genre;
