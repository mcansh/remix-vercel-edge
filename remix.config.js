/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.ts",
  serverBuildPath: "api/edge.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
};
