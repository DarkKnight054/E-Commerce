import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { counterContext } from "../../App";
import "./login.css";

function Login() {
  const userContext = useContext(counterContext);
  let userCredential = {
    email: "",
    password: "",
  };

  const [showPass, setShowPass] = useState(false);
  const submitLoginForm = async (e) => {
    e.preventDefault();
    userCredential = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/users/login`,
        userCredential
      );
      const { name, email, password } = response.data;
      userContext.setUser({
        type: "login",
        name: name,
        email: email,
        password: password,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="SignIn">
      <div className="content">
        <img src="/src/assets/sigin002.png" style={{ width: "50%" }} />
        <form
          className="flex flex-col gap-4"
          style={{ margin: "auto" }}
          onSubmit={submitLoginForm}
        >
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
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <NavLink
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
