import React from "react";
import logo from '../../img/Metagrafika.png';
import ig from '../../img/IG.png';
import fb from '../../img/FB.png';
import yt from '../../img/YT.png';
import twt from '../../img/X.png';
import arrow from '../../img/Arrow.png';

function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-4">
        <div className="justify-start">
          <p className="hidden lg:block text-3xl text-primary font-bold">Explore lebih jauh</p>
          <p className="hidden lg:block text-3xl text-primary font-bold">tentang kami</p>
        </div>
        <div className="justify-center">
          <div className="flex flex-col">
            <div>
              <img className="shrink-1" src={logo} alt="logo" />
            </div>
            <div className="flex flex-row">
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300"><img className="shrink-1" src={ig} alt="ig" /></a>
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300"><img className="shrink-1" src={fb} alt="fb" /></a>
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300"><img className="shrink-1" src={yt} alt="yt" /></a>
              <a href="#link" className="my-2 hover:bg-accent rounded-full transition duration-300"><img className="shrink-1" src={twt} alt="x" /></a>
            </div>
          </div>
        </div>
        <div className="justify-end">
          <img className="shrink-1 hidden lg:block" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="bg-secondary p-5 flex flex-col justify-center items-center">
        <p className="text-center text-white">Copyright © Metagrafika. All Rights Reseved.</p>
      </div>
    </div>
  );
}

export default Footer;