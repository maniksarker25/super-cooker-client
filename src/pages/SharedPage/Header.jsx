import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const user = null
  return (
    <div>
      <Navbar   fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Super Cook
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {
            user?<Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
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
