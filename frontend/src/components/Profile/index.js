import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRatings } from "../../store/ratings";
import { loadOneProfile } from "../../store/profile";
import { addProfileImage, addBannerImage } from "../../store/images";
import { submitRating } from "../../store/ratings";
import "./Profile.css";

function Profile() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);
  const [hasSubmittedRating, setHasSubmittedRating] = useState(0);
  const [ratingToSubmit, setRatingToSubmit] = useState(0);
  const [commentToSubmit, setCommentToSubmit] = useState("");
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [editImages, setEditImages] = useState(false);
  const calculateRating = () => {
    let initSum = 0;
    ratings?.forEach((rate) => {
      initSum += rate.rating;
    });
    setRating(Math.round((initSum / ratings.length) * 10) / 10);
  };
  useEffect(() => {
    dispatch(loadOneProfile(id));
    dispatch(getRatings(id));
  }, [dispatch, hasSubmittedRating]);

  const profileInfo = useSelector((state) => {
    return state.profiles?.profile;
  });

  const currentUserId = useSelector((state) => {
    return state.userSession?.user?.id;
  });
  const ratings = useSelector((state) => {
    return state.ratings?.ratings;
  });
  useEffect(() => {
    calculateRating();
  }, [ratings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfileImage({ id, image }));
    window.location.reload(false);
  };
  const handleRating = (e) => {
    e.preventDefault();
    let ratingNum = hasSubmittedRating;
    //console.log(ratingToSubmit, commentToSubmit, id, currentUserId);
    dispatch(submitRating(ratingToSubmit, commentToSubmit, id, currentUserId));
    ratingNum += 1;

    setHasSubmittedRating(ratingNum);
    setShowRatingModal(false);
  };
  const handleBannerSubmit = (e) => {
    e.preventDefault();
    dispatch(addBannerImage({ id, image }));
    window.location.reload(false);
  };
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div>
      <div className="profContainer">
        <div
          className="profHeader"
          style={{
            backgroundImage: `url("${profileInfo.bannerImage}")`,
          }}
        >
          <div className="profName">
            {profileInfo.username}{" "}
            {currentUserId == id && (
              <i
                className="fas fa-cog"
                onClick={(e) =>
                  editImages ? setEditImages(false) : setEditImages(true)
                }
              >
                {" "}
              </i>
            )}
          </div>

          <div
            className="profImage"
            style={{
              backgroundImage: `url("${profileInfo.profileImage}")`,
            }}
          ></div>
        </div>
        {editImages && (
          <div className="imageModal">
            <div className="closeButton">
              <i
                className="fas fa-times-circle"
                onClick={(e) => {
                  setEditImages(false);
                }}
              ></i>
            </div>
            <div className="editImageContainer">
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="file" onChange={updateFile} />
                </label>

                <button type="submit">Add prof image</button>
              </form>
              <form onSubmit={handleBannerSubmit}>
                <label>
                  <input type="file" onChange={updateFile} />
                </label>
                <button type="submit">Add banner image</button>
              </form>
            </div>
          </div>
        )}
        {showRatingModal && (
          <div className="RatingModal">
            <div className="rateModalTitle">Rate {profileInfo?.username}</div>
            <form onSubmit={handleRating}>
              <div className="ratingArea">
                <input
                  type="number"
                  min="1"
                  max="5"
                  onChange={(e) => setRatingToSubmit(e.target.value)}
                ></input>{" "}
                /5
              </div>
              <textarea
                className="textInput"
                onChange={(e) => setCommentToSubmit(e.target.value)}
                rows={5}
                maxLength={190}
              ></textarea>
              <button type="submit">Submit Rating</button>
            </form>
          </div>
        )}
        <div className="profInfo">
          <div className="bio">{profileInfo.bio}</div>

          {ratings?.length > 0 && (
            <div>
              <div className="ratingContainer">
                {/* <div className="ratingNum">{rating}/5</div> */}
                <div className="ratingStars">
                  {rating < 1 && (
                    <div>
                      <i class="fas fa-star-half-alt"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                  )}

                  <div>
                    {rating >= 1 && rating < 1.5 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 1.5 && rating < 2 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 2 && rating < 2.5 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 2.5 && rating < 3 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 3 && rating < 3.5 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 3.5 && rating < 4 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 4 && rating < 4.5 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating >= 4.5 && rating < 5 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    {rating === 5 && (
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentUserId != id && (
            <button onClick={(e) => setShowRatingModal(true)}>
              {" "}
              Rate {profileInfo?.username}
            </button>
          )}

          <div>What people are saying:</div>

          <div className="ratingsContainer">
            {ratings.map((rating) => (
              <div className="singleRatingContainer">
                <div className="ratingNamePic">
                  <div
                    className="ratingProfImage"
                    style={{
                      backgroundImage: `url("${rating.User.profileImage}")`,
                    }}
                  ></div>
                  <div>{rating.User.username}</div>
                </div>
                <div className="ratingText">
                  <div className="singleRatingnum">{rating.rating}/5</div>
                  <div>
                    {rating.text}
                    {/* {rating.text.length > 50
                      ? rating.text.slice(1, 50) + "..."
                      : rating.text} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <img
        style={{ width: "150px" }}
        src={profileInfo.profileImage}
        alt="profile"
      /> */}
      {/* <img
        style={{ width: "750px" }}
        src={profileInfo.bannerImage}
        alt="profile"
      /> */}
    </div>
  );
}
export default Profile;
