import React from "react";
import { Link } from "react-router-dom";

export const Results = ({
  scoreCafe,
  scoreAntojos,
  scorePropina,
  scoreAgua,
  scoreDomicilio,
  scoreCigarros,
  scoreRestaurante,
  questionsFiltered,
  onReset,
}) => {
  return (
    <div className="bg-orange-200 flex flex-col">
      <h1>Resultados</h1>

      <div>
        <span>Acertaste</span>
        <br />
        <span>Cafe: {scoreCafe}</span>
        <br />
        <span>Antojos: {scoreAntojos}</span>
        <br />
        <span>Propina: {scorePropina}</span>
        <br />
        <span>Agua: {scoreAgua}</span>
        <br />
        <span>Domicilio: {scoreDomicilio}</span>
        <br />
        <span>Cigarros: {scoreCigarros}</span>
        <br />
        <span>Restaurantes: {scoreRestaurante}</span>
        <br />
      </div>

      <Link to={`/`} onClick={onReset}>
        <button className="mb-4 bg-neutral-300 p-3 rounded-full">
          Vamos de nuevo
        </button>
      </Link>
      <Link to={`/dataviz`} onClick={onReset}>
        <button className="mb-4 bg-purple-300 p-3 rounded-full">
          Ver visualizacion
        </button>
      </Link>
    </div>
  );
};
