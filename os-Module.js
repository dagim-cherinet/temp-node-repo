const os = require("os");
//user info
const user = os.userInfo();
console.log(user);
//computer up time
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
