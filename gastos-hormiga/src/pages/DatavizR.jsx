import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Graph } from "../components/Graph";
import notas from "../assets/img/notas.png";
import logo from "../assets/img/logo-horizontal.png";

import redes from "../assets/img/redes.png";
import saveSvgAsPng from "save-svg-as-png";
import { saveAs } from "file-saver";

export const DatavizPage = ({
  scoreCafe,
    scoreAntojos,
    scorePropina,
    scoreAgua,
    scoreDomicilio,
    scoreCigarros,
    scoreRestaurante,
    questionsFiltered,
    onReset
}) => {
     const vizRef = useRef(null);

     const handleDownload = async () => {
         const svgElement = document.getElementById("my_viz"); // Get the SVG element by ID
         const userCount = await getUserCount(); // Get the user count

         const filename = `gastos_hormiga_${userCount}.png`; // Create the filename
         const imagePath = `../assets/img/dataviz/${filename}`; // Create the image path

        saveSvgAsPng.svgAsPngUri(svgElement, {}, async (uri) => {
            try {
                const response = await fetch(uri);
                const blob = await response.blob();

                saveAs(blob, imagePath); // Save the image using file-saver
            } catch (error) {
                console.error("Error saving the image:", error);
            }
        });

         //  let userCount = localStorage.getItem("userCount");
         //  userCount = userCount ? parseInt(userCount, 10) : 0;
         //  userCount += 1;
         //  localStorage.setItem("userCount", userCount);
         //  const filename = `gastos_hormiga_${userCount}.png`;

         //  saveSvgAsPng.saveSvgAsPng(svgElement, filename); // Save the SVG as a PNG file with the dynamic filename
     };
    const getUserCount = () => {
        return new Promise((resolve, reject) => {
            const userCount = localStorage.getItem("userCount");
            const count = userCount ? parseInt(userCount, 10) : 0;
            const updatedCount = count + 1;

            localStorage.setItem("userCount", updatedCount);

            resolve(updatedCount);
        });
    };
    return (
        <div className="dataviz-page relative h-screen w-full overflow-hidden">
            <Link to={`/home`}>
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
                <Link to={`/qr`} onClick={handleDownload}>
                    <button className="mb-7 drop-shadow-2xl bg-[#082f49] text-white rounded-full w-40 py-1.5 circular-light tracking-wide text-lg hover:scale-[1.1] transition ease-in-out">
                        Descargar
                    </button>
                </Link>
                <img className="max-w-[140px]" src={notas} alt="Notas" />
            </div>
        </div>
    );
};

