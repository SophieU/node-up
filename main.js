const {app, BrowserWindow} = require('electron')
const path = require('path')

app.on('ready',function(){
    const win = new BrowserWindow({
        width: 300,
        height:300,
        movable: false
    })
    win.loadURL(path.join(__dirname, './index.html')) // mac file://, __dirname, './index.html'
    win.on('close',function(){
        win = null
    })
})