import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSessionsbyType } from "../../store/sessions";
import { getOneGame } from "../../store/games";
import "./SBGStyle.css";
import { getCategories } from "../../store/categories";
let info;
function Sessions() {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneGame(id));
    dispatch(getSessionsbyType("game", id));
    dispatch(getCategories());
  }, [dispatch]);

  const gameInfo = useSelector((state) => {
    return state?.games.game;
  });

  const sessionlist = useSelector((state) => {
    return state?.session.list;
  });
  const genres = useSelector((state) => {
    return state?.genres.list;
  });
  if (!gameInfo) return null;
  return (
    <div className="SBGcontainer">
      <div
        className="headerDiv"
        style={{ backgroundImage: `url("${gameInfo.url}.jpg")` }}
      >
        <div className="titleDiv">{gameInfo.title}</div>
        <div className="descContainer">
          <div className="titleDesc">{gameInfo.description}</div>

          {genres && (
            <div className="titleGenres">
              <div className="genreTitle">Genres:</div>
              <div className="genresContainer">
                <NavLink
                  className="genreButton"
                  to={`/genres/${gameInfo.genre1}`}
                >
                  {genres[gameInfo.genre1 - 1].genre}
                </NavLink>
                <NavLink
                  className="genreButton"
                  to={`/genres/${gameInfo.genre2}`}
                >
                  {genres[gameInfo.genre2 - 1].genre}
                </NavLink>
                <NavLink
                  className="genreButton"
                  to={`/genres/${gameInfo.genre3}`}
                >
                  {genres[gameInfo.genre3 - 1].genre}
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sessionsContainer">
        <div>
          <div className="sessionsTitle">Upcoming Sessions</div>

          {sessionlist?.map((session) => (
            <div>
              <NavLink className="singleSession" to={`/sessions/${session.id}`}>
                <div className="titleAndCreator">
                  <div>{session.title}</div>
                  <div>By {session.User.username}</div>
                </div>
                <div className="playersAndGame">
                  <div>Game: {session.Game.title}</div>
                  <div>
                    Current Players: {session.currentPlayers}/
                    {session.maxPlayers}
                  </div>
                </div>
                <div className="desc">
                  <div>Description</div>
                  <div>{session.text.slice(0, 16)}...</div>
                </div>
                <div className="dateAndTime">
                  <div>
                    Date: {session.date.slice(5, 7)}/{session.date.slice(8, 10)}
                    /{session.date.slice(0, 4)}
                  </div>
                  <div>Time: {session.date.slice(11, 16)}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sessions;
