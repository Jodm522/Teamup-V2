import { getPlatforms } from "../../store/platforms";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./platformsStyle.css";
import { NavLink, Link } from "react-router-dom";

function Platforms() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

 const platforms = useSelector((state) => {
   return state?.platforms;
 });
  const platformList = platforms?.platformList;

  if (!platformList) return null;
  else
    return (
      <div>
        <div className="cardsTitle">Platforms</div>
        <div className="cardContainer">
          {platformList.map((platform) => (
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
      </div>
    );
}

export default Platforms;
