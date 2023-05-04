import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signInGoogle, signInGithub,logInWithEmailPassword} = useContext(authContext);
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // login with email password
  const handleLogIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    setSuccess('');
    logInWithEmailPassword(email,password)
    .then(result=>{
      const loggedUser = result.user;
      // console.log(loggedUser)
      navigate(from, { replace: true });
      setSuccess('User Login Successfully');
      form.reset();
    })
    .catch(error=>{
      const errorMessage = error.message;
      console.log(errorMessage)
      setError(errorMessage)
    })
    

  }

  // google sign in
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        // console.log(loggedUser)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };
  // github sign in
  const handleGithubSignIn = () => {
    signInGithub()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });

      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="mt-16 lg:w-1/2 mx-auto px-6 border py-6">
        <h2 className="text-center text-3xl font-semibold my-6">
          Please Login
        </h2>
        <form onSubmit={handleLogIn} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
         {error &&  <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
            Login
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
          <button
            onClick={handleGoogleSignIn}
            className="bg-orange-600 px-8 py-2 flex items-center gap-2 rounded-md  text-white"
          >
            <FaGoogle />
            Continue With Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="bg-orange-600 px-8 py-2 mt-2 flex items-center gap-2 rounded-md text-white"
          >
            <FaGithub /> Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
