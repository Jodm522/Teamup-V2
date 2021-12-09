import { csrfFetch } from "./csrf";

const LOAD_ONE = "/profile/loadOne"

const loadOne=(profile)=>({
type: LOAD_ONE,
profile
})   

export const loadOneProfile = (profId) => async (dispatch)=>{
    const res = await csrfFetch(`/api/profiles/${profId}`)
    if (res.ok){
        const profile= await res.json();
        dispatch(loadOne(profile))
    }
}

const initialState={profile:[]}
const profilesReducer = (state=initialState, action)=>{
    switch (action.type){
        case LOAD_ONE:{
            const profile=action.profile
            return {profile}
        }
        default:
      return state;
    }
}
export default profilesReducer