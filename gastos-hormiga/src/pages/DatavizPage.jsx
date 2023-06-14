import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Graph } from "../components/Graph";
import notas from "../assets/img/notas.png";
import logo from "../assets/img/logo-horizontal.png";
import redes from "../assets/img/redes.png";
import saveSvgAsPng from "save-svg-as-png";
import { FormPage } from "../pages/FormPage";

import { saveAs } from "file-saver";
import axios from "axios";

export const DatavizPage = ({
  scoreCafe,
  scoreAntojos,
  scorePropina,
  scoreAgua,
  scoreDomicilio,
  scoreCigarros,
  scoreRestaurante,
  questionsFiltered,
  annualCafe,
  annualAntojos,
  annualPropina,
  annualAgua,
  annualDomicilio,
  annualCigarros,
  annualRestaurante,
  totalGastos,
  onReset,
}) => {
  const [activeDataviz, setActiveDataviz] = useState(true);

  const vizRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [newFilename, setNewFilename] = useState("");

  const handleDownload = async () => {
    setActiveDataviz(false);

    const svgElement = document.getElementById("my_viz"); // Get the SVG element by ID

    // Retrieve the user count from local storage or set it to 0 if it doesn't exist
    let userCount = localStorage.getItem("userCount");
    userCount = userCount ? parseInt(userCount, 10) : 0;

    // Increment the user count
    userCount += 1;

    // Save the updated user count back to local storage
    localStorage.setItem("userCount", userCount);

    // Create the filename with the updated user count
    const newFilename = `gastos_hormiga_${userCount}.png`;
    const filename = `gastos_hormiga_${userCount}.png`;
    setNewFilename(newFilename);

    try {
      // Save the SVG as a PNG file with the dynamic filename
      await saveSvgAsPng.svgAsPngUri(
        svgElement,
        { backgroundColor: "#fff" },
        async (uri) => {
          const base64Data = uri.replace(/^data:image\/png;base64,/, ""); // Extract the base64 data from the URI

          const url = "http://localhost:5000/api/png";
          try {
            await axios.post(url, { filename, base64Data }); // Send the filename and base64 data in the request body
          } catch (error) {
            console.error("Error generating file:", error);
          }
        }
      );

      // try {
      //   // Save the SVG as a PNG file with the dynamic filename
      //   await saveSvgAsPng.svgAsPngUri(
      //     svgElement,
      //     { backgroundColor: "#fff" },
      //     async (uri) => {
      //       const base64Data = uri.replace(/^data:image\/png;base64,/, ""); // Extract the base64 data from the URI

      //       const url = "http://localhost:8000/api/guardar-png";
      //       try {
      //         await axios.post(url, { filename, base64Data }
      //         ); // Send the filename and base64 data in the request body
      //       } catch (error) {
      //         console.error("Error generating file:", error);
      //       }
      //     }
      //   );
      setImageUrl(newFilename);

      console.log("Async part after image is saved");
      console.log("New", newFilename);
    } catch (error) {
      console.error("Error in handleDownload:", error);
    }
  };

  const precioCafe = 55;
  const precioAntojos = 35;
  const precioPropina = 5;
  const precioAgua = 15;
  const precioDomicilio = 60;
  const precioCigarros = 65;
  const precioRestaurante = 300;
  totalGastos = 0;

  switch (scoreCafe) {
    case 0:
      annualCafe = 0;
      break;
    case 3:
      annualCafe = precioCafe * 2 * 52;
      break;
    case 5:
      annualCafe = precioCafe * 4.5 * 52;
      break;
    case 7:
      annualCafe = precioCafe * 6.5 * 52;
      break;
  }
  switch (scoreAntojos) {
    case 0:
      annualAntojos = 0;
      break;
    case 3:
      annualAntojos = precioAntojos * 2 * 52;
      break;
    case 5:
      annualAntojos = precioAntojos * 4.5 * 52;
      break;
    case 7:
      annualAntojos = precioAntojos * 6.5 * 52;
      break;
  }
  switch (scorePropina) {
    case 0:
      annualPropina = 0;
      break;
    case 3:
      annualPropina = precioPropina * 2 * 52;
      break;
    case 5:
      annualPropina = precioPropina * 4.5 * 52;
      break;
    case 7:
      annualPropina = precioPropina * 6.5 * 52;
      break;
  }
  switch (scoreAgua) {
    case 0:
      annualAgua = 0;
      break;
    case 3:
      annualAgua = precioAgua * 2 * 52;
      break;
    case 5:
      annualAgua = precioAgua * 4.5 * 52;
      break;
    case 7:
      annualAgua = precioAgua * 6.5 * 52;
      break;
  }
  switch (scoreDomicilio) {
    case 0:
      annualDomicilio = 0;
      break;
    case 3:
      annualDomicilio = precioDomicilio * 2 * 52;
      break;
    case 5:
      annualDomicilio = precioDomicilio * 4.5 * 52;
      break;
    case 7:
      annualDomicilio = precioDomicilio * 6.5 * 52;
      break;
  }
  switch (scoreCigarros) {
    case 0:
      annualCigarros = 0;
      break;
    case 3:
      annualCigarros = precioCigarros * 2 * 52;
      break;
    case 5:
      annualCigarros = precioCigarros * 4.5 * 52;
      break;
    case 7:
      annualCigarros = precioCigarros * 6.5 * 52;
      break;
  }

  switch (scoreRestaurante) {
    case 0:
      annualRestaurante = 0;
      break;
    case 3:
      annualRestaurante = precioRestaurante * 2 * 52;
      break;
    case 5:
      annualRestaurante = precioRestaurante * 4.5 * 52;
      break;
    case 7:
      annualRestaurante = precioRestaurante * 6.5 * 52;
      break;
  }
  // console.log("tota:", totalGastos)
  totalGastos =
    annualAgua +
    annualAntojos +
    annualCafe +
    annualCigarros +
    annualDomicilio +
    annualDomicilio +
    annualPropina +
    annualRestaurante;

  // console.log("tota:", totalGastos);

  return (
    <>
      {activeDataviz ? (
        <div className="dataviz-page relative h-screen w-full overflow-hidden">
          <Link to={`/quiz`}>
            <img
              className="absolute top-[3rem] left-[3rem] w-[115px] "
              src={logo}
              alt="Logo"
            />
          </Link>
          <Graph
            questionsFiltered={questionsFiltered}
            scoreCafe={scoreCafe}
            scoreAntojos={scoreAntojos}
            scorePropina={scorePropina}
            scoreAgua={scoreAgua}
            scoreDomicilio={scoreDomicilio}
            scoreCigarros={scoreCigarros}
            scoreRestaurante={scoreRestaurante}
            onReset={onReset}
          />
          <img
            className="absolute bottom-[2rem] left-[3rem] h-[15px]"
            src={redes}
            alt="Redes"
          />
          <div className="absolute bottom-[3rem] right-[3rem] ">
            <h2>Tu gastas: {totalGastos}</h2>
            <Link>
              <button
                onClick={handleDownload}
                className="mb-7 drop-shadow-2xl bg-[#082f49] text-white rounded-full w-40 py-1.5 circular-light tracking-wide text-lg hover:scale-[1.1] transition ease-in-out"
              >
                Descargar
              </button>
            </Link>
            <img className="max-w-[140px]" src={notas} alt="Notas" />
          </div>
        </div>
      ) : (
        <FormPage newFilename={newFilename} />
      )}
    </>
  );
};
