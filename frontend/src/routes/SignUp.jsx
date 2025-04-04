import React, { useState, useEffect } from "react";
import { register } from "../endpoints/Api";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    console.log("Form Data Changed:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_pic") {
      setFormData({ ...formData, profile_pic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    const result = await register(formData);

    if (result.error) {
      alert(`Registration failed: ${result.error}`);
    } else {
      alert(`Registration successful! User ID: ${result.user_id}`);
      console.log(result);
    }
  };

  return (
    <>
    <div className="bg-fuchsia-950">
    <div className ="flex flex-row-reverse min-h-screen items-center justify-center">
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-r-3xl shadow-lg w-120 h-145">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <label className="block mb-2">Username *</label>
        <input type="text" name="username" required onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2">Email *</label>
        <input type="email" name="email" required onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2">Password *</label>
        <input type="password" name="password" required onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2">Confirm Password *</label>
        <input type="password" name="confirm_password" required onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-5">Submit</button>

        <div className="relative w-full flex justify-center">
          <div className="absolute w-3/4 border-t border-gray-900"></div>
        </div>
        <h3 className="text-2xl font-semibold mt-1 text-center text-black">or</h3>
        <h3 className="text-2xl font-semibold mt-3 text-center text-black">alrerady have an account? <a className="text-blue-500" href="/login">Login</a></h3>
      </form>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 ">
          <div className="bg-[url('/Images/bg-img.png')] p-6 rounded-l-3xl shadow-md w-130 h-145 bg-[length:520px_650px] bg-no-repeat">
            <div className="flex items-center">
              <img src="/Images/ALGO_TECH.png" alt="ALGO_TECH" className="rounded-full m-5 w-20 h-20"></img>
              <span className="text-3xl font-bold text-white h-font">BLIXs</span>
            </div>
            <h2 className="text-5xl font-semibold mt-28 text-center text-white h-font">Welcome Page</h2>
            <h3 className="text-2xl font-semibold text-center mt-40 text-white">Create your account now<br/>to enjoy exciting world of Blixs</h3>
          </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Signup;
