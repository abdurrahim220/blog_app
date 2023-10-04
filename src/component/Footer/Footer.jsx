import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex-col md:flex-row flex space-y-6 md:space-y-8 justify-between text-sm md:text-lg py-8">
        <div className="flex flex-col text-white">
          <p className="mb-2">Features</p>
          <p className="mb-2">Most viewed</p>
          <p className="mb-2">Reader Choice</p>
        </div>
        <div className="flex flex-col text-white">
          <p className="mb-2">Forum</p>
          <p className="mb-2">Support</p>
          <p className="mb-2">Recent Post</p>
        </div>
        <div className="flex flex-col text-white">
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">About us</p>
          <p className="mb-2">Terms & condition</p>
        </div>
      </div>
      <div>
        <p className="py-2 pb-6 text-center text-white bg-black text-sm">
          All rights reserved @Blog Market 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
