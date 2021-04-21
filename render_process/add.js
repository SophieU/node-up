const {ipcRenderer} = require('electron')
const {$} = require('./helper')
const path = require("path")
const Store = require('store')
const storeInstance = new Store()
console.log(app.getPath('userData'))

let musicFilesPath = []

$('selectMusicBtn').addEventListener('click',function(){
    ipcRenderer.send('open-music-file')
},false)

ipcRenderer.on('selected-file', (event, path)=>{
    if(Array.isArray(path)){
        musicFilesPath = path
        renderHtml(path)
    }
})

const renderHtml = pathes => {
    const musicList = $('musicList')
    const musicItemsHTML = pathes.reduce((html, music)=>{
        html+=`<li class="list-group-item">${path.basename(music)}</li>`
        return html
    },'')
    musicList.innerHTML = `<ul class="list-group">${musicItemsHTML}</ul>`
}

$('importBtn').addEventListener('click',function(){
    ipcRenderer.send()
})