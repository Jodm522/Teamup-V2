import { getGames } from "../../store/games";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";


function Games() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);


  //! pulling the array of games from the state
  const list = useSelector((state) => {
    return state?.games;
  })
  if (!list.length) return <div>broke</div>;


  else{
    return (
      <div>
        <div className="cardsTitle">Games</div>
        <div className="cardContainer">

          {list.map((game) => (
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
      </div>
    );
}
}
export default Games;
