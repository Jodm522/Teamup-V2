import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSessionsbyId } from "../../store/sessions";
import "./sessionPageStyle.css";
function Sessions() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let [currentPlayerArray, setCurrentPlayerArray] = useState([]);
  let [currentPlayerUIDs, setCurrentPlayerUIDs] = useState([]);

  useEffect(() => {
    dispatch(getSessionsbyId(id));
  }, [dispatch]);

  const sessionInfo = useSelector((state) => {
    return state.session;
  });

  let acceptedPlayers = sessionInfo?.acceptedPlayers;
  if (acceptedPlayers) {
    Object.keys(acceptedPlayers).map(function (name, uid) {
      currentPlayerArray = [...currentPlayerArray, name];
      currentPlayerUIDs = [...currentPlayerUIDs, uid];
      console.log(currentPlayerArray);
    });
  }

  return (
    <div className="sessionContainer">
      {sessionInfo && (
        <div>
          <div
            className="headerDiv"
            style={{ backgroundImage: `url("${sessionInfo.Game?.url}.jpg")` }}
          >
            <div className="sessionTitle">
              {sessionInfo?.User?.username}'s {sessionInfo?.Game?.title} session
            </div>
            <div className="titleAndDate">
              <div className="dateTime">
                <div>{sessionInfo?.title}</div>
                <div>By {sessionInfo?.User?.username}</div>
                <div>Platform: {sessionInfo?.Platform?.platform}</div>
              </div>

              <div className="dateTime">
                <div>
                  Date: {sessionInfo.date?.slice(5, 7)}/
                  {sessionInfo.date?.slice(8, 10)}/
                  {sessionInfo.date?.slice(0, 4)}
                </div>
                <div>Time: {sessionInfo.date?.slice(11, 16)}</div>
                <div>Playtype: {sessionInfo.Playtype?.playtype} </div>
              </div>
            </div>
            <div className="sessDesc">
              <div className="descTitle">Description</div>
              <div>{sessionInfo.text}</div>
            </div>

            <div className="players">
              Players:{sessionInfo.currentPlayers}/{sessionInfo.maxPlayers}
              <div className="currentPlayerList">
                {currentPlayerArray.map((playerName, idx) => (
                  <NavLink to={`/profiles/${idx}`}>{playerName}</NavLink>
                ))}
              </div>
              {sessionInfo.currentPlayers < sessionInfo.maxPlayers && (
                <div className="buttonorReturn">CLICK HERE TO JOIN</div>
              )}
              {sessionInfo.currentPlayers >= sessionInfo.maxPlayers && (
                <div>
                  This session is full. Click here to search for more games
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Sessions;
