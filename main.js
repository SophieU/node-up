const {app, BrowserWindow} = require('electron')

app.on('ready',function(){
    const win = new BrowserWindow({
        width: 300,
        height:300
    })
    win.loadURL()
})