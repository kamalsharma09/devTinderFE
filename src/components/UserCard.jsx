import axios from "axios";
import BASE_URL from "../utils/const";
import { useDispatch } from "react-redux";
import {removeUserFromFeed} from "../store/feedSlice";

const UserCard = ({feed}) => {
  const dispatch = useDispatch();
  const {_id, firstName, lastName, about, photoURL, age, gender} = feed;

  const handleSendRequest = async (status, userId) => {
    try{
      const res = await axios.post(`${BASE_URL}/request/send/${status}/${userId}`, {}, {withCredentials: true});
      
      if(res.status === 200) {
        console.log(res, 'kamal')
        dispatch(removeUserFromFeed(userId));
      }
    } catch(err){
      console.error(err);
    }
  }

    return (
        <>
            <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoURL}
      alt="user profile pic" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
    {age && gender && <p>{age}, {gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-around mt-5">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored", _id)}>Ignored</button>
      <button className="btn text-white bg-green-700" onClick={()=>handleSendRequest("intrested", _id)}>Intrested</button>
    </div>
  </div>
</div>
        </>
    );
}
export default UserCard;