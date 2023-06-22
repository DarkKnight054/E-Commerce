"use client";
import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import "./registration.css";
function Registration() {
  const [showPass, setShowPass] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const submitRegistrationForm = async (e) => {
    e.preventDefault();
    const userCredential = {};
    userCredential["name"] = e.target.name.value;
    userCredential["contactNo"] = e.target.contact.value;
    userCredential["location"] = e.target.location.value;
    userCredential["email"] = e.target.email.value;
    userCredential["password"] = e.target.password.value;
    userCredential["remember"] = e.target.remember.value === "on";
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/users/register`,
        userCredential
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="signup">
      <div className="content">
        <form
          className="flex flex-col gap-2"
          style={{ margin: "auto", width: "85%" }}
          onSubmit={submitRegistrationForm}
        >
          <h1 className="mb-2 block text-xl font-mono text-emerald-200	">
            Welcome! Sign Up & Buy best products. 😊
          </h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              placeholder="Enter Username"
              required
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="contact" value="Your Contact Number" />
            </div>
            <TextInput
              id="contact"
              placeholder="Enter contact no"
              required
              type="number"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="location" value="Your Location" />
            </div>
            <TextInput
              id="location"
              placeholder="Enter Location"
              required
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              required
              type={showPass ? "text" : "password"}
            />
          </div>
          <label class="relative inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              onClick={togglePasswordVisibility}
            />
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              show password
            </span>
          </label>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
export default Registration;
