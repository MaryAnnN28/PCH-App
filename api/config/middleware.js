module.exports = {
  load: {
    before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
    after: ["router"],
  },
  settings: {
    cors: {
      enabled: true,
      origin: ["*"],
    },
  },
};
