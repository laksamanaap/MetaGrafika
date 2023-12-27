import React from "react";
import logo from "../../img/Metagrafika.svg";
import ig from "../../img/IG.svg";
// import fb from "../../img/FB.svg";
// import yt from "../../img/YT.svg";
// import twt from "../../img/X.svg";
import arrow from "../../img/Arrow.svg";

const Footer = () => {
  return (
    <div>
      <div className="container m-5 mx-auto flex flex-col items-center gap-10 sm:flex-row sm:justify-between lg:px-20">
        <div className="text-center sm:w-1/3 sm:text-start hidden md:block">
          <p className="block text-3xl font-bold text-primary">Explore lebih jauh</p>
          <p className="block text-3xl font-bold text-primary">tentang kami</p>
        </div>
        <div className="w-auto">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img className="shrink-1" src={logo} alt="logo" />
            </div>
            <div className="mx-auto flex gap-2">
              <p className="m-auto font-normal text-lg">Ikuti kami di: </p>
              <a href="https://www.instagram.com/metaversegrafika?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" className="my-2 rounded-full transition duration-300 hover:bg-accent">
                <img className="shrink-1" src={ig} alt="ig" />
              </a>
              {/* <a href="#link" className="my-2 rounded-full transition duration-300 hover:bg-accent">
                <img className="shrink-1" src={fb} alt="fb" />
              </a>
              <a href="#link" className="my-2 rounded-full transition duration-300 hover:bg-accent">
                <img className="shrink-1" src={yt} alt="yt" />
              </a>
              <a href="#link" className="my-2 rounded-full transition duration-300 hover:bg-accent">
                <img className="shrink-1" src={twt} alt="x" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img className="shrink-1 ml-auto hidden md:block" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-secondary p-5">
        <p className="text-center text-white">Copyright © Metagrafika. All Rights Reseved.</p>
      </div>
    </div>
  );
};

export default Footer;
