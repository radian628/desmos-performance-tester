 const setState = () => {
    /*CALCSTATE_START*/
    /*CALCSTATE_END*/
 }

const timingData = [];

function loop() {
  if (window.Calc) {
    setState();
    Calc.controller.dispatcher.register(evt => {
      if (evt.type != "on-evaluator-changes") return;
      timingData.push(evt.timingData.timeInWorker);
    })
    return;
  }
  setTimeout(loop, 0);
}

loop();

function getPerfInfo() {
  return timingData.reduce((prev, curr) => prev + curr, 0) / timingData.length;
}