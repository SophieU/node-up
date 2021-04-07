const {Menu, app} = require('electron')

let template = [
    {label:'帮助'},
    {
        label: '文件',
        submenu:[
            {
                label: '打开',
                checked: true,
                type: 'checkbox'
            },{
                label: '退出',
                click: function(){
                    console.log('退出')
                    app.quit()
                }
            }
        ]
    }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)