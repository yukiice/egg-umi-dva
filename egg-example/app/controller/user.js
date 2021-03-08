"use strict";
const Controller = require("egg").Controller;

class UserController extends Controller {
  async index() {
    const { ctx, app } = this;
    // console.log(app.mysql);
    // ctx.body = "user index"
    await ctx.render("user.html", {
      id: 100,
      name: "admin",
    });
  }

  async lists() {
    const { ctx, app } = this;
    // await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 1500);
    // });
    //查询sql

    // ctx.body = await ctx.service.user.lists();


    // sequelize
    const res = await ctx.model.User.findAll()
    ctx.body =res
  }

  async detail() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(10);
    console.log(res);
    ctx.body = "detail";
  }

  async detail2() {
    const { ctx } = this;
    // const res = await ctx.service.user.detail2(ctx.params.id);
    // ctx.body = res;
    ctx.body = 'hello detail2'
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' }
    };
    ctx.validate(rule);
    ctx.body = {
      status: 200,
      data: ctx.request.body
    };
    // const res = await ctx.service.user.add(ctx.request.body);
    // ctx.body = {
    //   status: 200,
    //   data: res,
    // };
  }
}

module.exports = UserController;
