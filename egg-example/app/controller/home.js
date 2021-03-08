'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg  first!';
  }
  async demo() {
    const {ctx} = this;
    ctx.body = 'demo page'
  }

  async newApplication(){
    const {ctx,app} = this
    //这样就拿到了scripts方法
    const packages   = app.package('scripts')
    // console.log(packages);
    const allPack = app.allPackage
    console.log(allPack)
    ctx.body =  "new application"
  }

  async newContext(){
    const {ctx } = this
    const params  =ctx.params()
    console.log(params);
    ctx.body = 'new Context'
  }

  async newRequest(){
    const {ctx} = this
    ctx.body = ctx.request.token
  }

  async newResponse(){
    const  {ctx} = this
    ctx.response.token = 'abcccc'
    ctx.body  =  'newResponse'
  }
}

module.exports = HomeController;
