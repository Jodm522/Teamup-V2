import React from "react";
import { getPlaytypes } from "../../store/playtypes";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { getGames } from "../../store/games";
import { getPlatforms } from "../../store/platforms";

import { makeSession } from "../../store/sessions";

function CreateSessionPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
    dispatch(getPlaytypes());
    dispatch(getPlatforms());
  }, [dispatch]);

  const [title, setTitle] = useState("");
  const [game, setGame] = useState(1);
  const [playtype, setPlaytype] = useState(1);
  const [platform, setPlatform] = useState(1);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const creator = 1; //= useSelector((state) => {
  //   return state.session.user;
  // });
  const playtypes = useSelector((state) => {
    return state.playtypes?.playtypesList;
  });
  const games = useSelector((state) => {
    return state?.games;
  });
  const platforms = useSelector((state) => {
    return state.platforms?.platformList;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeSession({ title, creator, playtype, platform, game, date, description }));
  };

  if (!games || !platforms || !playtypes) return <div>Fetching</div>;
  // if(!creator) return <div>null</div>
  // creator = creator.id;
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="sessionForm">
        <label>
          Session Name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Game:
          <select onChange={(e) => setGame(e.target.value)}>
            {games.map((game) => (
              <option value={game.id}>{game.title}</option>
            ))}
          </select>
        </label>
        <label>
          Platform:
          <select onChange={(e) => setPlatform(e.target.value)}>
            {platforms.map((platform) => (
              <option value={platform.id}>{platform.platform}</option>
            ))}
          </select>
        </label>
        <label>
          Playtype:
          <select onChange={(e) => setPlaytype(e.target.value)}>
            {playtypes.map((playtype) => (
              <option value={playtype.id}>{playtype.playtype}</option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        <label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="datetime-local"
          ></input>
        </label>
        <button type="submit">Create Session</button>
      </form>
    </div>
  );
}
export default CreateSessionPage;
