const wb = document.querySelector('webview')
const loading = document.querySelector('.loading')

wb.addEventListener('did-start-loading',()=>{
    loading.innerHTML = 'loading...............'
})
wb.addEventListener('did-stop-loading',()=>{
    loading.innerHTML='OK.'
    wb.insertCSS(`
    iframe{
        width: 100%;
        height: 400px;
    }
    #su{
        background: red!important;
    }
    `)
})
