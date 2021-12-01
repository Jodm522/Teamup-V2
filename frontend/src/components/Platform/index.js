import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePlatform } from "../../store/platforms";

function Platform() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePlatform(id));
  }, [dispatch]);

  const platform = useSelector((state) => {
    return state?.platforms.platform;
  });
 
  return (
    <div>
      {platform && (
        <>
          <h1 className="platformHeader">{platform.platform}</h1>
          <div></div>
        </>
      )}
    </div>
  );
}

export default Platform;
