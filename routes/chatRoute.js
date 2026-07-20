const express = require("express");
const router = express.Router();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    res.json({
      reply: result.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Something went wrong.",
    });
  }
});

module.exports = router;