import React, { useEffect } from "react";

const loadD3Script = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export const Graph = ({
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
  useEffect(() => {
    loadD3Script()
      .then(() => {
        var value_cafe,
          value_antojos,
          value_propina,
          value_agua,
          value_domicilio,
          value_cigarros,
          value_restaurantes;
        // Empieza data
        switch (scoreCafe) {
          case 3:
            value_cafe = 35;
            break;
          case 5:
            value_cafe = 40;
            break;
          case 7:
            value_cafe = 45;
            break;
          default:
            value_cafe = 30;
        }
        switch (scoreAntojos) {
          case 3:
            value_antojos = 30;
            break;
          case 5:
            value_antojos = 35;
            break;
          case 7:
            value_antojos = 40;
            break;
          default:
            value_antojos = 25;
        }
        switch (scorePropina) {
          case 3:
            value_propina = 15;
            break;
          case 5:
            value_propina = 20;
            break;
          case 7:
            value_propina = 25;
            break;
          default:
            value_propina = 15;
        }
        switch (scoreAgua) {
          case 3:
            value_agua = 25;
            break;
          case 5:
            value_agua = 30;
            break;
          case 7:
            value_agua = 35;
            break;
          default:
            value_agua = 20;
        }
        switch (scoreDomicilio) {
          case 3:
            value_domicilio = 38;
            break;
          case 5:
            value_domicilio = 43;
            break;
          case 7:
            value_domicilio = 48;
            break;
          default:
            value_domicilio = 33;
        }
        switch (scoreCigarros) {
          case 3:
            value_cigarros = 40;
            break;
          case 5:
            value_cigarros = 45;
            break;
          case 7:
            value_cigarros = 50;
            break;
          default:
            value_cigarros = 35;
        }
        switch (scoreRestaurante) {
          case 3:
            value_restaurantes = 80;
            break;
          case 5:
            value_restaurantes = 85;
            break;
          case 7:
            value_restaurantes = 90;
            break;
          default:
            value_restaurantes = 75;
        }

        var words = [
          {
            value: 120,
            word: "main node",
            group: "gastos",
            name: "GASTOS HORMIGA",

            children: [
              {
                value: value_cafe,
                group: "cafePadre",
                myImg: "src/assets/img/cafe.png",
                children: [],
              },
              {
                value: value_antojos,
                group: "antojosPadre",
                myImg: "src/assets/img/antojos.png",
                children: [],
              },
              {
                value: value_propina,
                group: "propinaPadre",
                myImg: "src/assets/img/propina.png",
                children: [],
              },
              {
                value: value_agua,
                group: "aguaPadre",
                myImg: "src/assets/img/agua.png",
                children: [],
              },
              {
                value: value_domicilio,
                group: "domicilioPadre",
                myImg: "src/assets/img/delivery.png",
                children: [],
              },
              {
                value: value_cigarros,
                group: "cigarrosPadre",
                myImg: "src/assets/img/cigarros.png",
                children: [],
              },
              {
                value: value_restaurantes,
                group: "restaurantesPadre",
                myImg: "src/assets/img/restaurantes.png",
                children: [],
              },
            ],
          },
        ];
        for (var i = 1; i <= scoreCafe; i++) {
          words[0].children[0].children.push({
            value: 10,
            fam: "child",
            group: "cafe",
          });
        }
        for (var i = 1; i <= scoreAntojos; i++) {
          words[0].children[1].children.push({
            value: 10,
            group: "antojos",
            fam: "child",
          });
        }
        for (var i = 1; i <= scorePropina; i++) {
          words[0].children[2].children.push({
            value: 8,
            group: "propina",
            fam: "child",
          });
        }
        for (var i = 1; i <= scoreAgua; i++) {
          words[0].children[3].children.push({
            value: 7,
            group: "agua",
            fam: "child",
          });
        }
        for (var i = 1; i <= scoreDomicilio; i++) {
          words[0].children[4].children.push({
            value: 10,
            group: "domicilio",
            fam: "child",
          });
        }
        for (var i = 1; i <= scoreCigarros; i++) {
          words[0].children[5].children.push({
            value: 8,
            group: "cigarros",
            fam: "child",
          });
        }
        for (var i = 1; i <= scoreRestaurante; i++) {
          words[0].children[6].children.push({
            value: 10,
            group: "restaurantes",
            fam: "child",
          });
        }

        // Termina data
        var w = 1200,
          h = 1200,
          radius = 10,
          nodeParent,
          linkParent,
          nodeChild,
          linkChild,
          root;

        var force = d3.layout
          .force()
          .linkDistance(function (d) {
            if (d.fam === "child") {
              return -30; // Return a different link distance for parents
            } else {
              return -130; //Return a different link distance for children
            }
          })
          .on("tick", tick)
          .charge(function (d) {
            if (d.fam === "child") {
              return -2000; // Return a different link distance for parents
            } else {
              return -10000; // Return a different link distance for children
            }
            // return -3500;
          })
          .size([w, h - 160]);

        var svg = d3
          .select("#viz")
          .append("svg")
          .attr("id", "my_viz")
          .attr("width", w)
          .attr("height", h);

        root = words[0]; //set root node
        root.fixed = true;
        root.x = w / 2;
        root.y = h / 2 - 80;

        var link = svg.selectAll(".link"),
          node = svg.selectAll(".node");

        update();

        function update() {
          var nodes = flatten(root),
            links = d3.layout.tree().links(nodes);

          // Restart the force layout.
          force.nodes(nodes).links(links).start();

          // Update the links…
          link = link.data(links, function (d) {
            return d.target.id;
          });
          link.exit().remove();

          // Enter any new links.
          link.enter().insert("line", ".node").attr("class", "link");

          // Update the nodes…
          node = node.data(nodes, function (d) {
            return d.id;
          });
          node.exit().remove();

          var nodeEnter = node
            .enter()
            .append("g")
            .attr("class", "node")
            .call(force.drag);

          nodeEnter
            .append("circle")
            .call(force.drag)
            .attr("r", function (d) {
              return d.value;
            })
            // .attr("r",10)
            .style("fill", color);

          nodeEnter
            .append("text")
            .attr("text-anchor", "middle")
            .text(function (d) {
              return d.name;
            })
            .attr("dx", function (d) {
              return d.value;
            })
            .attr("dy", function (d) {
              return d.value;
            })
            .attr("font-family", "sans-serif")
            .attr("letter-spacing", "1.8px")
            .attr("fill", "#fff")
            .attr("font-size", "13px")
            .attr("font-weight", "bold")
            .attr("transform", function (d) {
              var x = -d.value;
              var y = -d.value + 10;
              return "translate(" + x + "," + y + ")";
            });

          nodeEnter
            .append("svg:image")
            .attr("xlink:href", function (d) {
              return d.myImg;
            })
            .attr("width", function (d) {
              return d.value;
            })
            .attr("height", function (d) {
              return d.value;
            })
            .attr("transform", function (d) {
              var x = -d.value / 2;
              var y = -d.value / 2;
              return "translate(" + x + "," + y + ")";
            });
        }

        function tick() {
          link
            .attr("x1", function (d) {
              return d.source.x;
            })
            .attr("y1", function (d) {
              return d.source.y;
            })
            .attr("x2", function (d) {
              return d.target.x;
            })
            .attr("y2", function (d) {
              return d.target.y;
            });

          node.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });
        }

        // Color leaf nodes orange, and packages white or blue.
        function color(d) {
          switch (d.group) {
            case "cafePadre": //adverb
              return "#122f36";
              break;
            case "antojosPadre": //noun
              return "#00bfb1";
              break;
            case "propinaPadre": //verb
              return "#a57d21";
              break;
            case "aguaPadre": //adjective
              return "#4a8b8e";
              break;
            case "domicilioPadre":
              return "#87e1d1";
              break;
            case "cigarrosPadre":
              return "#a0cd9d";
              break;
            case "restaurantesPadre":
              return "#005470";
              break;
            case "gastosPadre":
              return "#006568";
              break;
            case "cafe": //adverb
              return "#122f36";
              break;
            case "antojos": //noun
              return "#00bfb1";
              break;
            case "propina": //verb
              return "#a57d21";
              break;
            case "agua": //adjective
              return "#4a8b8e";
              break;
            case "domicilio":
              return "#87e1d1";
              break;
            case "cigarros":
              return "#a0cd9d";
              break;
            case "restaurantes":
              return "#005470";
              break;
            case "gastos":
              return "#006568";
              break;
            default:
              return "#9b59b6";
          }
        }

        // Returns a list of all nodes under the root.
        function flatten(root) {
          var nodes = [],
            i = 0;

          function recurse(node) {
            if (node.children)
              node.size = node.children.reduce(function (p, v) {
                return p + recurse(v);
              }, 0);
            if (!node.id) node.id = ++i;
            nodes.push(node);
            return node.size;
          }

          root.size = recurse(root);
          return nodes;
        }
      })
      .catch((error) => {
        console.error("Failed to load D3.js:", error);
      });
  }, []);
  return (
    <>
      <div id="viz"></div>
      {/* <button
                onClick={handleDownload}
                className="mt-14 float-right drop-shadow-2xl bg-[#082f49] text-white rounded-full w-40 py-1 circular-light tracking-wide text-lg hover:scale-[1.1] transition ease-in-out"
            >
                Descargar
            </button> */}
    </>
  );
};
