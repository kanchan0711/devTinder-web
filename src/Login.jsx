import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";  
import { useNavigate } from "react-router-dom";

  

const Login = () => {
    const [emailId, setEmailId] = useState("anjali@gmail.com")
    const [password, setPassword] = useState("Anjali@123")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogin = async() => {
        try {
            const res = await axios.post("http://localhost:7777/login",{
                emailId,
                password
            },
        {withCredentials: true})
        console.log(res)
        dispatch(addUser(res.data?.data))
            return navigate("/feed")
        } catch (error) {
            console.error(error)
        }
    }
     return(
        <div className="h-[70vh] w-full flex justify-center align-middle items-center">
        <div  className="flex justify-center  bg-base-200 p-5 rounded-lg ">
            
            <fieldset className=" fieldset  realtive  flex flex-col justify-center align-middle ">
                <legend className="font-bold">Email Id</legend>
                <input type="text" className="input"  
                onChange={(e) => setEmailId(e.target.value)}/>
                <legend className="font-bold">Password</legend>
                <input type="text" className="input"  
                onChange={(e) => setPassword(e.target.value)}/>

                <button className="btn btn-primary  mt-2 py-1"
                onClick={handleLogin}>Login</button>

            </fieldset>
        </div>
        </div>
    )
}
export default Login;