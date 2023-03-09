import { stub } from "https://deno.land/std@0.165.0/testing/mock.ts";

import { invokeEvent } from "./workerManager.ts";
import logModule from "./log.ts";

stub(logModule, "log", (message: string) => {
});

Deno.test("invokeEvent", async () => {
  await invokeEvent();
});
