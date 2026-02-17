const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { title, message, email } = req.body;

  if (!title || !message || !email) {
    return res.status(400).json({ message: "Faltan campos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portafolio Web" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: title,
      text: `
Email del reclutador: ${email}

Mensaje:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error enviando correo" });
  }
};
