const {app, BrowserWindow} = require('electron')
const path = require('path')

app.on('ready',function(){
    const window = new BrowserWindow({
        width: 500,
        height:500,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    window.loadURL(path.join(__dirname,'./index.html'))
    window.webContents.openDevTools()
    window.on('close',function(){
        window = null
    })
})