import React from 'react';
import heroImage from "../img/tropicalIsland.png";
import heroCta from "../img/heroCta.png";

function Hero() {
  return(
    <div className="my-2 lg:my-10 mx-4">
      <div className="text-start my-2 hidden lg:block">
        <a href="#link" className="inline-block">
          <p className="w-fit text-primary font-semibold tracking-wide">#GRAFIKA4META</p>
        </a>
      </div>
      <div className="flex flex-col my-2 mt-4">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-hero-background opacity-50 bg-cover bg-no-repeat bg-bottom lg:hidden"></div>

        It was supposed to add background to the text in hero section for mobile devices, but it looks better without it I think.
        - Adi

        */}
        <div className="md:flex md:flex-row md:justify-between md:items-center my-1">
          <p className="md:justify-start text-black text-3xl lg:text-6xl text-center lg:text-start font-bold tracking-widest space-y-2">PESONA LAUT WISATA BAHARI DALAM 3D!</p>
          <div className="w-full justify-center hidden md:flex">
            <a href="#link">
              <img src={heroCta} alt="Hero CTA" className="justify-end shrink-0 w-24 lg:w-40 hover:scale-110 active:border-4 active:rounded-full transition duration-300" />
            </a>
          </div>
        </div>
        <hr className="border border-secondary"></hr>
        <div className="flex flex-col lg:flex-row lg:justify-between my-2">
          <p className="m-2 text-center lg:text-start font-bold lg:font-normal lg:justify-start">Mengalami keajaiban dalam 3D, petualangan yang memukau yang mempersembahkan keindahan laut secara visual dan mendalam</p>
          <p className="m-2 text-center lg:text-start font-bold lg:font-normal lg:justify-end">Rasakan keindahan laut secara visual. Tiket terbatas, jadi segera dapatkan pengalaman istimewa ini!</p>
        </div>
        <div className="text-start my-2 block lg:hidden">
          <a href="#link" className="block">
            <p className="text-primary text-center font-semibold tracking-wide">#GRAFIKA4META</p>
          </a>
        </div>
        <div className="text-center my-1">
          <img src={heroImage} alt="Hero" className="w-full hidden md:block" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
