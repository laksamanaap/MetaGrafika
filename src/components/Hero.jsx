import React from "react";
import heroImage from "../img/tropicalIsland.svg";
import heroCta from "../img/heroCta.svg";
import RoundedButton from "./elements/RoundedButton";

const Hero = () => {
  return (
    <div className="container mx-auto my-2 lg:my-10" id="hero">
      <div className="text-start my-2 hidden lg:block">
        <a href="#link" className="inline-block">
          <p className="w-fit text-primary font-semibold tracking-wide">
            #GRAFIKA4META
          </p>
        </a>
      </div>
      <div className="flex flex-col my-2 mt-4">
        <div className="md:flex md:flex-row md:justify-between md:items-center mb-5">
          <p className="md:justify-start text-black text-3xl lg:text-6xl text-center lg:text-start font-bold tracking-widest space-y-2 w-full md:w-2/3">
            PESONA LAUT WISATA BAHARI DALAM 3D!
          </p>
          <div className="justify-center hidden md:flex">
            <RoundedButton roundedText={"EKSPLOR SEKARANG JUGA"} />
          </div>
        </div>
        <hr className="border border-secondary my-5"></hr>
        <div className="flex flex-col lg:flex-row lg:justify-between my-2">
          <p className="m-2 h-1/5 text-center lg:text-start font-bold lg:font-normal lg:justify-start">
            Mengalami keajaiban dalam 3D, petualangan yang memukau yang
            mempersembahkan keindahan laut secara visual dan mendalam
          </p>
          <p className="m-2 h-1/5 text-center lg:text-start font-bold lg:font-normal lg:justify-end">
            Rasakan keindahan laut secara visual. Tiket terbatas, jadi segera
            dapatkan pengalaman istimewa ini!
          </p>
        </div>
        <div className="text-start my-2 block lg:hidden">
          <a href="#link" className="block">
            <p className="text-primary text-center font-semibold tracking-wide">
              #GRAFIKA4META
            </p>
          </a>
        </div>
        <div className="text-center mt-20">
          <img src={heroImage} alt="Hero" className="w-full hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
