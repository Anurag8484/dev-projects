import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validation } from "../utils/validation";
import "../landing.css";
export function Landing() {
  const [switchCard, setSwitchCard] = useState(true);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [validCred, setValidCred] = useState(true);
  const navigate = useNavigate();

  function HandleInputChange(event) {
    const { name, value } = event.target;
    setUser((p) => ({
      ...p,
      [name]: value,
    }));

    let errosCopy = { ...errors };
    const errorR = validation(name, value, errosCopy);
    console.log(errorR)
    setErrors(errorR);
  }

  async function Signup() {
    try {
      const res = await axios.post("http://localhost:3001/users/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
      });
      if (res.status) {
        setUser({name:'',password:'',email:''})
        navigate("/home");
      } else {
      }
    } catch (error) {
        console.error(error)
    }
  }
  async function Signin() {}

  if (switchCard) {
    return (
      <>
        <section className="hero">
          <div className="card-container">
            <div className="card-header">
              <h4>SignUp</h4>
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
                  />
                  <small>{errors.name}</small>
                </div>
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
                <button onClick={Signup}>SignUp</button>
                <p>
                  Already Registered!{" "}
                  <span onClick={() => setSwitchCard(false)}>Login</span>
                </p>

                {!validCred ? (
                  <div className="errorDiv">Invalid Credentials</div>
                ) : (
                  ""
                )}
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
              <h4>SignIn</h4>
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
                  New User!{" "}
                  <span onClick={() => setSwitchCard(true)}>Register</span>
                </p>

                {!validCred ? (
                  <div className="errorDiv">Invalid Credentials</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
