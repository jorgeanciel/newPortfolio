import React from "react";
import Logo1 from "../assets/JavaScript-logo.png";
import Logo2 from "../assets/React-icon.svg.png";
import Logo3 from "../assets/nodeJS.png";
import Logo4 from "../assets/taildwind.png";
import Logo5 from "../assets/material.png";
import Logo6 from "../assets/postgres.png";
import Logo7 from "../assets/mysql.png";
import Logo8 from "../assets/sequelize.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-gradient">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Developer with over 1 year of experience
            </h3>
            <p className="mb-6">
              Soy una persona proactiva, organizada y responsable, con buenas
              relaciones interpersonales. Me destaco por el buen trabajo en
              equipo y la rápida toma de decisiones. Busco un puesto de trabajo
              desafiante para continuar aprendiendo.
            </p>
            <div className="flex gap-x-6 lg:gap-x-8 mb-12 flex-wrap">
              <div>
                <div className="text-[30px]">JavaScript</div>
                <div className="flex justify-center">
                  <img className="w-[100px]" src={Logo1} alt="" />
                </div>
              </div>
              <div>
                <div className="text-[30px]">React</div>
                <div className="flex justify-center">
                  <img className="w-[60px] pt-2" src={Logo2} alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-[30px]">Material UI</h1>
                <div className="flex justify-center m-2">
                  <img className="w-[60px]" src={Logo5} alt="" />
                </div>
              </div>
              <div>
                <div className="text-[30px]">Taildwind</div>
                <div className="flex justify-center">
                  <img className="w-[70px]" src={Logo4} alt="" />
                </div>
              </div>
              <div>
                <div className="text-[30px]">NodeJs</div>
                <div className="flex justify-center">
                  <img className="w-[55px] pt-1" src={Logo3} alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-[30px]">Sequelize</h1>
                <div className="flex justify-center">
                  <img className="w-[60px]" src={Logo8} alt="" />
                </div>
              </div>

              <div>
                <h1 className="text-[30px]">Postgres</h1>
                <div>
                  <img className="w-[100px]" src={Logo6} alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-[30px]">MySQL</h1>
                <div>
                  <img className="w-[80px]" src={Logo7} alt="" />
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center mx-auto">
              <button className="btn p-3">Contact me</button>
              <a
                href="https://www.linkedin.com/in/jorgechirinosalferez"
                className="text-gradient btn-link"
                target="__blank"
              >
                My Linkedin
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
