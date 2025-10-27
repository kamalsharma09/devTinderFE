import { useSelector } from "react-redux";

const NavBar = () => {

  const user = useSelector((state) => state.user);

    return (
        <>
            <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">DevTinder</a>
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
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>}
  
</div>
        </>
    );
}

export default NavBar;