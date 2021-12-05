import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSessionsbyId } from "../../store/sessions";
import "./sessionPageStyle.css";
function Sessions() {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSessionsbyId(id));
  }, [dispatch]);

const sessionInfo = useSelector((state)=>{
  return state.session
})

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
                {sessionInfo.date?.slice(8, 10)}/{sessionInfo.date?.slice(0, 4)}
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

          {sessionInfo.currentPlayers < sessionInfo.maxPlayers && (
            <div className="buttonorReturn">CLICK HERE TO JOIN</div>
          )}
          {sessionInfo.currentPlayers >= sessionInfo.maxPlayers && (
            <div>This session is full. Click here to search for more games</div>
          )}</div>
        </div>
      </div>
    )}
  </div>
);

//   return (
//     <div className="SBGcontainer">
//       <div
//         className="headerDiv"
//         style={{ backgroundImage: `url("${gameInfo.url}.jpg")` }}
//       >
//         <div className="titleDiv">{gameInfo.title}</div>
//         <div className="descContainer">
//           <div className="titleDesc">{gameInfo.description}</div>

//           {genres && (
//             <div className="titleGenres">
//               <div className="genreTitle">Genres:</div>
//               <div className="genresContainer">
//                 <NavLink
//                   className="genreButton"
//                   to={`/genres/${gameInfo.genre1}`}
//                 >
//                   {genres[gameInfo.genre1 - 1].genre}
//                 </NavLink>
//                 <NavLink
//                   className="genreButton"
//                   to={`/genres/${gameInfo.genre2}`}
//                 >
//                   {genres[gameInfo.genre2 - 1].genre}
//                 </NavLink>
//                 <NavLink
//                   className="genreButton"
//                   to={`/genres/${gameInfo.genre3}`}
//                 >
//                   {genres[gameInfo.genre3 - 1].genre}
//                 </NavLink>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="sessionsContainer">
//         <div>
//           <div className="sessionsTitle">Upcoming Sessions</div>

//           {sessionlist?.map((session) => (
//             <div>
//               <NavLink
//                 className="singleSession"
//                 to={`/genres/${gameInfo.genre3}`}
//               >
//                 <div className="titleAndCreator">
//                   <div>{session.title}</div>
//                   <div>By {session.User.username}</div>
//                 </div>
//                 <div className="playersAndGame">
//                   <div>Game: {session.Game.title}</div>
//                   <div>
//                     Current Players: {session.currentPlayers}/
//                     {session.maxPlayers}
//                   </div>
//                 </div>
//                 <div className="desc">
//                   <div>Description</div>
//                   <div>{session.text.slice(0, 16)}...</div>
//                 </div>
//                 <div className="dateAndTime">
//                   <div>
//                     Date: {session.date.slice(5, 7)}/{session.date.slice(8, 10)}
//                     /{session.date.slice(0, 4)}
//                   </div>
//                   <div>Time: {session.date.slice(11, 16)}</div>
//                 </div>
//               </NavLink>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
}
export default Sessions;
