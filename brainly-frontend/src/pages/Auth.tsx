import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";

export function Auth() {
  const [islogin, setIsLogin] = useState(true);

  if (islogin) {
    return (
      <div className="h-screen w-screen bg-[#F9FBFC] flex justify-center items-center">
        <div className="bg-white  p-10 space-y-2 rounded-xl min-w-48 outline-[#E6E8EA] outline-1 shadow-lg">
          <div className="flex justify-center text-xl font-bold mb-5">
            <h1>SignIn</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <Input placeholder="Username" onChange={() => {}} />
            <Input placeholder="Password" onChange={() => {}} />
          </div>
          <div className=" flex  justify-center ">
            <Button
              variant="secondary"
              moreStyles="outline-1 mt-2"
              size="lg"
              text="SignIn"
              onClick={() => {}}
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
            <Input placeholder="Username" onChange={() => {}} />
            <Input placeholder="Password" onChange={() => {}} />
          </div>
          <div className=" flex  justify-center ">
            <Button
              variant="secondary"
              moreStyles="outline-1 mt-2"
              size="lg"
              text="Signup"
              onClick={() => {}}
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
