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
          <div className="m-2 rounded-2xl bg-white p-5 shadow-sm">
            <img src={img} alt="vr" />
            <h1 className="py-3 text-start text-xl font-semibold text-secondary">{header}</h1>
            <p className="text-start">{paragraph}</p>
          </div>
        </Tilt>
      ) : (
        <div className="m-2 rounded-2xl bg-white p-5">
          <img src={img} alt="vr" />
          <h1 className="py-3 text-start text-xl font-semibold text-secondary">{header}</h1>
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
    <div className="container my-2 flex flex-col overflow-hidden px-4 lg:px-20">
      <div className="relative mb-16">
        <div className="relative mx-auto w-max">
          <img src={tripleLine} className="absolute -left-16 -top-10 w-10" alt="Triple Lines" />
          <h1 className="mt-12 text-lg font-semibold md:text-4xl">Apa yang kamu dapatkan nanti?</h1>
        </div>
        <h2 className="mx-auto my-4 w-full md:w-3/4 lg:font-normal xl:w-6/12">
          Menggali Keindahan Wisata Bahari: Persiapkan Diri untuk Keajaiban yang Menanti di Perjalanan Petualanganmu
        </h2>
        <img
          src={curlArrow}
          className="absolute right-0 w-32 scale-75 justify-end md:scale-100 lg:-bottom-24 lg:right-36"
          alt="Curl Arrow"
        />
      </div>
      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {tabsData.map((tab, index) => (
          <Tab key={index} {...tab} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
