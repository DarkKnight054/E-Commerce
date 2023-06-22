import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
export const counterContext = React.createContext();
let userState = {
  name: "",
  email: "",
  password: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
      };
    case "logout":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
      };
    default:
      return userState;
  }
};

function App() {
  const [user, dispatchUser] = useReducer(userReducer, userState);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <counterContext.Provider
              value={{ user: user, setUser: dispatchUser }}
            >
              <Login />
            </counterContext.Provider>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
