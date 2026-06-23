const express = require("express");
const router = express.Router();

const OpenAI = require("openai");
const detectIntent =
  require("../services/nlp");

const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const intent =
      detectIntent(message);

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              `Intent: ${intent}`
          },
          {
            role: "user",
            content: message
          }
        ]
      });

    res.json({
      reply:
        completion.choices[0]
          .message.content
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Server Error"
    });
  }
});

module.exports = router;