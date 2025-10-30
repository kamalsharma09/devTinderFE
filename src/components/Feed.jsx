import {useEffect} from "react";
import axios from "axios";
import UserCard from "./UserCard";
import BASE_URL from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";

const Feed = () => {
    const feed = useSelector((state) => state.feed);
    const dispatch = useDispatch();

    const handleFeedAPI = async () => {
        try{
            const res = await axios.get(`${BASE_URL}/feed`, {withCredentials: true});
            if(res.status === 200){
                dispatch(addFeed(res?.data));
            }
        } catch(err) {

        }
    }

    useEffect(() => {
        handleFeedAPI();
    }, []);

    if(feed?.length <= 0) return <h1 className="text-center text-3xl my-5">No new user avialable !!</h1>

    return (
        <>
            <div className="flex justify-center my-5">
            {feed?.length && <UserCard feed={feed[0]} />}
            </div>
        </>
    );
}

export default Feed;