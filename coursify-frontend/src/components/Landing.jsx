import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validation } from "../utils/validation";
import "../landing.css";
export function Landing() {
  const [switchCard, setSwitchCard] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [backendError, setBackendError] = useState("");
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  function HandleInputChange(event) {
    const { name, value } = event.target;
    setUser((p) => ({
      ...p,
      [name]: value,
    }));

    let errosCopy = { ...errors };
    const errorR = validation(name, value, errosCopy);
    console.log(errorR);
    setErrors(errorR);
  }

  async function Signup() {
    if (!user.email || !user.password || !user.name) {
      setBackendError("Please fill out all the fields");
    } else {
      try {
        let res
        if (!admin) {
         res = await axios.post("http://localhost:3001/users/signup", {
            name: user.name,
            email: user.email,
            password: user.password,
          });
        } else {
           res = await axios.post("http://localhost:3001/admin/signup", {
            name: user.name,
            email: user.email,
            password: user.password,
          });
        }
        if (res.status) {
            alert("User registered Successfully")
          setUser({ name: "", password: "", email: "" });
          
        } else {
          console.error("Error adding in Db");
        }
      } catch (error) {
        setBackendError(
          error.response?.data?.message || error.message || "Unknown error"
        );
        console.error(error);
      }
    }
  }
  async function Signin() {
    if (!user.email || !user.password) {
      setBackendError("Please fill out all the fields");
    } else {
        try {
            let res;
            console.log(admin)
      if (!admin) {
         res = await axios.post(
          "http://localhost:3001/users/login",
          {
  
              email: user.email,
              password: user.password,

          }
        );
      } else {
        res = await axios.post(
          "http://localhost:3001/admin/login",
          {
              email: user.email,
              password: user.password,
          }
        );
      }
        if (res.status) {
          setUser({ name: "", password: "", email: "" });
          localStorage.setItem("token",res.data.token);
          if (!admin) {
            navigate("/user/home");
          } else {
            navigate("/admin/home");
          }
        } else {
          navigate("/");
        }
      } catch (error) {
        setBackendError(
          error.response?.data?.message || error.message || "Unknown error"
        );
        console.error(error);
      }
    }
  }

  if (switchCard) {
    return (
      <>
        <section className="hero">
          <div className="card-container">
            <div className="card-header">
              {(admin) ? <h4>Admin SignUp</h4> : <h4>User Signup</h4>}
            </div>
            <div className="card-content">
              <div className="formField">
                <p>Name</p>
                <div className="inputField">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={HandleInputChange}
                    required
                  />
                  <small>{errors.name}</small>
                </div>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={HandleInputChange}
                  required
                />
                <small>{errors.email}</small>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={HandleInputChange}
                />
                <small>{errors.password}</small>
              </div>
              <div className="card-footer">
                <button onClick={Signup} type="submit">
                  SignUp
                </button>
                <p>
                  Already Registered!
                  <span onClick={() => setSwitchCard(false)}>Login</span>
                </p>
                {admin ? (
                  <p>
                    User ?
                    <span onClick={() => setAdmin(false)}> SignUp</span>
                  </p>
                ) : (
                  <p>
                    Instructor ?
                    <span onClick={() => setAdmin(true)}> SignUp</span>
                  </p>
                )}

                <div className="errorDiv">{backendError}</div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="hero">
          <div className="card-container">
            <div className="card-header">
              {admin ? <h4>Admin SignIn</h4> : <h4>User SignIn</h4>}
            </div>
            <div className="card-content">
              <div className="formField">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={HandleInputChange}
                />
                <small>{errors.email}</small>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={HandleInputChange}
                />
                <small>{errors.password}</small>
              </div>
              <div className="card-footer">
                <button onClick={Signin}>SignIn</button>
                <p>
                  New User!
                  <span onClick={() => setSwitchCard(true)}>Register</span>
                </p>
                {admin ? (
                  <p>
                    User ?<span onClick={() => setAdmin(false)}> SignIn</span>
                  </p>
                ) : (
                  <p>
                    Instructor ?
                    <span onClick={() => setAdmin(true)}> SignIn</span>
                  </p>
                )}

                <div className="errorDiv">{backendError}</div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
