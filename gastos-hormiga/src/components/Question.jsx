import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Results } from "../components/Results";
import { Answer } from "./Answer";
import cafe from "../assets/img/cafe.png";
import logo from "../assets/img/logo-horizontal.png";
import { DatavizPage } from "../pages/DatavizPage";

export const Question = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}) => {
  const [scoreCafe, setScoreCafe] = useState(0);
  const [scoreAntojos, setScoreAntojos] = useState(0);
  const [scorePropina, setScorePropina] = useState(0);
  const [scoreAgua, setScoreAgua] = useState(0);
  const [scoreDomicilio, setScoreDomicilio] = useState(0);
  const [scoreCigarros, setScoreCigarros] = useState(0);
  const [scoreRestaurante, setScoreRestaurante] = useState(0);

  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answersRandom, setAnswersRandom] = useState([]);
  const [activeResults, setActiveResults] = useState(false);
  var img_src, img_width;

  const [prevClickedDiv, setPrevClickedDiv] = useState(null);

  const onNext = () => {
    var option0Button = document.getElementById("option0");
    var option3Button = document.getElementById("option3");
    var option5Button = document.getElementById("option5");
    var option7Button = document.getElementById("option7");

    var next = document.getElementById("next");

    var option0Top = document.getElementById("option-top0");
    var option3Top = document.getElementById("option-top3");
    var option5Top = document.getElementById("option-top5");
    var option7Top = document.getElementById("option-top7");

    var option0Middle = document.getElementById("option-middle0");
    var option3Middle = document.getElementById("option-middle3");
    var option5Middle = document.getElementById("option-middle5");
    var option7Middle = document.getElementById("option-middle7");

    var relleno1 = document.getElementById("relleno1");
    var relleno2 = document.getElementById("relleno2");
    var relleno3 = document.getElementById("relleno3");

    var insideInside = document.getElementById("inside-inside");

    option3Button.classList.remove("option-color");
    option3Top.classList.remove("option-top-color");
    option3Middle.classList.remove("option-middle-color");

    option5Button.classList.remove("option-color");
    option5Top.classList.remove("option-top-color");
    option5Middle.classList.remove("option-middle-color");

    option7Button.classList.remove("option-color");
    option7Top.classList.remove("option-top-color");
    option7Middle.classList.remove("option-middle-color");

    relleno1.style.animationName = "fill-0";
    relleno2.style.animationName = "fill-0";
    relleno3.style.animationName = "fill-0";

    var imageElements = insideInside.getElementsByTagName("img");
    while (imageElements.length > 0) {
      insideInside.removeChild(imageElements[0]);
    }
  };
  useEffect(() => {
    const answers = [...filteredQuestion.answers];
    setAnswersRandom(answers);
  }, [filteredQuestion]);

  useLayoutEffect(() => {
    // Declaro las constantes
    const option0Button = document.getElementById("option0");
    const option3Button = document.getElementById("option3");
    const option5Button = document.getElementById("option5");
    const option7Button = document.getElementById("option7");

    const option0Top = document.getElementById("option-top0");
    const option3Top = document.getElementById("option-top3");
    const option5Top = document.getElementById("option-top5");
    const option7Top = document.getElementById("option-top7");

    const option0Middle = document.getElementById("option-middle0");
    const option3Middle = document.getElementById("option-middle3");
    const option5Middle = document.getElementById("option-middle5");
    const option7Middle = document.getElementById("option-middle7");

    const relleno1 = document.getElementById("relleno1");
    const relleno2 = document.getElementById("relleno2");
    const relleno3 = document.getElementById("relleno3");

    const insideInside = document.getElementById("inside-inside");

    function setImgWidthAndSrc0() {
      if (filteredQuestion.key == "Restaurante") {
        img_src = "src/assets/img/restaurantes.png";
        img_width = "25%";
      } else if (filteredQuestion.key == "Antojos") {
        img_width = "25%";
        img_src = "src/assets/img/antojos.png";
      } else if (filteredQuestion.key == "Propina") {
        img_src = "src/assets/img/propina.png";
        img_width = "19%";
      } else if (filteredQuestion.key == "Agua") {
        img_src = "src/assets/img/agua.png";
        img_width = "12%";
      } else if (filteredQuestion.key == "Domicilio") {
        img_src = "src/assets/img/delivery.png";
        img_width = "22%";
      } else if (filteredQuestion.key == "Cigarros") {
        img_src = "src/assets/img/cigarros.png";
        img_width = "25%";
      } else if (filteredQuestion.key == "Cafe") {
        img_src = "src/assets/img/cafe.png";
        img_width = "25%";
      }
    }
    function quitarImg() {
      var imageElements = insideInside.getElementsByTagName("img");
      while (imageElements.length > 0) {
        insideInside.removeChild(imageElements[0]);
      }
    }
    function poner1Img() {
      for (var i = 0; i < 1; i++) {
        var imageElement = document.createElement("img");
        imageElement.src = img_src;
        imageElement.style.width = img_width;
        imageElement.alt = "";
        insideInside.appendChild(imageElement);
        imageElement.classList.add("fade-in");
      }
    }
    function ponerAnimacion357() {
      option3Button.style.animationName = "pulse-white";
      option5Button.style.animationName = "pulse-white";
      option7Button.style.animationName = "pulse-white";
    }
    function quitarAnimacion357() {
      option3Button.style.animationName = "none";
      option5Button.style.animationName = "none";
      option7Button.style.animationName = "none";
    }
    function setImgWidthAndSrc357() {
      if (filteredQuestion.key == "Restaurante") {
        img_src = "src/assets/img/restaurantes.png";
        img_width = "20%";
      } else if (filteredQuestion.key == "Antojos") {
        img_width = "20%";
        img_src = "src/assets/img/antojos.png";
      } else if (filteredQuestion.key == "Propina") {
        img_src = "src/assets/img/propina.png";
        img_width = "16%";
      } else if (filteredQuestion.key == "Agua") {
        img_src = "src/assets/img/agua.png";
        img_width = "12%";
      } else if (filteredQuestion.key == "Domicilio") {
        img_src = "src/assets/img/delivery.png";
        img_width = "18%";
      } else if (filteredQuestion.key == "Cigarros") {
        img_src = "src/assets/img/cigarros.png";
        img_width = "17%";
      } else if (filteredQuestion.key == "Cafe") {
        img_src = "src/assets/img/cafe.png";
        img_width = "20%";
      }
    }
    function remove0() {
      option0Button.classList.remove("option-color");
      option0Top.classList.remove("option-top-color");
      option0Middle.classList.remove("option-middle-color");
    }
    function remove3() {
      option3Button.classList.remove("option-color");
      option3Top.classList.remove("option-top-color");
      option3Middle.classList.remove("option-middle-color");
    }
    function remove5() {
      option5Button.classList.remove("option-color");
      option5Top.classList.remove("option-top-color");
      option5Middle.classList.remove("option-middle-color");
    }
    function remove7() {
      option7Button.classList.remove("option-color");
      option7Top.classList.remove("option-top-color");
      option7Middle.classList.remove("option-middle-color");
    }
    function add0() {
      option0Button.classList.add("option-color");
      option0Top.classList.add("option-top-color");
      option0Middle.classList.add("option-middle-color");
    }
    function add3() {
      option3Button.classList.add("option-color");
      option3Top.classList.add("option-top-color");
      option3Middle.classList.add("option-middle-color");
    }
    function add5() {
      option5Button.classList.add("option-color");
      option5Top.classList.add("option-top-color");
      option5Middle.classList.add("option-middle-color");
    }
    function add7() {
      option7Button.classList.add("option-color");
      option7Top.classList.add("option-top-color");
      option7Middle.classList.add("option-middle-color");
    }
    function addNumImg(times) {
      for (var i = 0; i < times; i++) {
        var imageElement = document.createElement("img");
        imageElement.src = img_src;
        imageElement.style.width = img_width;
        imageElement.style.opacity = 1;
        imageElement.alt = "";
        insideInside.appendChild(imageElement);
        imageElement.classList.add("fade-in");
      }
    }
    function mouseOverOpcion357(times) {
      quitarAnimacion357();
      setImgWidthAndSrc357();
      remove0();
      quitarImg();
      addNumImg(times);

      insideInside.offsetHeight;
      insideInside.classList.add("show");
    }
    function mouseOutOpcion357(times) {
      ponerAnimacion357();
      setImgWidthAndSrc0();
      remove3();
      remove5();
      remove7();
      add0();
      quitarImg();
      addNumImg(times);
      relleno1.style.animationName = "fill-0";
      relleno2.style.animationName = "fill-0";
      relleno3.style.animationName = "fill-0";
    }

    if (option0Button) {
      // Para inicializar opción 0 activa
      option0Button.classList.add("option-color");
      option0Top.classList.add("option-top-color");
      option0Middle.classList.add("option-middle-color");
      option0Button.style.animationName = "none";

      // Para el ancho de las imágenes inicalmente(cuando solo hay una) y la ruta
      setImgWidthAndSrc0();

      // Para imprimir una imagen por default
      for (var i = 0; i < 1; i++) {
        var imageElement = document.createElement("img");
        imageElement.src = img_src;
        imageElement.style.width = img_width;
        imageElement.style.opacity = 1;
        imageElement.alt = "";
        insideInside.appendChild(imageElement);
      }
      option3Button.addEventListener("mouseover", function () {
        remove0();
        remove5();
        remove7();
        add3();
        relleno1.style.animationName = "fill-3";
        relleno2.style.animationName = "fill-3";
        relleno3.style.animationName = "fill-3";
      });
      option3Button.addEventListener("mouseout", function () {
        mouseOutOpcion357(1);
      });
      option5Button.addEventListener("mouseover", function () {
        remove3();
        remove0();
        remove7();
        add5();
        relleno1.style.animationName = "fill-5";
        relleno2.style.animationName = "fill-5";
        relleno3.style.animationName = "fill-5";
      });
      option5Button.addEventListener("mouseout", function () {
        mouseOutOpcion357(1);
      });
      option7Button.addEventListener("mouseover", function () {
        remove3();
        remove0();
        remove5();
        add7();
        relleno1.style.animationName = "fill-7";
        relleno2.style.animationName = "fill-7";
        relleno3.style.animationName = "fill-7";
      });
      option7Button.addEventListener("mouseout", function () {
        mouseOutOpcion357(1);
      });
    }
  }, [answersRandom]);

  const onNextQuestion = () => {
    setPrevClickedDiv(null);
    setIndexQuestion(indexQuestion + 1);
    onNext();
  };
  const checkAnswer = (answer, index) => {
    if (prevClickedDiv === answer.id) {
      return; // Clicked the same div again, perform nothing
    }
    const option0Button = document.getElementById("option0");
    const option3Button = document.getElementById("option3");
    const option5Button = document.getElementById("option5");
    const option7Button = document.getElementById("option7");

    const option0Top = document.getElementById("option-top0");
    const option3Top = document.getElementById("option-top3");
    const option5Top = document.getElementById("option-top5");
    const option7Top = document.getElementById("option-top7");

    const option0Middle = document.getElementById("option-middle0");
    const option3Middle = document.getElementById("option-middle3");
    const option5Middle = document.getElementById("option-middle5");
    const option7Middle = document.getElementById("option-middle7");

    const relleno1 = document.getElementById("relleno1");
    const relleno2 = document.getElementById("relleno2");
    const relleno3 = document.getElementById("relleno3");

    const insideInside = document.getElementById("inside-inside");

    if (filteredQuestion.key == "Restaurante") {
      setScoreRestaurante(scoreRestaurante + answer);
      img_src = "src/assets/img/restaurantes.png";
      img_width = "20%";
    } else if (filteredQuestion.key == "Antojos") {
      setScoreAntojos(scoreAntojos + answer);
      img_width = "20%";
      img_src = "src/assets/img/antojos.png";
    } else if (filteredQuestion.key == "Propina") {
      setScorePropina(scorePropina + answer);
      img_src = "src/assets/img/propina.png";
      img_width = "16%";
    } else if (filteredQuestion.key == "Agua") {
      setScoreAgua(scoreAgua + answer);
      img_src = "src/assets/img/agua.png";
      img_width = "12%";
    } else if (filteredQuestion.key == "Domicilio") {
      setScoreDomicilio(scoreDomicilio + answer);
      img_src = "src/assets/img/delivery.png";
      img_width = "18%";
    } else if (filteredQuestion.key == "Cigarros") {
      setScoreCigarros(scoreCigarros + answer);
      img_src = "src/assets/img/cigarros.png";
      img_width = "17%";
    } else if (filteredQuestion.key == "Cafe") {
      setScoreCafe(scoreCafe + answer);
      img_src = "src/assets/img/cafe.png";
      img_width = "20%";
    }

    if (answer === 0) {
      option3Button.classList.remove("option-color");
      option3Top.classList.remove("option-top-color");
      option3Middle.classList.remove("option-middle-color");

      option5Button.classList.remove("option-color");
      option5Top.classList.remove("option-top-color");
      option5Middle.classList.remove("option-middle-color");

      option7Button.classList.remove("option-color");
      option7Top.classList.remove("option-top-color");
      option7Middle.classList.remove("option-middle-color");

      option0Button.classList.add("option-color");
      option0Top.classList.add("option-top-color");
      option0Middle.classList.add("option-middle-color");

      relleno1.style.animationName = "fill-0";
      relleno2.style.animationName = "fill-0";
      relleno3.style.animationName = "fill-0";
    } else if (answer === 3) {
      option0Button.classList.remove("option-color");
      option0Top.classList.remove("option-top-color");
      option0Middle.classList.remove("option-middle-color");

      option3Button.classList.add("option-color");
      option3Top.classList.add("option-top-color");
      option3Middle.classList.add("option-middle-color");

      option5Button.classList.remove("option-color");
      option5Top.classList.remove("option-top-color");
      option5Middle.classList.remove("option-middle-color");

      option7Button.classList.remove("option-color");
      option7Top.classList.remove("option-top-color");
      option7Middle.classList.remove("option-middle-color");

      relleno1.style.animationName = "fill-3";
      relleno2.style.animationName = "fill-3";
      relleno3.style.animationName = "fill-3";

      insideInside.getElementsByTagName("img").src = img_src;

      insideInside.offsetHeight;
      insideInside.classList.add("show");
    } else if (answer === 5) {
      option0Button.classList.remove("option-color");
      option0Top.classList.remove("option-top-color");
      option0Middle.classList.remove("option-middle-color");

      option3Button.classList.remove("option-color");
      option3Top.classList.remove("option-top-color");
      option3Middle.classList.remove("option-middle-color");

      option7Button.classList.remove("option-color");
      option7Top.classList.remove("option-top-color");
      option7Middle.classList.remove("option-middle-color");

      option5Button.classList.add("option-color");
      option5Top.classList.add("option-top-color");
      option5Middle.classList.add("option-middle-color");

      relleno1.style.animationName = "fill-5";
      relleno2.style.animationName = "fill-5";
      relleno3.style.animationName = "fill-5";

      insideInside.getElementsByTagName("img").src = img_src;

      insideInside.offsetHeight;
      insideInside.classList.add("show");
    } else if (answer === 7) {
      option0Button.classList.remove("option-color");
      option0Top.classList.remove("option-top-color");
      option0Middle.classList.remove("option-middle-color");

      option3Button.classList.remove("option-color");
      option3Top.classList.remove("option-top-color");
      option3Middle.classList.remove("option-middle-color");

      option5Button.classList.remove("option-color");
      option5Top.classList.remove("option-top-color");
      option5Middle.classList.remove("option-middle-color");

      option7Button.classList.add("option-color");
      option7Top.classList.add("option-top-color");
      option7Middle.classList.add("option-middle-color");

      relleno1.style.animationName = "fill-7";
      relleno2.style.animationName = "fill-7";
      relleno3.style.animationName = "fill-7";

      insideInside.getElementsByTagName("img").src = img_src;

      insideInside.offsetHeight;
      insideInside.classList.add("show");
    }
    setPrevClickedDiv(answer.id);

    if (indexQuestion + 1 === questionsFiltered.length) {
      setTimeout(() => {
        setAnswered(false);
        setActiveResults(true);
      }, 4000);
    } else {
      setTimeout(() => {
        onNextQuestion();
        onNext();
      }, 4000);
    }
  };

  return (
    <>
      {activeResults ? (
        <DatavizPage
          questionsFiltered={questionsFiltered}
          scoreCafe={scoreCafe}
          scoreAntojos={scoreAntojos}
          scorePropina={scorePropina}
          scoreAgua={scoreAgua}
          scoreDomicilio={scoreDomicilio}
          scoreCigarros={scoreCigarros}
          scoreRestaurante={scoreRestaurante}
        />
      ) : (
        <div className="question-screen h-screen w-full flex-col flex items-center content-center justify-center bg-gradient-to-r from-teal-100 to-teal-300">
          <Link to={"/quiz"}>
            <img src={logo} className="absolute w-[6rem] top-10 left-10"></img>
          </Link>
          <div className="flex flex-col justify-between items-center content-center pt-6">
            {/* Título de pregunta */}
            <h1 className="circular-black text-2xl mb-12 title-pregunta">
              {filteredQuestion.question}
            </h1>
            {/* Empieza */}
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full" id="relleno1">
                  <div className="fill" id="relleno2"></div>
                </div>
                <div className="mask half">
                  <div className="fill" id="relleno3"></div>
                </div>
                <div className="inside-circle">
                  <div
                    className="inside-inside-circle"
                    id="inside-inside"
                  ></div>
                  <div className="dotted-circle"></div>
                  {answersRandom.map((answer, index) => (
                    <div
                      key={answer}
                      className={`option-top  option-${answer}`}
                      id={`option-top${answer}`}
                    >
                      <div
                        className="option-middle "
                        id={`option-middle${answer}`}
                      >
                        <div
                          id={`option${answer}`}
                          className="option blob white"
                          key={answer.id}
                          onClick={() => checkAnswer(answer, index)}
                        >
                          {answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-14 w-4/6 text-center circular-medium text-[#333333] text-lg">
              {filteredQuestion.quote}
            </p>

            {/* Termina */}
            {/* <button
                          onClick={() => onNextQuestion()}
                          className="mt-[4.5rem] bg-[#082f49] text-white rounded-full w-44 py-2 circular-light tracking-wide text-lg hover:scale-[1.1] transition ease-in-out shadow-xl"
                      >
                          Siguiente
                      </button> */}
          </div>
        </div>
      )}
    </>
  );
};
