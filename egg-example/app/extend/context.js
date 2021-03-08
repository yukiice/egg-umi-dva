// const os = require('os')
//
// module.exports ={
//   get info(){
//     return {
//       memory: os.totalmem() / 1024 / 1024 / 1024 + "G",
//       platform: os.platform(),
//       cpus: os.cpus.length
//     }
//   }
// }

module.exports = {
  params(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    } else {
      return key ? this.request.body[key] : this.request.body;
    }
  }
};
