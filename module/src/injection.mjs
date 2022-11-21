// const setState = () => Calc.setState(JSON.parse(/*CALCSTATE_START*/
//   '{"version":9,"randomSeed":"7594c975aed17f2eab78334d2086b93b","graph":{"viewport":{"xmin":-1.568813360289108,"ymin":-4.228502285053802,"xmax":5.147162070229346,"ymax":3.4505273939262033}},"expressions":{"list":[{"type":"expression","id":"1","color":"#c74440","latex":"c_{atmullRom}\\\\left(p_{0},p_{1},p_{2},p_{3},t\\\\right)=0.5\\\\left(2p_{1}+t\\\\left(-p_{0}+p_{2}\\\\right)+t^{2}\\\\left(2p_{0}-5p_{1}+4p_{2}-p_{3}\\\\right)+t^{3}\\\\left(-p_{0}+3p_{1}-3p_{2}+p_{3}\\\\right)\\\\right)"},{"type":"expression","id":"77","color":"#c74440","latex":"f=-2.33","slider":{"playDirection":-1,"isPlaying":true}},{"type":"expression","id":"2","color":"#2d70b3","latex":"a=\\\\left(2.83,-2.28+f\\\\right)"},{"type":"expression","id":"3","color":"#388c46","latex":"b=\\\\left(-0.23,-2.5\\\\right)"},{"type":"expression","id":"4","color":"#6042a6","latex":"c=\\\\left(3.86,0.12\\\\right)"},{"type":"expression","id":"5","color":"#000000","latex":"d=\\\\left(2.4,1.47\\\\right)"},{"type":"expression","id":"7","color":"#2d70b3","latex":"c_{atmullRom}\\\\left(a,a,b,c,t\\\\right)"},{"type":"expression","id":"6","color":"#c74440","latex":"c_{atmullRom}\\\\left(a,b,c,d,t\\\\right)","parametricDomain":{"min":"0","max":"1"},"domain":{"min":"0","max":"1"}},{"type":"expression","id":"8","color":"#388c46","latex":"c_{atmullRom}\\\\left(b,c,d,d,t\\\\right)"}]}}'
// /*CALCSTATE_END*/));

const timingData = [];

function loop() {
  if (window.Calc) {
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