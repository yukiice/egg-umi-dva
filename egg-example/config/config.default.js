/* eslint valid-jsdoc: "off" */

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614951406021_2432';

  // add your middleware config here
  config.middleware = [ 'httpLog' ];


  //session设置
  config.session = {};


  //auth处理
  config.auth = {
    exclude: [ '/home', '/user', '/login', 'logout' ]
  };

  // //mysql处理
  // config.mysql = {
  //   app:true,
  //   agent:false,
  //   client:{
  //     host:'127.0.0.1',
  //     port:'3306',
  //     user:'root',
  //     password:'123456789',
  //     database:'egg_mysql_demo'
  //   }
  // }


  // sequelize配置
  config.sequelize = {
    dialect:'mysql',
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'123456789',
    database:'egg_mysql_demo',
    define:{
      // 取消自动添加时间
      timestamps:false,
      // 原始表名称
      freezeTableName:true
    }
  }


  //csrf关闭和开启
  config.security = {
    csrf: {
      enable: false
    }
  };
  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  };
  config.ejs = {};

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
