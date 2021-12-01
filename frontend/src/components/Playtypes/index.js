import { getPlaytypes } from "../../store/playtypes";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./playtypesStyle.css";
import { NavLink, Link } from "react-router-dom";

function Playtypes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaytypes());
  }, [dispatch]);

  const playtypes = useSelector((state) => {
    return state.playtypes;
  });
  const playtypesList = playtypes.playtypesList;

  if (!playtypesList) return null;
  else
    return (
      <div>
        <div className="cardsTitle">Playstyles</div>
        <div className="cardContainer">
          {playtypesList.map((playtype) => (
            <NavLink to={`/sessions/playtypes/${playtype.id}`}>
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

export default Playtypes;
