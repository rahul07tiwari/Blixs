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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
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
        <h3 className="text-2xl font-semibold mt-3 text-center text-black">or</h3>
        <h3 className="text-2xl font-semibold mt-5 text-center text-black">alrerady have an account? <a className="text-blue-500" href="/login">Login</a></h3>
      </form>
    </div>
  );
};

export default Signup;
