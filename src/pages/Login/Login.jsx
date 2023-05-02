import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-16 lg:w-1/2 mx-auto px-6'>
            <h2 className="text-center text-3xl font-semibold my-6">Please Login</h2>
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
          <TextInput id="password1" type="password" placeholder='Your Password' required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className='bg-orange-600 hover:bg-orange-700'>Submit</Button>
        <p className='text-center'>New in Super Cooker? <Link className='text-orange-600 underline' to='/registration'>Registration</Link></p>
      </form>
        </div>
    );
};

export default Login;