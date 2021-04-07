const {ipcRenderer} = require('electron')

const btn = document.querySelector('#btn')
const input = document.querySelector('#value1')
const btn3= document.querySelector('#btn3')

btn.addEventListener('click',function(){
    let value = input.value
    ipcRenderer.send('render1',value)
},false)

ipcRenderer.on('toRender1',function(event, args){
    console.log(args)
})

btn3.addEventListener('click',function(){
    ipcRenderer.send('openDialog')
})