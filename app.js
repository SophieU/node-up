const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const bodyParser = require('koa-bodyparser')
// 一个中间件
app.use(async (ctx, next) => {
    console.log('打印日志')
    await next()
})
app.use(bodyParser())
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name
    ctx.response.body=`<h1>Hello, ${name}</h1>`
})
router.get(`/`, async (ctx, next) => {
    ctx.response.body=`<h1>This is Index</h1>`
})
router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(ctx.request)
    console.log(`signin with name :${name},password:${password}`)
    if (name === 'koa' && password === '12345') {
        ctx.response.body=`<h1>Welcome,${name}</h1>`
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
})
app.use(router.routes())

app.listen(3000)
console.log('server is started at 3000')