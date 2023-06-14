import React from "react";
import qr from "../assets/img/qr.png";
import logo from "../assets/img/logo-horizontal.png";
import { Link } from "react-router-dom";
import redes from "../assets/img/redes.png";
import QRCode from "qrcode.react";

export const QRPage = ({
  newFilename,
  scoreCafe,
  scoreAntojos,
  scorePropina,
  scoreAgua,
  scoreDomicilio,
  scoreCigarros,
  scoreRestaurante,
  questionsFiltered,
  onReset,
  imageUrl,
}) => {
  // console.log("nf", newFilename);
  imageUrl = "http://localhost:5000/dataviz/" + newFilename;
  const qrCodeSize = 250; // Specify the desired size in pixels

  return (
    <div className="qr-page relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-2 items-center w-4/5 ">
        <Link
          to="/quiz/"
          className="absolute top-[3rem] left-[3rem] w-[115px] "
        >
          <img src={logo} alt="Logo" />
        </Link>
        <h1 className="text-[5rem] ml-4 circular-black leading-snug text-[#122f36]">
          ¡Gracias <span className="block text-[2.5rem]">por participar! </span>
        </h1>
        <div className="px-14">
          <h3 className="text-[#006568] circular-medium text-2xl mb-8">
            Escanea tú código QR para poder descargar tu visualización
          </h3>
          <div className="qr-div border-solid border-[6px] rounded-xl p-14 border-white">
            {/* <img className="w-5/6 mx-auto" src={qr} alt="" /> */}
            {/* <a href={imageUrl} target='_blank'>{imageUrl}</a> */}
            <QRCode value={imageUrl} size={qrCodeSize} />
          </div>
          <Link to={`/`} onClick={() => onReset()}>
            <button className="mt-14 float-right drop-shadow-2xl bg-[#082f49] text-white rounded-full w-40 py-1 circular-light tracking-wide text-lg hover:scale-[1.1] transition ease-in-out">
              Inicio
            </button>
          </Link>
        </div>
        <Link to={`/`} onClick={onReset}>
          <img
            className="absolute bottom-[2rem] left-[3rem] h-[15px]"
            src={redes}
            alt="Redes"
          />
        </Link>
      </div>
    </div>
  );
};
export default QRPage;
