import React from "react";
import "./PeopleSays.css";
import people1 from "../../../assets/people1.jpg";
import people2 from "../../../assets/people2.jpg";
import people3 from "../../../assets/people3.jpg";

const PeopleSays = () => {
  return (
    <div className="my-12">
      <h2 className="mt-6 text-center font-semibold text-4xl">
        What People Say About Us?
      </h2>
      <div className="mt-6 bg-img px-24 flex items-center ">
        <div className="flex gap-6">
          <div className="bg-white rounded-sm p-2 relative shadow-lg">
            <img
              className="w-16 rounded-full h-16 absolute -top-6 -left-4"
              src={people1}
              alt=""
            />
            <div className="p-8">
              <h5 className="text-2xl font-semibold">Nancy Nancy</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt error non vero, ipsam quae in qui cum numquam optio?
                Quia?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-sm p-2 relative shadow-lg">
            <img
              className="w-16 rounded-full h-16 absolute -top-6 -left-4"
              src={people2}
              alt=""
            />
            <div className="p-8">
              <h5 className="text-2xl font-semibold">Clark Brigid</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident distinctio sint magnam, veritatis error similique
                doloribus ipsa perspiciatis facilis fuga?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-sm p-2 relative shadow-lg">
            <img
              className="w-16 rounded-full h-16 absolute -top-6 -left-4"
              src={people3}
              alt=""
            />
            <div className="p-8">
              <h5 className="text-2xl font-semibold">Kevin Helmi</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                blanditiis et, corrupti eos ducimus saepe quibusdam eum aliquam
                itaque quam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSays;
