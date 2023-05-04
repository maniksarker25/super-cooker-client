import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const {createUser,logOut} = useContext(authContext)
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const { signInGoogle, signInGithub } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    setSuccess('');
     // validation
     if (password.length < 6) {
      setError("Password must have 6 character");
      return;
    }
    createUser(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      
      // update profile
      updateProfile(loggedUser,{
        displayName:name,photoURL:photoUrl
      })

      logOut()
      // navigate(from, { replace: true });
      navigate('/login')
      
      setSuccess('User Sign In Successfully')
      form.reset();
    })
    .catch(error=>{
      const errorMessage = error.message;
      setError(errorMessage)
    })
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
              required
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
              required
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
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <Button className="bg-orange-600 hover:bg-orange-700" type="submit">
            Registration
          </Button>
          <p className="text-center">
            Already you have an account?
            <Link className="text-orange-600 underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
