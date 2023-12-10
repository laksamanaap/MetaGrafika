import React from 'react';
import "../img/FAQbg.png";
import Accordion from "../components/elements/Accordion";

function Faq() {
  return (
    <>
      <div className="bg-faq-background bg-no-repeat bg-cover bg-top py-4">
        <div className="text-center">
          <p className="font-semibold text-black text-3xl">Frequently Asked Questions</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1px">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#0583D2" strokeWidth="1" />
          </svg>
          <p className="m-2 text-primary text-xl">FAQ</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1px">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#0583D2" strokeWidth="1" />
          </svg>
        </div>
        <Accordion
          header="Apa itu metaverse?"
          content="Metaverse adalah sebuah konsep dunia virtual yang terdiri dari ruang-ruang digital yang terhubung, di mana pengguna dapat berinteraksi dengan orang lain dan objek virtual dalam lingkungan yang imersif."
        />
        <Accordion
          header="Apa itu virtual reality?"
          content="Virtual Reality (VR) menawarkan pengalaman imersif bagi siapa saja yang dapat memakai headset. Ini memungkinkan siapa saja untuk melihat dan bekerja di dunia digital. Dengan headset VR lengkap, pengguna dapat terjun ke dunia virtual 360 derajat, tempat orang dapat bergerak dengan mudah."
        />
        <Accordion
          header="Bagaimana cara memesan layanan ini?"
          content="Untuk memesan layanan ini, silakan mengunjungi situs web kami dan menekan tombol 'Beli sekarang' pada tiket yang tertera di bawah website ini."
        />
        <Accordion
          header="Apa yang harus disiapkan untuk menggunakan layanan ini?"
          content="Untuk menggunakan layanan ini, Anda perlu memiliki perangkat VR yang kompatibel, seperti headset VR dan kontroler. Selain itu, pastikan Anda memiliki koneksi internet yang stabil dan cukup ruang kosong di sekitar Anda untuk bergerak dengan leluasa."
        />
        <Accordion
          header="Apakah saya bisa mengakses layanan ini tanpa VR?"
          content="Ya, Anda dapat mengakses layanan ini tanpa VR. Kami juga menyediakan versi non-VR yang dapat diakses melalui komputer atau perangkat seluler Anda. Namun, untuk pengalaman terbaik, kami merekomendasikan menggunakan perangkat VR."
        />
      </div>
    </>
  )
}

export default Faq