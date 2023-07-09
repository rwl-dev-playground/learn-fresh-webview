import { dirname, join } from "$std/path/mod.ts";
import { Webview } from "webview";

const worker = new Worker(
  join(dirname(import.meta.url), "main.ts"),
  { type: "module" },
);

const webview = new Webview();
webview.navigate("http://localhost:8000/");

console.log("[runner] worker started");
webview.run();
worker.terminate();