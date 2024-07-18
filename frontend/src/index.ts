import { treaty } from "@elysiajs/eden";
import { type app } from "@backend";

// Ignore the error, should work if you have a proper moonorepo setup which install package in root instead of relative node_modules
const api = treaty<app>("localhost:3000");

// Here is an important path, return type here should be correct
const { data } = await api.plugin.get()
