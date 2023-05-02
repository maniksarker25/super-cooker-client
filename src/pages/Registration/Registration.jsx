import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    
  const handleRegistration = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photoUrl,password,email)
  }
  return (
    <div className="lg:w-1/2 mx-auto mt-16 px-6 border py-4">
        <h2 className="text-center text-3xl font-semibold my-6">Please Registration</h2>
      <form onSubmit={handleRegistration} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name"  />
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
            <Label htmlFor="PhotoUrl"  />
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
            <Label htmlFor="password"/>
          </div>
          <TextInput id="password" type="password" name="password" placeholder="Your Password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Accept term & conditions</Label>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700" type="submit">Submit</Button>
        <p className="text-center">Already you have an account?<Link className="text-orange-600 underline" to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Registration;
