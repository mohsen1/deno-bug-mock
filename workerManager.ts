const worker = new Worker(new URL("./worker.ts", import.meta.url), {
  type: "module",
});

export function invokeEvent() {
  return new Promise<void>((resolve) => {
    worker.onmessage = (e) => {
      if (e.data === "done") resolve();
    };
    worker.postMessage("event");
  });
}

export function terminateWorker() {
  worker.terminate();
}
