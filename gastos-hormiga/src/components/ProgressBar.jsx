import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Graph } from "../components/Graph";
import notas from "../assets/img/notas.png";
import logo from "../assets/img/logo-horizontal.png";
import redes from "../assets/img/redes.png";
import saveSvgAsPng from "save-svg-as-png";
import QRCode from "react-qr-code";

import { saveAs } from "file-saver";
import axios from "axios";

export const ProgressBar = (
  scoreCafe,
  scoreAntojos,
  scorePropina,
  scoreAgua,
  scoreDomicilio,
  scoreCigarros,
  scoreRestaurante,
  questionsFiltered,
  onReset
) => {
  const vizRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [newFilename, setNewFilename] = useState("");

  const handleDownload = async () => {
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

          const url = "http://localhost:5000/api/save-png";
          try {
            await axios.post(url, { filename, base64Data }); // Send the filename and base64 data in the request body
          } catch (error) {
            console.error("Error generating file:", error);
          }
        }
      );
      setNewFilename(newFilename);

      console.log("Async part after image is saved");
      console.log("New", newFilename);
    } catch (error) {
      console.error("Error in handleDownload:", error);
    }
  };

  return (
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
        <Link to={`/quiz/form?filename=${encodeURIComponent(newFilename)}`}>
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
  );
};
