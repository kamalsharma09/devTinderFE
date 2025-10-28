import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUser} from "../store/userSlice";
import UserCard from "./UserCard";
import BASE_URL from "../utils/const";
import axios from "axios";

const Profile = ()=> {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);

    const [userProfile, setUserProfile] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        photoURL: user.photoURL,
        age: user.age,
        gender: user.gender,
        about: user.about
    });

    useEffect(() => {
    if (user) {
      setUserProfile({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        photoURL: user.photoURL || "",
        age: user.age || "",
        gender: user.gender || "",
        about: user.about || "",
      });
    }
  }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveChanges = async () => {
        try{
        const res = await axios.patch(`${BASE_URL}/profile/edit`, userProfile, {withCredentials: true});

        if(res.status === 200) {
            dispatch(addUser(res.data.data));
            setSuccess(true)

            setTimeout(() => {
                setSuccess(false);
            }, 5000)
        }

        } catch(err) {
            console.error(err)
        }
    }

    if (!user) return <p>Loading profile...</p>;


    return (
        <>
            {user && <div className="flex justify-center my-15 gap-15">
        <div className="card card-border bg-base-300 w-96 shadow">
  <div className="card-body">
    <h1 className="text-2xl">Update Profile</h1>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">First Name</legend>
  <input type="text" name="firstName" value={userProfile.firstName} onChange={handleChange} className="input" />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Last Name</legend>
  <input type="text" name="lastName" value={userProfile.lastName} onChange={handleChange} className="input" />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" name="photoURL" value={userProfile.photoURL} onChange={handleChange} className="input" />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Age</legend>
  <input type="text" name="age" value={userProfile.age} onChange={handleChange} className="input" />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select value={userProfile.gender} name="gender" onChange={handleChange} className="select">
    <option disabled={true}>Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">About</legend>
  <textarea className="textarea h-24" name="about" onChange={handleChange} placeholder="Bio" value={userProfile.about}></textarea>
</fieldset>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
    </div>
    </div>
  </div>

  <UserCard feed={userProfile} />
</div>}

{success &&
<div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Profile updated successfully.</span>
  </div>
</div>}
        </>
    );
}
export default Profile;