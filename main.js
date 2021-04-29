const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path')

class AppWindow extends BrowserWindow{
    constructor(config, fileLocation){
        const baseConfig = {
            width: 800,
            height:500,
            webPreferences:{
                nodeIntegration: true,
                contextIsolation: false,
            }
        }
        const finalConfig = {...baseConfig, ...config}
        super(finalConfig)
        this.loadFile(fileLocation)
        this.once('ready-to-show', ()=>{
            this.show()
        })
    }
}
app.on('ready',function(){
    const window = new AppWindow({},path.join(__dirname,'./render_process/index.html'))
    window.webContents.openDevTools()
    window.webContents.on('did-finish-load', ()=>{
        // window.send('getTracks', myStore.getTracks)
    })
    ipcMain.on('addMusicWindow',function(event){
        const addWindow =  new AppWindow({
            parent: window
        },path.join(__dirname,'./render_process/add.html'))
        addWindow.webContents.openDevTools()
        
    })
    ipcMain.on('open-music-file', (event) =>{
        dialog.showOpenDialog({
            properties:['openFile','multiSelections'],
            filters:[
                {name: 'music', extensions:['mp3']}
            ]
        }).then(res=>{
            if(res.filePaths){
                event.sender.send('selected-file',res.filePaths)
            }
        })
    })

    ipcMain.on('add-tracks', (event) => {
        // const updatedTracks = myStore.addTracks(tracks).getTracks()
        // window.send('getTracks', updatedTracks)
        console.log(app.getPath('userData'))
    })

})
