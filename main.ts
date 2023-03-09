import { invokeEvent, terminateWorker } from "./workerManager.ts";
import logModule from "./log.ts";

logModule.log("Hello from main.ts");
await invokeEvent();
terminateWorker();
