const {Menu} = require('electron')

const template = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
              
                click:function(){
                    console.log('new files')
                }
            },{
                type: 'separator'
            },{
                label: '新建窗口',
                accelerator: (function(){
                    console.log(process.platform)
                    if(process.platform === 'darwin'){
                        return 'alt+Command+M'
                    }else{
                        return 'alt+ctrl+M'
                    }
                })()
            }
        ]
    },{
        label: '编辑',
        type: 'checkbox',
        checked: true,
    }
]

let menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)