import process from "node:process";
globalThis.process = process;

export * from "../server/server.js";
export { default } from "../server/server.js";
