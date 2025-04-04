import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login_try } from "../endpoints/Api";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/useAuth";

// import {login_try} from "../endpoints/api";
//import "../App.css"


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { login_user } = useAuth();

  


  const handleLogin = async () => {
    if (!username || !password) {
      alert("Username and password cannot be empty!");
      return;
    }
    try {
      const success = await login_try(username, password);
      if (success){
        alert("Login Success!")
      }else{
        alert("Login Failed!")
      }
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="bg-fuchsia-950">
      <div className="flex flex-row-reverse min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-900">
          <div className="bg-white p-6 rounded-r-3xl mr-50  shadow-md w-120 h-140">
            <h2 className="text-5xl font-semibold mt-20 mb-10 text-center h-font text-black">BLIXs</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="flex flex-col mt-10"
            >

              <input
                id="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                className="ml-10 mr-10 text-black  border-2 border-gray-800 p-3 rounded mb-4"
              />

          
              <input
                id="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="ml-10 mr-10 text-black border-2 border-gray-800 p-3 rounded mb-4"
              />
              <h3 className=" text-end mr-10 text-black"><a href="#">Forgot password?</a></h3>
              <button 
                type="submit" 
                className="bg-blue-500 text-white text-2xl p-3 mr-10 ml-10 mb-10 mt-5 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
              <div className="relative w-full flex justify-center">
                <div className="absolute w-3/4 border-t border-gray-500"></div>
              </div>
              <h3 className="text-2xl font-semibold mt-1 text-center text-black">or</h3>
              <h3 className="text-2xl font-semibold mt-1 text-center text-black">Don't have an account? <a className="text-blue-500" href="/signup">Sign up</a></h3>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 ">
          <div className="bg-[url('/Images/bg-img.png')] p-6 rounded-l-3xl shadow-md w-130 h-140 bg-[length:520px_650px] bg-no-repeat">
            <div className="flex items-center">
              <img src="/Images/ALGO_TECH.png" alt="ALGO_TECH" className="rounded-full m-5 w-20 h-20"></img>
              <span className="text-3xl font-bold text-white h-font">BLIXs</span>
            </div>
            <h2 className="text-5xl font-semibold mt-28 text-center text-white h-font">Welcome Page</h2>
            <h3 className="text-2xl font-semibold text-center mt-40 text-white">sign in to <br/> continue access</h3>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
