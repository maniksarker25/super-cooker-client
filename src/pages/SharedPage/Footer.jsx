import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="p-6 border-2 rounded-lg mt-12 bg-black text-white">
        <div className="max-w-screen-xl mx-auto my-24 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:ps-8  gap-24  ">
            <div>
              <h5 className="text-3xl">Super Cook</h5>
              <input
                className="rounded-lg mt-16 text-black"
                type="email"
                placeholder="Your Email Address"
                required
              />
              <button className="bg-orange-600 py-2 mt-4 rounded-lg px-3">
                Subscribe Now
              </button>
            </div>
            <div>
              <h6>ABOUT</h6>
              <p className="mt-8">
                <Link>Super Cook</Link>
              </p>
              <p>
                <Link>Cheps</Link>
              </p>
            </div>
            <div>
              <h6>FOLLOW US</h6>
              <p className="mt-8">
                <Link>FaceBook</Link>
              </p>
              <p>
                <Link>Discord</Link>
              </p>
            </div>
            <div>
              <h6>LEGAL</h6>
              <p className="mt-8">
                <Link>Privacy Policy</Link>
              </p>
              <p>
                <Link>Terms & Conditions</Link>
              </p>
            </div>
          </div>
          <hr className="border-white mt-8" />
          <div className="flex mt-3 justify-between">
            <p>© 2023 SuperCook™</p>
            <div className="flex gap-6 mt-2">
              <Link>
                <FaFacebookSquare />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                {" "}
                <FaTwitter />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
