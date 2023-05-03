import { Avatar, Dropdown, Navbar, Progress, Spinner } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";

const Header = () => {
    const {user,logOut,loading} = useContext(authContext);
    // console.log(user)
    // handle sign out
    const handleSignOut = ()=>{
      logOut()
      .then()
      .catch()
    }
  return (
    <div className="max-w-screen-xl mt-2 mx-auto lg:px-16">
      <Navbar   fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Super Cook
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {
            loading? <Spinner
            color="failure"
            aria-label="Failure spinner example"
          />:
            user?<Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={user?.photoURL}
                title={user?.displayName}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>:<Link to='/login'><button className="bg-orange-600 px-6 py-2 rounded-md text-white font-semibold ">Login</button></Link>
          }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/blog'>Blog</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/about'>About</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
