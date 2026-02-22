import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import connectDB from "./config/db.js";
import Contact from "./models/contactMe.js";


dotenv.config();
connectDB();


const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-tau-lilac-1lc4b3ndzz.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Contact.create({ name, email, message });
    await resend.emails.send({
      from: "Portfolio Contact <Portfolio@resend.dev>",
      to: "sonubbu7465@gmail.com",
      subject: `New Contact Message from ${name}`,
      reply_to: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
