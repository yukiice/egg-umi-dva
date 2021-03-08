'use strict';
const path = require('path');
/** @type path.PlatformPath | path | path */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
};

exports.auth = {
  enable: false,
  path: path.join(__dirname, '../lib/plugin/egg-auth')
};

exports.mysql = {
  enable: false,
  package:'egg-mysql'
}

exports.sequelize  ={
  enable: true,
  package:'egg-sequelize'
}

