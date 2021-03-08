const Subscription = require('egg').Subscription;
const dayjs = require('dayjs');

class getInfo extends Subscription {
  static get schedule() {
    return {
      interval: '1m', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  async subscribe() {
    const { ctx } = this;
    const info = await ctx.method;
    console.log(dayjs(Date.now())
      .format('YYYY-MM-DD HH:mm:ss'), info);
  }
}

module.exports = getInfo;
