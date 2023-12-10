import React from "react";
import loket from "../img/loket.png";
import intersect from "../img/intersect.png";

function Cta() {
  return (
    <div className="flex justify-center" id="cta">
      <section className="container px-4 lg:px-20 text-left">
        <div className="relative bg-secondary rounded-2xl overflow-hidden grid gap-5 grid-cols-1 md:grid-cols-2  px-7 py-5 md:px-14 md:py-10">
          <img src={intersect} alt="intersect.png" className="absolute h-2/3 md:h-full -top-6 md:top-0 md:rotate-0 rotate-12 md:-left-52" />
          <div className="text-white flex items-center">
            <div>
              <h1 className="font-semibold text-3xl md:text-5xl mb-2 md:mb-7">
                Tiket Menuju
                <br /> 3D Wisata Bahari
              </h1>
              <p className="text-slate-100">Dapatkan pengalaman menarik menjelajah wisata bahari dengan harga Rp. 20.000 secara digital melalui metaverse!</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="rounded-xl max-w-[25rem] bg-white p-5 w-full">
              <div className=" rounded-xl aspect-video bg-slate-200 mb-2"></div>
              <h2 className="font-semibold text-xl">Metaverse Wisata Bahari</h2>
              <p className="text-slate-600 mb-2">4 - 30 Desember</p>
              <button className="flex items-center justify-center w-full border border-b-2 border-primary rounded-lg py-2 hover:bg-accent transition duration-300">
                <div className="flex items-center gap-4">
                  <img src={loket} className="w-8 h-8 md:w-10 md:h-10" alt="loket.png" />
                  <p className="font-medium text-sm md:text-base">Beli Sekarang</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;