const {app, BrowserWindow, ipcMain, webContents } = require('electron')
const path = require('path')

let win = null
app.on('ready',function(){
    win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.on('close',function(){
        console.log('窗口关闭')
        win= null
    })
    win.webContents.openDevTools()
    win.loadURL(path.join("file://", __dirname, "./index.html"))
    require('./main_process/menu')
    ipcMain.on('render1',function(event, args){
        win.webContents.send('toRender2',args)
    })
    ipcMain.on('render2',function(event,args){
        win.webContents.send('toRender1',args)
    })

})