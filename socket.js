var WS = require('nodejs-websocket');
var moment = require('moment');

console.log('start establish connection');
let users = [];

//向所有连接的客户发送消息
function broadcast(data) {
    server.connections.forEach(function (conn) { 
        conn.sendText(JSON.stringify(data))
    })
}

function getDate() {
    return moment().format("YYYY-MM-DD HH:mm:ss")
}

var server = WS.createServer(function (conn) { 
    conn.on('text', function (data) {
        data = JSON.parse(data);
        if (data.type === 1) {
            users.push({
                nickname: data.nickname,
                uid: data.uid
            });
            broadcast({
                type: 1,
                date: getDate(),
                msg: data.nickname + "加入聊天室",
                users: users,
                uid: data.uid,
                nickname: data.nickname
            })
        } else {
            broadcast({
                type: 2,
                date: getDate(),
                msg: data.msg,
                uid: data.uid,
                nickname: data.nickname,
            });
        }
    })
    conn.on('close', function (code, reason) {
        console.log('关闭连接')
    })
    conn.on('error', function (code, reason) { 
        console.log('异常关闭')
    })
}).listen(8001)
console.log('websocket 建立完毕')