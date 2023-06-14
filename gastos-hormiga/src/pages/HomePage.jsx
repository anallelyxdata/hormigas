import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-x-data.png";
import jar from "../assets/img/money-jar.png";

export const HomePage = () => {
  return (
    <div className="">
      <div className="home-screen h-screen w-full flex-col flex items-center content-center justify-center bg-gradient-to-r from-teal-100 to-teal-300">
        <div className="flex items-center content-center flex-wrap justify-center text-center lg:text-left">
          <img
            className="inline pr-8 py-3 border-dashed border-r-[2px] object-contain w-[95px] max-w-[110px] border-[#082f49]/100"
            src={logo}
            alt="Logo"
          />
          <img
            className="inline pl-8 pr-8 h-full object-contain w-[150px] max-w-[170px] w-full border-[#082f49]/100"
            src={jar}
          />
          <div className="">
            <h1 className="uppercase text-[#082f49] text-3xl tracking-widest circular-black">
              ¿En qué se te va el <br />
              <span className="block text-7xl tracking-widest mt-2">
                dinero?
              </span>
            </h1>
            <h2 className="mt-1 text-[#006568] circular-light text-3xl">
              Tus gastos en <span className="circular-medium">datos</span>
            </h2>
          </div>
        </div>

        <Link to={`/quiz/questions`}>
          <button className="drop-shadow-2xl mt-[8rem] bg-[#082f49] text-white rounded-full w-44 py-2 circular-light tracking-wide text-lg hover:scale-[1.1] transition ease-in-out">
            Descúbrelo
          </button>
        </Link>
      </div>
    </div>
  );
};
