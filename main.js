const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

app.on('ready',function(){
    let win = new BrowserWindow({
        width: 1280,
        height:720,
        webPreferences: {
            nodeIntegration:true,  
            nodeIntegrationInSubframes: true,
            nodeIntegrationInWorker: true,
            contextIsolation:false    
        }
    })
    win.loadURL(path.join('file://',__dirname, './index.html')) // mac file://, __dirname, './index.html'
    win.webContents.openDevTools()
    win.on('close',function(){
        win = null
    })
    ipcMain.on('test',function(event,msg){
        console.log('Main:', msg)
        event.sender.send('test2','from main')
    })
    require('./menu')
})