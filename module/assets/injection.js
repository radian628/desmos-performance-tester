 const setState = () => {
    /*CALCSTATE_START*/
    /*CALCSTATE_END*/
 }

const timeInWorker = [];

function mean(data) {
  return data.reduce((prev, curr) => prev + curr, 0) / data.length;
}

function loop() {
  if (window.Calc) {
    setState();
    Calc.controller.dispatcher.register(evt => {
      if (evt.type != "on-evaluator-changes") return;
      timeInWorker.push(evt.timingData.timeInWorker);
    })
    return;
  }
  setTimeout(loop, 0);
}

loop();

function getPerfInfo() {
  return {
    timeInWorker: mean(timeInWorker),
  };
}