const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const controllers = require('./controller')
const nunjucks = require('nunjucks')

const app = new Koa()

// nunjucks
function createEnv(path, opts) {
    var 
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
        });
        if (opts.filters) {
            for (var f in opts.filters) {
                env.addFilter(f, opts.filters[f]);
            }
        }
        return env;
}
var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});
var s = env.render('hello.html', { name: '小明' })
console.log(s)
// 一个中间件
app.use(async (ctx, next) => {
    console.log('打印日志')
    await next()
})
app.use(bodyParser())
app.use(controllers())
app.use(router.routes())

app.listen(3000)
console.log('server is started at 3000')