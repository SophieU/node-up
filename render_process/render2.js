const {ipcRenderer} = require('electron')

let btn = document.querySelector('#btn2')
const input = document.querySelector('#value2')

btn.addEventListener('click',function(){
    let value = input.value
    ipcRenderer.send('render2',value)
},false)

ipcRenderer.on('toRender2',function(event,args){
    console.log(args)
})