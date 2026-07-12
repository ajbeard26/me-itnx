module.exports = {
  apps: [
    {
      name: "me-itnx",
      script: "scripts/start.mjs",
      interpreter: "node",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: "3011",
        HOSTNAME: "0.0.0.0"
      }
    }
  ]
};
