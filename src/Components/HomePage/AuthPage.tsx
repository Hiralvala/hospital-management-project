"use client"
import React, { useState } from "react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: "patient",
  });

  // const handleRegisterChange = (e:any) => {
  //   setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  // };

  // const handleLoginChange = (e:any) => {
  //   setLoginData({ ...loginData, [e.target.name]: e.target.value });
  // };

  // const handleRegisterSubmit = (e:any) => {
  //   e.preventDefault();
  //   if (registerData.password !== registerData.confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }
  //   console.log("Registration data:", registerData);
  //   alert("Registration successful!");
  // };

  // const handleLoginSubmit = (e:any) => {
  //   e.preventDefault();
  //   console.log("Login data:", loginData);
  //   alert("Login successful!");
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center py-12 px-4 w-screen">
      <div className="max-w-2xl w-full space-y-8 bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 text-white py-6 text-center text-3xl font-extrabold tracking-tight">
          Account Access
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-around text-gray-600 bg-gray-50 border-b border-gray-300">
          <button
            onClick={() => setActiveTab("login")}
            className={`group px-6 py-4 w-1/2 font-medium focus:outline-none relative transition-colors duration-200
              ${activeTab === "login" ? "text-blue-700 bg-blue-50" : "hover:text-blue-700 hover:bg-blue-50"}`}
          >
            Login
            <span className={`absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded-t-md transition-transform duration-300 scale-x-0 ${activeTab === "login" ? "scale-x-100" : ""}`}></span>
          </button>

          <button
            onClick={() => setActiveTab("register")}
            className={`group px-6 py-4 w-1/2 font-medium focus:outline-none relative transition-colors duration-200
              ${activeTab === "register" ? "text-blue-700 bg-blue-50" : "hover:text-blue-700 hover:bg-blue-50"}`}
          >
            Register
            <span className={`absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded-t-md transition-transform duration-300 scale-x-0 ${activeTab === "register" ? "scale-x-100" : ""}`}></span>
          </button>
        </div>

        {/* Forms */}
        <div className="p-8 grid grid-cols-1 gap-8">
          {/* Login Form */}
          {activeTab === "login" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Welcome Back!</h2>
              <form 
              // onSubmit={handleLoginSubmit} 
              className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your Username"
                    // onChange={handleLoginChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your Password"
                    // onChange={handleLoginChange}
                  />
                </div>
                <div>
                  <label htmlFor="roleLogin" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    id="roleLogin"
                    name="role"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={loginData.role}
                    // onChange={handleLoginChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="receptionist">Receptionist</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>
              <form 
              // onSubmit={handleRegisterSubmit} 
              className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your Name"
                    // onChange={handleRegisterChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your Email"
                    // onChange={handleRegisterChange}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your Phone Number"
                    // onChange={handleRegisterChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your Password"
                    // onChange={handleRegisterChange}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Confirm Your Password"
                    // onChange={handleRegisterChange}
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={registerData.role}
                    // onChange={handleRegisterChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="receptionist">Receptionist</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;