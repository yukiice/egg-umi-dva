'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/user', controller.user.index);
  router.get('/user/lists', controller.user.lists);
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail2/:id', controller.user.detail2);
  router.post('/user/add', controller.user.add);
  router.get('/curl/get', controller.curl.curlGet);
  router.post('/curl/post', controller.curl.curlPost);
  router.get('/home/new', controller.home.newApplication);
  router.get('/home/context', controller.home.newContext);
  router.post('/home/context', controller.home.newContext);
  router.get('/home/request', controller.home.newRequest);
  router.get('/home/response', controller.home.newResponse);
  router.resources('userss', '/userss', controller.userss);
};
