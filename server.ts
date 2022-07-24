import { createRequestHandler } from "@remix-run/server-runtime";
import * as build from "@remix-run/dev/server-build";

export const config = {
  runtime: "experimental-edge",
};

export default async function edgeHandler(request: Request) {
  let handler = createRequestHandler(build as any, "development");
  let response = await handler(request);
  return response;
}
