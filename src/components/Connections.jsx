import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/connectionsSlice";

const Connections = () => {
  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        dispatch(addConnections(res.data.data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-bold text-white text-3xl">Friends</h1>

        {connections?.length &&
          connections.map((user) => {
            const { _id,firstName, lastName, photoURL, age, gender, about } = user;
            return (
              <div className="w-1/2 mx-auto flex items-center bg-base-300 p-5 rounded-2xl my-3" key={_id}>
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
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Connections;
