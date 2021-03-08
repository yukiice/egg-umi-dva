module.exports = options => {
  console.log('options', options);
  return async (ctx, next) => {
    const url = ctx.request.url;
    console.log('url is ', url);
    const user = ctx.session.user;
    if (!user && !options.exclude.includes(ctx.request.url.split('?')[0])) {
      ctx.body = {
        code: 1001,
        errMsg: '用户未登录'
      };
    } else {
      await next();
    }
  };
};
