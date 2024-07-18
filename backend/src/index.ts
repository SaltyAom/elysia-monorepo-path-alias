import { Elysia } from "elysia";
import { plugin } from "@backend/module";

const app = new Elysia().use(plugin).listen(3000);

export type app = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
