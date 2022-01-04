import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { loadMultipleProfiles } from "../../store/profile";
import { loadOneProfile } from "../../store/profile";
import { getSessionsbyId } from "../../store/sessions";
import { getApplicationsById } from "../../store/applications";
import { getRatings } from "../../store/ratings";
import "./sessionPageStyle.css";
function Sessions() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let [currentPlayerArray, setCurrentPlayerArray] = useState([]);
  let [currentPlayerUIDs, setCurrentPlayerUIDs] = useState([]);
  const [applicantsModal, setApplicantsModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    dispatch(getSessionsbyId(id));
  }, [dispatch]);

  const sessionInfo = useSelector((state) => {
    return state.session;
  });
  const currentApplicants = useSelector((state) => {
    return state?.applications?.applications;
  });

  const currentUserId = useSelector((state) => {
    return state?.userSession?.user?.id;
  });
  const ratings = useSelector((state) => {
    return state.ratings?.ratings;
  });
  const modalProfile = useSelector((state) => {
    return state?.profiles?.profile;
  });
  const getApplicants = async () => {
    await dispatch(getApplicationsById(sessionInfo.id));
  };

  const calculateRating = () => {
    let initSum = 0;
    ratings?.forEach((rate) => {
      initSum += rate.rating;
    });
    setRating(Math.round((initSum / ratings.length) * 10) / 10);
  };
  useEffect(() => {
    calculateRating();
  }, [ratings]);
  const openProfileModal = async (profId) => {
    setProfileModal(true);
    await dispatch(loadOneProfile(profId));
    await dispatch(getRatings(profId));
  };

  let acceptedPlayers = sessionInfo?.acceptedPlayers;
  if (acceptedPlayers) {
    Object.keys(acceptedPlayers).map(function (name, uid) {
      currentPlayerArray = [...currentPlayerArray, name];
      currentPlayerUIDs = [...currentPlayerUIDs, uid];
    });
  }

  return (
    <div className="sessionContainer">
      {/* //profile modal */}
      {profileModal && (
        <div className="profileModal">
          {" "}
          <div className="closeButton">
            <i
              className="fas fa-times-circle"
              onClick={(e) => {
                setProfileModal(false);
              }}
            ></i>
          </div>
          <div
            className="modalProfHeader"
            style={{
              backgroundImage: `url("${modalProfile?.bannerImage}")`,
            }}
          ></div>
        </div>
      )}
      {/* //applicantmodal */}
      {applicantsModal && (
        <div className="applicantsModal">
          <div className="closeButton">
            <i
              className="fas fa-times-circle"
              onClick={(e) => {
                setApplicantsModal(false);
              }}
            ></i>
          </div>
          {currentApplicants?.map((applicant) => (
            <div
              className="singleApplicant"
              style={{
                backgroundImage: `url("${applicant?.User.bannerImage}")`,
              }}
            >
              <div className="ratingNamePic">
                <div
                  className="ratingProfImage"
                  style={{
                    backgroundImage: `url("${applicant?.User.profileImage}")`,
                  }}
                ></div>
                <div>{applicant?.User.username}</div>
              </div>
              <div className="applicationText">{applicant?.text}</div>
              <div className="applicantButtons">
                <button
                  onClick={(e) => {
                    openProfileModal(applicant.User.id);
                  }}
                >
                  See Profile
                </button>
                <button>Accept Player</button>
              </div>
            </div>
          ))}
        </div>
      )}
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
                  <NavLink to={`/profiles/${idx + 1}`}>{playerName}</NavLink>
                ))}
              </div>
              <div>
                {currentUserId === sessionInfo?.User?.id && (
                  <div
                    onClick={(e) => {
                      getApplicants();
                      setApplicantsModal(true);
                    }}
                  >
                    See applicants
                  </div>
                )}
                {currentUserId != sessionInfo?.User?.id && (
                  <div>
                    {sessionInfo.currentPlayers < sessionInfo.maxPlayers && (
                      <div className="buttonorReturn">CLICK HERE TO JOIN</div>
                    )}
                    {sessionInfo.currentPlayers >= sessionInfo.maxPlayers && (
                      <div>
                        This session is full. Click here to search for more
                        games
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Sessions;
