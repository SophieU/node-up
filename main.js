const {app, BrowserWindow} = require('electron')
const path = require('path')

app.on('ready',function(){
    let win = new BrowserWindow({
        width: 1280,
        height:720,
        movable: false
    })
    win.loadURL(path.join(__dirname, './index.html')) // mac file://, __dirname, './index.html'
    win.webContents.openDevTools()
    win.on('close',function(){
        win = null
    })

    require('./menu')
})