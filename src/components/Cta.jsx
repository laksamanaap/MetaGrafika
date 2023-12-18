import React from "react";
import loket from "../img/loket.svg";
import intersect from "../img/intersect.svg";
import cover from "../img/cover-loket.jpg";

const Cta = () => {
  return (
    <div className="container mb-24 flex justify-center" id="cta">
      <section className="px-4 text-left lg:px-20">
        <div className="relative grid grid-cols-1 gap-5 overflow-hidden rounded-2xl bg-secondary px-7  py-5 md:grid-cols-2 md:px-14 md:py-5">
          <img
            src={intersect}
            alt="intersect.svg"
            className="absolute -top-6 h-2/3 rotate-12 md:-left-52 md:top-0 md:h-full md:rotate-0"
          />
          <div className="flex items-center text-white">
            <div>
              <h1 className="mb-2 text-3xl font-semibold md:mb-7 md:text-5xl">
                Tiket Menuju
                <br /> 3D Wisata Bahari
              </h1>
              <p className="text-slate-100">
                Dapatkan pengalaman menarik menjelajah wisata bahari dengan harga Rp. 20.000 secara digital melalui
                metaverse!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-full max-w-[25rem] rounded-xl bg-white p-5">
              <img src={cover} alt="cover-loket.jpg" className=" mb-2 aspect-video rounded-xl bg-slate-200" />
              <h2 className="text-xl font-semibold">Metaverse Wisata Bahari</h2>
              <p className="mb-2 text-slate-600">4 - 30 Desember</p>
              <button className="relative flex w-full items-center justify-center rounded-lg border border-b-2 border-primary py-2 transition duration-300 hover:bg-accent">
                <div className="flex items-center gap-4">
                  <img src={loket} className="h-8 w-8 md:h-10 md:w-10" alt="loket.svg" />
                  <p className="text-sm font-medium md:text-base">Beli Sekarang</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
