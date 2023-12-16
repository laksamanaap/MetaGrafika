import React, { useState } from "react";
import vr from "../img/vr.svg";
import scenery from "../img/scenery.svg";
import turtle from "../img/turtle.svg";
import Tilt from "react-parallax-tilt";
import tripleLine from "../img/3line.svg";
import curlArrow from "../img/curlyarrow.svg";

const Tab = ({ img, header, paragraph }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <Tilt>
          <div className="w-96 p-5 m-2 bg-white rounded-2xl shadow-lg">
            <img src={img} alt="vr" />
            <h1 className="text-start py-3 font-semibold text-xl text-secondary">
              {header}
            </h1>
            <p className="text-start">{paragraph}</p>
          </div>
        </Tilt>
      ) : (
        <div className="w-96 p-5 m-2 bg-white rounded-2xl shadow-lg">
          <img src={img} alt="vr" />
          <h1 className="text-start py-3 font-semibold text-xl text-secondary">
            {header}
          </h1>
          <p className="text-start">{paragraph}</p>
        </div>
      )}
    </div>
  );
};

const Benefits = () => {
  const tabsData = [
    {
      img: vr,
      header: "Virtual Reality",
      paragraph:
        "Nantinya, kamu dapat mencoba ruang digital ini menggunakan perangkat VR, seperti Oculus atau perangkat VR lainnya.",
    },
    {
      img: scenery,
      header: "Laut Digital",
      paragraph:
        "Menikmati keindahan wisata bahari tanpa perlu berkunjung langsung. Rasakan pengalaman yang menyenangkan di sini.",
    },
    {
      img: turtle,
      header: "Pelepasan Penyu",
      paragraph:
        "Alami keajaiban 'Pelepasan Penyu' bersama layanan kami! Segera pesan untuk nikmati pengalaman unik wisata bahari ini.",
    },
  ];
  return (
    <div className="container flex flex-col my-2">
      <div>
        <h1 className="text-4xl font-semibold mt-12">
          Apa yang kamu dapatkan nanti?
        </h1>
        <h1 className="my-4 mx-auto w-full md:w-3/4 xl:w-6/12 font-bold lg:font-normal">
          Menggali Keindahan Wisata Bahari: Persiapkan Diri untuk Keajaiban yang
          Menanti di Perjalanan Petualanganmu
        </h1>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center">
        <img
          src={tripleLine}
          className="justify-start w-16"
          alt="Triple Lines"
        />
        <img src={curlArrow} className="justify-end w-32" alt="Curl Arrow" />
      </div>
      <div className="flex flex-wrap justify-center my-10">
        {tabsData.map((tab, index) => (
          <Tab key={index} {...tab} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;