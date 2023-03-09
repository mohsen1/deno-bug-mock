import logModule from "./log.ts";

logModule.log("Hello from worker.ts");
self.onmessage = (event) => {
  logModule.log(event.data);
  self.postMessage("done");
};
