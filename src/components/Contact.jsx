import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../variants";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: form.message,
          email: form.email,
          title: `Mensaje enviado de ${form.name}`,
        }),
      });
      if (response.ok) {
        alert("Mensaje enviado correctamente 🚀");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error enviando mensaje");
      }
    } catch (error) {
      alert("Error de conexion");
    }
    setLoading(false);
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let´s go <br />
                together!
              </h2>
            </div>
          </motion.div>

          {/**form*/}
          <motion.form
            onSubmit={handleOnSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 mb-24 p-6 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              type="text"
              className="bg-transparent border-b py-3 outline-none
               w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-none"
              placeholder="Your message"
              name="message"
              value={form.value}
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-lg" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
