import { createRequestHandler } from "@remix-run/server-runtime";
import * as build from "@remix-run/dev/server-build";

export default async function edgeHandler(request: Request) {
  let handler = createRequestHandler(build as any, "production");
  let response = await handler(request);
  return response;
}
