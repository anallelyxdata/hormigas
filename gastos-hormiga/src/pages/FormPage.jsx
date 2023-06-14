import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-horizontal.png";
import { useNavigate } from "react-router-dom";
import QRPage from "./QRPage";

export const FormPage = ({ newFilename }) => {
  const [activeForm, setActiveForm] = useState(true);

  const navigate = useNavigate();
  const handleSubmit = () => {
    setActiveForm(false);
    // console.log("soy el newfilename en handlesubmit",newFilename)
  };

  return (
    <>
      {activeForm ? (
        <div className="dataviz-page relative h-screen w-full overflow-hidden flex items-center justify-center">
          <Link to={`/quiz`}>
            <img
              className="absolute top-[3rem] left-[3rem] w-[115px] "
              src={logo}
              alt="Logo"
            />
          </Link>
          <form
            onSubmit={handleSubmit}
            className="bg-[#d3e6e4] w-[31rem] py-12 px-14 rounded-2xl"
          >
            <h1 className="text-2xl circular-black text-[#122f36] mb-4 ml-3">
              ¡Gracias por participar!
            </h1>
            <label
              className="text-[#006568] circular-bold text-md ml-3"
              htmlFor="name"
            >
              Nombre
            </label>
            <br />
            <input
              required
              className="mb-3 mt-[3px] bg-[#bed4d4] px-4 text-md py-1 rounded-3xl w-full required:border-red-600"
              type="text"
              placeholder="Escribe tu nombre"
            />
            <label
              className="text-[#006568] circular-bold text-md ml-3"
              htmlFor="phone"
            >
              Teléfono
            </label>
            <br />
            <input
              required
              className="mb-3 mt-[3px] bg-[#bed4d4] px-4 text-md py-1 rounded-3xl w-full required:border-red-600"
              type="tel"
              placeholder="Escribe tu teléfono"
            />
            <label
              className="text-[#006568] circular-bold text-md ml-3"
              htmlFor="email"
            >
              Correo
            </label>
            <br />
            <input
              required
              className="mb-3 mt-[3px] bg-[#bed4d4] px-4 text-md py-1 rounded-3xl w-full required:border-red-600"
              type="email"
              placeholder="Escribe tu correo"
            />
            <label
              className="text-[#006568] circular-bold text-md ml-3"
              htmlFor="company"
            >
              Empresa
            </label>
            <br />
            <input
              required
              className="mb-3 mt-[3px] bg-[#bed4d4] px-4 text-md py-1 rounded-3xl w-full required:border-red-600"
              type="text"
              placeholder="Escribe tu empresa"
            />
            <label
              className="text-[#006568] circular-bold text-md ml-3"
              htmlFor="position"
            >
              Puesto
            </label>
            <br />
            <input
              required
              className="mb-3 mt-[3px] bg-[#bed4d4] px-4 text-md py-1 rounded-3xl w-full required:border-red-600"
              type="text"
              placeholder="Escribe tu nombre"
            />
            <input
              type="submit"
              className="w-full bg-[#122f36] rounded-3xl text-white circular-black py-1 mt-4"
              value="Enviar"
            />
          </form>
        </div>
      ) : (
        <QRPage newFilename={newFilename} />
      )}
    </>
  );
};
