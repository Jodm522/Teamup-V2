import { getCategories } from "../../store/categories";
import { getPlatforms } from "../../store/platforms";
import { getGames } from "../../store/games";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homeStyle.css";
import { NavLink, Link } from "react-router-dom";
import { getPlaytypes } from "../../store/playtypes";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPlatforms());
    dispatch(getPlaytypes());
    dispatch(getGames());
  }, [dispatch]);

  const games = useSelector((state) => {
    return state?.games;
  });
  const genres = useSelector((state) => {
    return state?.genres;
  });
  const platforms = useSelector((state) => {
    return state?.platforms;
  });
  const playtypes = useSelector((state) => {
    return state.playtypes;
  });
  const list = genres?.list;
  const platformList = platforms?.platformList;
  const playtypesList = playtypes.playtypesList;

  if (!genres.list || !platformList || !playtypesList || !games.length)
    return <div>It broke again</div>;
  else {

    const gamesToDisplay = [games[0], games[1], games[29], games[9]];
    const displayList = [list[2], list[5], list[6], list[14]];
    const displayPlatforms = [
      platformList[0],
      platformList[1],
      platformList[2],
      platformList[5],
    ];
    return (
      <div>
        <div className="cardsTitle">
          Find sessions by{" "}
          <NavLink className="cardsNav" to="/genres">
            Genre
          </NavLink>
        </div>
        <div className="cardContainer">
          {displayList.map((genre) => (
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
        <div className="cardsTitle">
          Find sessions by{" "}
          <NavLink className="cardsNav" to="/platforms">
            Platform
          </NavLink>
        </div>

        <div className="cardContainer">
          {displayPlatforms.map((platform) => (
            <NavLink to={`/sessions/platform/${platform.id}`}>
              <div
                className="card"
                style={{
                  backgroundImage: `url("${platform.url}.jpg")`,
                }}
              >
                {platform.platform}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="cardsTitle">
          Find sessions by{" "}
          <NavLink className="cardsNav" to="/games">
            Game
          </NavLink>
        </div>
        <div className="cardContainer">
          {gamesToDisplay.map((game) => (
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
        <div className="cardsTitle">
          Find sessions by{" "}
          <NavLink className="cardsNav" to="/playtypes">
            Playstyle
          </NavLink>
        </div>
        <div className="cardContainer">
          {playtypesList.map((playtype) => (
            <NavLink to={`/sessions/playtype/${playtype.id}`}>
              <div
                className="card"
                style={{
                  backgroundImage: `url("${playtype.url}.jpg")`,
                }}
              >
                {playtype.playtype}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
