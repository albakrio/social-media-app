const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://jovial-liskov-0f0fb7.netlify.app";

module.exports = baseUrl;
