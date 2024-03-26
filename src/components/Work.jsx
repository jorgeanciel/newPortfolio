import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../variants";
import Img1 from "../assets/pokedex.png";
import Img2 from "../assets/ecomerce.png";
import Img3 from "../assets/rick and morty.png";
import Img4 from "../assets/GcDesk.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                {" "}
                Proyectos Personales realizados con React, el diseño hecho con
                taildwind, Boostrap y Css.
                <br /> Consumo de API desde JS con Axios y Fetch.
                <br />
                Creacion de mi propia API con NodeJs y Postgres en el E-comerce
              </p>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duartion-300"></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Desing</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50">
                <a
                  href="https://ticket-demo10.netlify.app/"
                  className="text-3xl text-white"
                  target="__blank"
                >
                  Sistema de Ticket
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8  lg:max-h-[800px]"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duartion-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Desing</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50">
                <a
                  href="https://ikaro-ecomerces.netlify.app/"
                  className="text-3xl text-white"
                  target="__blank"
                >
                  Ecomerce
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duartion-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Desing</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50">
                <a
                  href="https://ikaro-pokedex.netlify.app/pokedex"
                  className="text-3xl text-white"
                  target="__blank"
                >
                  Pokedex
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duartion-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Desing</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50">
                <a
                  href="https://ikaro-rickandmorty.netlify.app/"
                  className="text-3xl text-white"
                  target="__blank"
                >
                  Rick and Morty
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
