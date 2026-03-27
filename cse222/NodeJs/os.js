import os from "os";
console.log(`Operating system: ${os.platform()}`);
console.log("Operating system type: ",os.type());
console.log("Cpu arch ",os.arch());
console.log("Cores ",os.cpus().length);
console.log("USER ",os.userInfo());


