function detectIntent(message) {
  const text = message.toLowerCase();

  if (text.includes("hello")) {
    return "greeting";
  }

  if (text.includes("bye")) {
    return "farewell";
  }

  if (
    text.includes("excel") ||
    text.includes("csv")
  ) {
    return "file_question";
  }

  return "general";
}

module.exports = detectIntent;