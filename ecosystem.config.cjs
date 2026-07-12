module.exports = {
  apps: [
    {
      name: "me-itnx",
      script: "npm",
      args: "start",
      cwd: __dirname,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
