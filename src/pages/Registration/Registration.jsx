import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Registration = () => {
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, password, email);
  };
  const { signInGoogle, signInGithub } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

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
        // console.log(errorMessage)
      });
  };
  // github sign in
  const handleGithubSignIn = () => {
    signInGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .then((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="lg:w-1/2 mx-auto mt-16 px-6 border py-4">
        <h2 className="text-center text-3xl font-semibold my-6">
          Please Registration
        </h2>
        <form onSubmit={handleRegistration} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="PhotoUrl" />
            </div>
            <TextInput
              id="photUrl"
              type="text"
              name="photoUrl"
              placeholder="Photo Url"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email "
              placeholder="Your Email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" />
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
            <Label htmlFor="remember">Accept term & conditions</Label>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700" type="submit">
            Submit
          </Button>
          <p className="text-center">
            Already you have an account?
            <Link className="text-orange-600 underline" to="/login">
              Login
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

export default Registration;
