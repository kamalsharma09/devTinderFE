import {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {addUser} from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/const";

const Login = ()=> {

    const [email, setEmail] = useState("kamal@gmail.com");
    const [password, setPassword] = useState("Kamal123#");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
      try{
        const res = await axios.post(`${BASE_URL}/login`, {
          emailId: email,
          password:password
        },{ withCredentials: true });
        dispatch(addUser(res.data.data));
        if(res.status === 200) {
          navigate("/");
        }
      } catch(err) {
        setError(err.response.data);
      }
        
    }

    return(<>
    <div className="flex justify-center my-5">
        <div className="card card-border bg-base-300 w-96 shadow">
  <div className="card-body">
    <h1 className="text-2xl">Login</h1>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input" />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" />
</fieldset>
<p className="text-red-500">{error}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
    </div>
  </div>
</div>
    </>);
}
export default Login;