import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="lg:w-1/2 mx-auto mt-16 px-6">
        <h2 className="text-center text-3xl font-semibold my-6">Please Registration</h2>
      <form className="flex flex-col gap-4">
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
          <TextInput id="password1" type="password" placeholder="Your Password" required={true} />
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
