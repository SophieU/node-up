const {ipcRenderer} = require('electron')
const {$} = require('./helper')

$('addMusicBtn').addEventListener('click',function(){
    ipcRenderer.send('addMusicWindow')
},false)