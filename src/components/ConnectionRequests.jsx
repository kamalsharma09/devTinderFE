import { useEffect } from "react";
import BASE_URL from "../utils/const";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addConnectionRequest} from "../store/connectionRequestsSlice";

const ConnectionRequests = () => {
    const connectionRequest = useSelector((state) => state.connectionRequest);
    const dispatch = useDispatch();
    
    const fetchConnectionRequest = async () => {
        try{
        const res = await axios.get(`${BASE_URL}/user/request/received`,{withCredentials: true});
        if(res.status === 200) {
            dispatch(addConnectionRequest(res.data.data));
        }
    } catch(err) {
        console.error(err);
    }
    };

    useEffect(() => {
        fetchConnectionRequest();
    }, []);

    if(!connectionRequest) return;

    return (
        <>
            <div className="text-center my-10">
        <h1 className="text-bold text-white text-3xl">Friend Request</h1>

        {connectionRequest &&
          connectionRequest.map((user) => {
            const { firstName, lastName, photoURL, age, gender, about } = user.fromUserId;
            return (
              <div className="w-1/2 mx-auto flex items-center bg-base-300 p-5 rounded-2xl my-3">
                <div>
                  <img className="w-20 h-20 rounded-full" src={photoURL} />
                </div>
                <div className="text-left mx-4">
                  <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  {age && gender && `${age}, ${gender}`}
                  <p>{about}</p>
                </div>
                <div className="flex justify-end-safe w-100 gap-4">
                    <button className="btn btn-error">Reject</button>
                    <button className="btn btn-success">Accept</button>
                </div>
              </div>
            );
          })}
      </div>
        </>
    );
}

export default ConnectionRequests;