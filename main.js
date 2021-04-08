const {app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')

let win = null
app.on('ready',function(){
    win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false,
            webviewTag: true,
        },
    })
    win.on('close',function(){
        console.log('窗口关闭')
        win= null
    })
    win.webContents.openDevTools()
    win.loadFile( "./index.html")
    ipcMain.on('render1',function(event, args){
        win.webContents.send('toRender2',args)
    })
    ipcMain.on('render2',function(event,args){
        win.webContents.send('toRender1',args)
    })

    ipcMain.on('openDialog',function(event,args){
        dialog.showMessageBox({
            title: '提示',
            message: '这是提示信息',
            buttons: ['确定', '取消']
        }).then(result=>{
            let index = result.response
            if(index===0){
                console.log('确定')
            }
        })
    })
})