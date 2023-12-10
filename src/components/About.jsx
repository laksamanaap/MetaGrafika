import React, { Suspense, useRef } from "react";
import school from "../assets/images/school-3d.png";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const About = () => {
  const objectToAnimate = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Cube");
    // save the object in a ref for later use
    objectToAnimate.current = obj;
  }

  function triggerAnimation() {
    objectToAnimate.current.emitEvent("mouseHover");
  }

  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 px-4 justify-between lg:px-20 text-left">
      {/* Preparing for spline.js*/}
      {/* For Loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Spline Scene */}
        <Spline scene="https://prod.spline.design/jzAXUzgTvf6akeSK/scene.splinecode" />
      </Suspense>
      {/* Preparing for spline.js*/}
      <div className="py-32 relative flex flex-col items-end">
        <div>
          <span className="flex px-5 w-max border border-accent py-3 rounded-xl gap-3 items-center bg-white">
            <svg
              aria-label="metagrafika"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75C15.75 7.74456 15.3549 8.69839 14.6517 9.40165C13.9484 10.1049 12.9946 10.5 12 10.5C11.0054 10.5 10.0516 10.1049 9.34835 9.40165C8.64509 8.69839 8.25 7.74456 8.25 6.75ZM15.75 9.75C15.75 8.95435 16.0661 8.19129 16.6287 7.62868C17.1913 7.06607 17.9544 6.75 18.75 6.75C19.5456 6.75 20.3087 7.06607 20.8713 7.62868C21.4339 8.19129 21.75 8.95435 21.75 9.75C21.75 10.5456 21.4339 11.3087 20.8713 11.8713C20.3087 12.4339 19.5456 12.75 18.75 12.75C17.9544 12.75 17.1913 12.4339 16.6287 11.8713C16.0661 11.3087 15.75 10.5456 15.75 9.75ZM2.25 9.75C2.25 8.95435 2.56607 8.19129 3.12868 7.62868C3.69129 7.06607 4.45435 6.75 5.25 6.75C6.04565 6.75 6.80871 7.06607 7.37132 7.62868C7.93393 8.19129 8.25 8.95435 8.25 9.75C8.25 10.5456 7.93393 11.3087 7.37132 11.8713C6.80871 12.4339 6.04565 12.75 5.25 12.75C4.45435 12.75 3.69129 12.4339 3.12868 11.8713C2.56607 11.3087 2.25 10.5456 2.25 9.75ZM6.31 15.117C6.91995 14.161 7.76108 13.3743 8.75562 12.8294C9.75016 12.2846 10.866 11.9994 12 12C12.9498 11.9991 13.8891 12.1989 14.7564 12.5862C15.6237 12.9734 16.3994 13.5395 17.0327 14.2474C17.6661 14.9552 18.1428 15.7888 18.4317 16.6936C18.7205 17.5985 18.815 18.5541 18.709 19.498C18.696 19.6153 18.6556 19.7278 18.591 19.8265C18.5263 19.9252 18.4393 20.0073 18.337 20.066C16.4086 21.1725 14.2233 21.7532 12 21.75C9.695 21.75 7.53 21.138 5.663 20.066C5.56069 20.0073 5.47368 19.9252 5.40904 19.8265C5.34441 19.7278 5.30396 19.6153 5.291 19.498C5.12305 17.9646 5.48246 16.4198 6.31 15.118V15.117Z"
                fill="#047392"
              />
              <path
                d="M5.08202 14.2539C4.09577 15.7763 3.63627 17.5802 3.77402 19.3889C3.17353 19.2979 2.58293 19.1505 2.01002 18.9489L1.89502 18.9089C1.79242 18.8725 1.70257 18.8071 1.63637 18.7207C1.57017 18.6342 1.53045 18.5305 1.52202 18.4219L1.51202 18.3009C1.47162 17.7989 1.53278 17.2938 1.69182 16.816C1.85087 16.3381 2.10456 15.8971 2.43774 15.5194C2.77093 15.1417 3.17679 14.835 3.6311 14.6176C4.08541 14.4001 4.57887 14.2765 5.08202 14.2539ZM20.226 19.3889C20.3638 17.5802 19.9043 15.7763 18.918 14.2539C19.4212 14.2765 19.9146 14.4001 20.3689 14.6176C20.8233 14.835 21.2291 15.1417 21.5623 15.5194C21.8955 15.8971 22.1492 16.3381 22.3082 16.816C22.4673 17.2938 22.5284 17.7989 22.488 18.3009L22.478 18.4219C22.4694 18.5303 22.4296 18.6338 22.3634 18.7201C22.2972 18.8063 22.2075 18.8716 22.105 18.9079L21.99 18.9479C21.423 19.1479 20.834 19.2969 20.226 19.3889Z"
                fill="#047392"
              />
            </svg>
            <h6 className="font-semibold text-primary">Meta Grafika</h6>
          </span>
        </div>
        <p className="text-3xl text-right leading-10 mt-12 text-slate-600 mb-5">
          Tenggelam dalam kreativitas, siswa&nbsp;
          <span className="whitespace-nowrap font-semibold italic relative">
            SMKN 4 Malang
            <svg
              aria-label="metagrafika"
              className="absolute w-full -bottom-2 right-0 left-0"
              width="264"
              height="9"
              viewBox="0 0 264 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M263.238 5.25522C261.959 7.86355 257.95 7.86143 254.619 7.94369C239.509 8.30956 224.395 8.7856 209.23 8.7083C188.163 8.60692 167.047 8.24456 145.963 7.62412C127.416 7.08124 109.063 7.03053 90.7459 7.99589C82.182 8.44695 73.3672 8.00676 64.6385 6.78085C46.0578 4.17398 27.6454 4.15425 9.56597 6.72192C5.31208 7.32349 1.38505 6.30938 0.97994 4.44201C0.808384 3.63075 2.3414 2.15648 3.62666 2.05244C11.4329 1.40946 19.3508 0.935856 27.3086 0.667709C39.3865 0.262146 51.4738 0.932444 63.3296 2.51024C74.846 4.04308 86.1688 3.71042 97.568 3.20946C117.552 2.32987 137.665 3.14255 157.799 3.69672C180.776 4.3281 203.746 4.47939 226.712 4.72433C237.279 4.8396 247.832 4.66209 258.402 4.6782C259.942 4.68235 261.529 5.0356 263.25 5.25014L263.238 5.25522Z"
                fill="#047392"
              />
            </svg>
          </span>
          , membentuk tim Metaverse. Bersama, kita menjelajahi peluang menarik
          di dunia digital!
        </p>
        <p className="text-secondary">
          Terdiri dari 10 siswa dengan kolaborasi jurusan animasi dan RPL.&nbsp;
        </p>
      </div>
    </section>
  );
};

export default About;