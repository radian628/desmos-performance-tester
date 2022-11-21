import * as desmosPerf from "desmos-performance-tester";
import * as puppeteer from "puppeteer";

const browser = await puppeteer.launch();

const testResult = await desmosPerf.test(browser, {
    source: { graphState: `{"version":9,"randomSeed":"7594c975aed17f2eab78334d2086b93b","graph":{"viewport":{"xmin":-1.568813360289108,"ymin":-5.943929865739272,"xmax":5.147162070229346,"ymax":5.165954974611673}},"expressions":{"list":[{"type":"expression","id":"1","color":"#c74440","latex":"c_{atmullRom}\\\\left(p_{0},p_{1},p_{2},p_{3},t\\\\right)=0.5\\\\left(2p_{1}+t\\\\left(-p_{0}+p_{2}\\\\right)+t^{2}\\\\left(2p_{0}-5p_{1}+4p_{2}-p_{3}\\\\right)+t^{3}\\\\left(-p_{0}+3p_{1}-3p_{2}+p_{3}\\\\right)\\\\right)"},{"type":"expression","id":"77","color":"#c74440","latex":"f=-3.5","slider":{"isPlaying":true}},{"type":"expression","id":"2","color":"#2d70b3","latex":"a=\\\\left(2.83,-2.28+f\\\\right)"},{"type":"expression","id":"3","color":"#388c46","latex":"b=\\\\left(-0.23,-2.5\\\\right)"},{"type":"expression","id":"4","color":"#6042a6","latex":"c=\\\\left(3.86,0.12\\\\right)"},{"type":"expression","id":"5","color":"#000000","latex":"d=\\\\left(2.4,1.47\\\\right)"},{"type":"expression","id":"7","color":"#2d70b3","latex":"c_{atmullRom}\\\\left(a,a,b,c,t\\\\right)"},{"type":"expression","id":"6","color":"#c74440","latex":"c_{atmullRom}\\\\left(a,b,c,d,t\\\\right)","parametricDomain":{"min":"0","max":"1"},"domain":{"min":"0","max":"1"}},{"type":"expression","id":"8","color":"#388c46","latex":"c_{atmullRom}\\\\left(b,c,d,d,t\\\\right)"}]}}` },
    duration: 4000,
    name: "Catmull-Rom Curves"
  })

console.log(testResult);

await browser.close();