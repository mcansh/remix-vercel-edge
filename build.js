#!/usr/bin/env node

const path = require("node:path");
const fse = require("fs-extra");

let edgeFunctionConfig = {
  runtime: "edge",
  name: "api/edge",
  deploymentTarget: "v8-worker",
  entrypoint: "api/edge.js",
};

let outputPath = path.join(
  __dirname,
  ".vercel",
  "output",
  "functions",
  "api",
  "edge.func",
  ".vc-config.json"
);

fse.ensureDirSync(path.dirname(outputPath));

fse.writeFileSync(outputPath, JSON.stringify(edgeFunctionConfig, null, 2));
