const {ipcRenderer} = require('electron')


let btn = document.querySelector('#btn')
btn.onclick=function(){
   ipcRenderer.send('openWindow', 'test')
}