var ws = require('nodejs-websocket');
var moment = require('moment');


function broadcast(data){
    server.connections.forEach(function(conn){
        conn.sendText(JSON.stringify(data))
    })
}

function getDate(){
    return moment().format("YYYY-MM-DD HH:mm:ss")
}

let users = [];

var server = ws.createServer(function(conn){
    conn.on('text',function(data){
        data = JSON.parse(data);
        if(data.type===1){
            users.push({
                nickname:data.nickname,
                uid:data.uid,
            })
            broadcast({
                type:1,
                nickname:data.nickname,
                msg:'欢迎'+data.nickname+'加入聊天室',
                time:getDate(),
                uid:data.uid,
            })
        }else{
            broadcast({
                type:2,
                nickname:data.nickname,
                msg:data.msg,
                uid:data.uid,
                time:getDate(),
            })
        }
    })
    conn.on('close',function(){
        console.log('连接关闭')
    })
    conn.on('error',function(){
        console.log('连接异常')
    })
}).listen(8001)

console.log('成功建立连接');