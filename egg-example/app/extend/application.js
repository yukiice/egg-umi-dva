const path = require('path')

function getPack(){
  const filePath  =path.join(process.cwd(),'package.json')
  const pack  = require(filePath)
  return pack
}
module.exports = {
//  方法扩展
 package(key){
   const pack = getPack()
   return key ? pack[key] : pack
 },

// 属性扩展
  get allPackage(){
   return getPack()
  }
}
