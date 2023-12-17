import React from "react";
import logo from "../../img/Metagrafika.svg";
import ig from "../../img/IG.svg";
import fb from "../../img/FB.svg";
import yt from "../../img/YT.svg";
import twt from "../../img/X.svg";
import arrow from "../../img/Arrow.svg";

const Footer = () => {
  return (
    <div>
      <div className="container lg:px-20 flex justify-between items-center m-5 mx-auto">
        <div className="w-1/3">
          <p className="hidden lg:block text-3xl text-left text-primary font-bold mr-auto">Explore lebih jauh</p>
          <p className="hidden lg:block text-3xl text-left text-primary font-bold">tentang kami</p>
        </div>
        <div className="w-auto">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img className="shrink-1" src={logo} alt="logo" />
            </div>
            <div className="flex gap-2 mx-auto">
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300">
                <img className="shrink-1" src={ig} alt="ig" />
              </a>
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300">
                <img className="shrink-1" src={fb} alt="fb" />
              </a>
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300">
                <img className="shrink-1" src={yt} alt="yt" />
              </a>
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300">
                <img className="shrink-1" src={twt} alt="x" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img className="shrink-1 hidden lg:block ml-auto" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="bg-secondary p-5 flex flex-col justify-center items-center">
        <p className="text-center text-white">Copyright © Metagrafika. All Rights Reseved.</p>
      </div>
    </div>
  );
};

export default Footer;
