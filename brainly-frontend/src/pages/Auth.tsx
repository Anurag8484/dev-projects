import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const [islogin, setIsLogin] = useState(true);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function signup(){
    console.log("check 1");
    
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
       const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
          username,
          password
        })
        if (res.status === 200){
          alert("User Registered")
          setIsLogin(true);          

        }
    } catch (error) {
        alert("erorr registering User")
        console.error(error);
              
    }

  }
  async function signin(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
       const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
          username,
          password
        })
        if (res.status === 200){
          navigate('/home')          
          localStorage.setItem('token',res.data.token)

          alert("User Logged In")
        }
    } catch (error) {
        alert("erorr singin ing User")
        console.error(error);
              
    }

  }


  if (islogin) {
    return (
      <div className="h-screen w-screen bg-[#F9FBFC] flex justify-center items-center">
        <div className="bg-white  p-10 space-y-2 rounded-xl min-w-48 outline-[#E6E8EA] outline-1 shadow-lg">
          <div className="flex justify-center text-xl font-bold mb-5">
            <h1>SignIn</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <Input placeholder="Username" ref={usernameRef}  />
            <Input placeholder="Password" ref={passwordRef} />
          </div>
          <div className=" flex  justify-center ">
            <Button
              variant="secondary"
              moreStyles="outline-1 mt-2"
              size="lg"
              text="SignIn"
              onClick={signin}
            />
          </div>
          <div className="flex justify-center text-sm text-[#404451]">
            <span>
              Don't Have an account ?{" "}
              <span
                className="text-[15px] font-[500] cursor-pointer duration-200 hover:text-black"
                onClick={() => setIsLogin(false)}
              >
                SignUp
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-screen w-screen bg-[#F9FBFC] flex justify-center items-center">
        <div className="bg-white  p-10 space-y-2 rounded-xl min-w-48 outline-[#E6E8EA] outline-1 shadow-lg">
          <div className="flex justify-center text-xl font-bold mb-5">
            <h1>Signup</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <Input placeholder="Username" ref={usernameRef} />
            <Input placeholder="Password" ref={passwordRef} />
          </div>
          <div className=" flex  justify-center ">
            <Button
              variant="secondary"
              moreStyles="outline-1 mt-2"
              size="lg"
              text="Signup"
              onClick={signup}
            />
          </div>
          <div className="flex justify-center text-sm text-[#404451]">
            <span>
              Have an account ?{" "}
              <span
                className="text-[15px] font-[500] cursor-pointer duration-200 hover:text-black"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
