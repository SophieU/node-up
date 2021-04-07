const {ipcRenderer} = require('electron')

const btn = document.querySelector('#btn')
const input = document.querySelector('#value1')

btn.addEventListener('click',function(){
    let value = input.value
    ipcRenderer.send('render1',value)
},false)

ipcRenderer.on('toRender1',function(event, args){
    console.log(args)
})