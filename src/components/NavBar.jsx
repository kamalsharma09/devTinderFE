import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import BASE_URL from "../utils/const";
import { removeUser } from "../store/userSlice";

const NavBar = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
      try{
        const res = await axios.post(`${BASE_URL}/logout`,{},{withCredentials: true});
        if(res.status === 200) {
          dispatch(removeUser());
          navigate("/login");
        } 
      } catch(err) {
        console.error(err)
      }
  }

    return (
        <>
            <div className="navbar bg-base-300 shadow-sm sticky top-0">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  {user && <div className="flex-none">
    <span className="mx-3 my-2">Welcome, {user.firstName}</span>
    <div className="dropdown dropdown-end mr-4">
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        
        <div className="w-10 rounded-full">
          
          <img
            alt="User Photo"
            src={user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to="/connections" className="justify-between">
            Friends
          </Link>
        </li>
        <li>
          <Link to="/connectionRequests" className="justify-between">
            Requests
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><span>Logout</span></li>
      </ul>
    </div>
  </div>}
  
</div>
        </>
    );
}

export default NavBar;