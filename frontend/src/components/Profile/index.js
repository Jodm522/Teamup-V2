import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadOneProfile } from "../../store/profile";
import "./Profile.css";


function Profile() {
  const {id} = useParams();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(loadOneProfile(id));
  }, [dispatch]);

const sessionInfo = useSelector((state)=>{
  return state.session
})




return (
 <div> hello</div>
)}
export default Profile