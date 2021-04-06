const {ipcRenderer} = require('electron')


let btn = document.querySelector('#btn')
btn.onclick=function(){
  ipcRenderer.send('test','哈中哈哈')
}
ipcRenderer.on('test2',function(event, msg){
   console.log('render: ', msg)
})