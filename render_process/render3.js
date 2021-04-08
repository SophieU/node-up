// 打开新窗口
function openNewWindow(){
    window.open('child.html', "子窗口")
}

window.addEventListener('message',function(event){
    console.log(event)
    let message = event.data
},false)