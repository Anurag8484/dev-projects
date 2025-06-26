import { useState } from "react";
import "../landing.css";
export function Landing() {
  const [switchCard, setSwitchCard] = useState(true);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  function HandleInputChange(event) {
    const {name,value} = event.target;
    
  }

  async function Signup() {}
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
              <p>Name</p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={HandleInputChange}
              />
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={HandleInputChange}
              />
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={HandleInputChange}
              />
            </div>
            <div className="card-footer">
              <button>SignUp</button>
              <p>
                Already Registered!{" "}
                <span onClick={() => setSwitchCard(false)}>Login</span>
              </p>
              <div className="errorDiv">Invalid Credentials</div>
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
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={HandleInputChange}
              />
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={HandleInputChange}
              />
            </div>
            <div className="card-footer">
              <button>SignIn</button>
              <p>
                New User?{" "}
                <span onClick={() => setSwitchCard(true)}>SignUp</span>
              </p>
              <div className="errorDiv">Invalid Credentials</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
