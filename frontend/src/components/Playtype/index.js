import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePlaytype } from "../../store/playtypes";

function Playtype() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePlaytype(id));
  }, [dispatch]);

  const playtype = useSelector((state) => {
    return state?.playtypes.playtype;
  });
  return (
    <div>
      {playtype && (
        <>
          <h1 className="playtypeHeader">{playtype.playtype}</h1>
          <div></div>
        </>
      )}
    </div>
  );
}

export default Playtype;
