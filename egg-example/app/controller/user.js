'use strict'
const Controller  = require('egg').Controller;
class UserController extends Controller {

  async index(){
    const {ctx} = this
    // ctx.body = "user index"
    await ctx.render('user.html',{
      id:100,
      name:'admin'
    })
  }

  async lists(){
    const {ctx}= this
    await new Promise(resolve =>{
      setTimeout(() => {
        resolve()
      },1500)
    })
    ctx.body = [{id:123}]
  }

  async detail(){
    const {ctx} = this
    const res = await ctx.service.user.detail(10)
    console.log(res);
    ctx.body  = 'detail'
  }

  async detail2(){
    const {ctx} = this
    console.log(ctx.params);
    ctx.body  = 'details'
  }

  async add(){
    const {ctx} = this
    console.log(ctx.request.body)
    const rule =  {
      name:{type:'string'},
      age:{type:'number'}
    }
    ctx.validate(rule)
    ctx.body  = {
      status: 200,
      data: ctx.request.body
    }
  }


}

module.exports = UserController;
