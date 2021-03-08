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
  config.middleware = ['httpLog'];


  //session设置
  config.session = {

  }


  //auth处理
  config.auth  ={
    exclude:['/home','/user','/login','logout']
  }


  //csrf关闭和开启
  config.security = {
    csrf:{
      enable: false
    }
  }
  config.view ={
    mapping:{
      '.html':'ejs'
    }
  }
  config.ejs = {

  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
