import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signInGoogle} = useContext(authContext)

  // google sign in 
  const handleGoogleSignIn = () =>{
      signInGoogle()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error=>{
        const errorMessage = error.message;
        console.log(errorMessage)
      })
  }
  return (
    <div>
      <div className="mt-16 lg:w-1/2 mx-auto px-6 border py-6">
        <h2 className="text-center text-3xl font-semibold my-6">
          Please Login
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Your Email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Your Password"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
            Submit
          </Button>
          <p className="text-center">
            New in Super Cooker?{" "}
            <Link className="text-orange-600 underline" to="/registration">
              Registration
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-6 lg:w-1/2 mx-auto lg:ps-24">
        <div className="flex items-center gap-2 my-4">
          <hr className=" w-1/2  lg:w-1/3 " />
          <span>or</span>
          <hr className=" w-1/2 lg:w-1/3 " />
        </div>
        <div className="lg:ps-16 ps-20">
          <button onClick={handleGoogleSignIn} className="bg-orange-600 px-8 py-2 flex items-center gap-2 rounded-md  text-white">
            <FaGoogle/>Continue With Google
          </button>
          <button className="bg-orange-600 px-8 py-2 mt-2 flex items-center gap-2 rounded-md text-white">
            <FaGithub/> Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
