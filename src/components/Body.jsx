import {useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import BASE_URL from "../utils/const";
import { addUser } from "../store/userSlice";

const Body = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const handleAuth = async () => {
        try{
            const res = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true });
            dispatch(addUser(res.data.data));
        } catch (err) {
            if(err.status === 401) {
                navigator("/login");
            }
            console.error(err);
        }
    }

    useEffect(() => {
        if(!user){
            handleAuth();
        }
    }, []);

    return(<>
        <NavBar />
        <Outlet />
        <Footer />
    </>)
}
export default Body;