const {ipcRenderer} = require('electron')
const {$, converDuration} = require('./helper')

let musicAudio = new Audio()
let allTracks 
let currentTracks


$('addMusicBtn').addEventListener('click',function(){
    ipcRenderer.send('addMusicWindow')
},false)

const renderListHtml = tracks => {
    const trackLists = $('tracksList')
    const tracksListHtml = tracks.reduce((html, track) => {
        html += `<li class="row music-track list-group-item d-flex justify-content-between align-item-center">
            <div class="col-10">
                <i class="fas fa-music mr-2"></i>
                <strong>${track.fileName}</strong>
            </div>
            <div class="col-2">
                <i class ="fas fa-play mr-2" data-id="${track.id}"></i>
                <i class ="fas fa-trash-alt mr-2" data-id="${track.id}"></i>
            </div>
        </li>`
        return html
    }, '')
    const emptyTrackHtml = '<div class="alert alert-primary">还没添加任何音乐</div>'
    trackLists.innerHTML = tracks.length?
        `<ul class="list-group">${tracksListHtml}</ul>`
        :emptyTrackHtml
}

ipcRenderer.on('getTracks', (event, tracks) => {
    console.log('receive tracks', tracks)
    allTracks = tracks
    renderListHtml(tracks)
})

$('tracksList').addEventListener('click', event => {
    event.preventDefault()
    const {dataset, classList} = event.target
    const id = dataset && dataset.id
    if(id && classList.contains('fa-play')){
        // play music
        if(currentTracks && currentTracks.id === id ){
            // 点击的是当前播放音乐
            musicAudio.play()
        }else{
            // 播放新的歌曲
            currentTracks = allTracks.find(track => track.id === id)
            musicAudio.src = currentTracks.path
            musicAudio.play()
            
            const resetIconEle = document.querySelector('.fa-pause')
            if(resetIconEle){
                resetIconEle.classList.replace('fa-pause','fa-play')
            }
            
        }
        classList.replace('fa-play', 'fa-pause')
    }else if (id && classList.contains('fa-pause')){
        musicAudio.pause()
        classList.replace('fa-pause', 'fa-play')
    }else if(id && classList.contains('fa-trash-alt')){
        // 删除
        ipcRenderer.send('delete-track', id)
    }
})
const renderPlayerHtml = (name, duration) => {
    const player = $('player-status')
    const html = `<div class="col font-weight-bold">
    正在播放：${name}
    </div>
    <div class="col"><span id="current-seeker">00:00</span> / ${converDuration(duration)}</div>`
    player.innerHTML = html
}

const updateProgressHTML = (currentTime, duration) => {
    const seeker = $('current-seeker')
    const progress = document.querySelector('.progress-bar')
    const progressVal = (currentTime / duration * 100).toFixed(0)
    seeker.innerHTML  = converDuration(currentTime)
    progress.innerHTML =`${progressVal}%`
    progress.style.width = `${progressVal}%`
}

musicAudio.addEventListener('loadedmetadata', ()=>{
    // 渲染播放器状态
    renderPlayerHtml(currentTracks.fileName, musicAudio.duration)
})
musicAudio.addEventListener('timeupdate', ()=>{
    // 更新播放器状态
    updateProgressHTML(musicAudio.currentTime,musicAudio.duration )
})