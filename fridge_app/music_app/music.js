var timeout
var tracks = ['../../support_files/oldtown.mp3', '../../support_files/thotiana.mp3']
var albumArts = ['https://s3.amazonaws.com/media.thecrimson.com/photos/2019/04/14/200610_1337381.jpeg', 'https://lastfm-img2.akamaized.net/i/u/770x0/5e4c4bcb70c67c4c571214fdf1f9bc7a.jpg']
var index = 0
var track = new Audio()

track.onloadeddata = function() {
    var newTime = Math.floor(track.duration)
    var min = Math.floor(newTime / 60)
    var sec = newTime % 60

    var minStr = min + ""
    var secStr = sec + ""

    if (sec < 10) {
        secStr = "0" + sec
    }

    document.querySelector("#end").innerHTML = minStr + ":" + secStr
    document.querySelector('ion-range').max = newTime
    document.querySelector('img').src = albumArts[index]
}

window.onload = function() {
    track.src = tracks[index]
    document.querySelector('ion-range').addEventListener('ionChange', function(data) {
        scrub(data.detail.value)
    })
}

function toggle() {
    if (document.querySelector('#playpause').name == "play") {
        document.querySelector('#playpause').name = "pause"
        timeout = setInterval(updateTime, 1000)
        track.play()
    } else {
        document.querySelector('#playpause').name = "play"
        track.pause()
        clearTimeout(timeout)
    }
}

function previous() {
    if (index > 0) {
        if (track.currentTime <= 3) {
            index--
            track.src = tracks[index]
    
            if (document.querySelector('#playpause').name == "play") {
                toggle()
            } else {
                track.play()
            }
        }
        
        track.currentTime = 0
        document.querySelector('ion-range').value = 0
        document.querySelector("#start").innerHTML = "0:00"
    }
}

function next() {
    if (index < tracks.length - 1) {
        index++
        track.src = tracks[index]
    
        if (document.querySelector('#playpause').name == "play") {
            toggle()
        } else {
            track.play()
        }
        
        document.querySelector('ion-range').value = 0
        document.querySelector("#start").innerHTML = "0:00"
    }
    
}

function updateTime() {
    var oldVal = parseInt(document.querySelector('ion-range').value)
    var newTime = oldVal + 1

    var min = Math.floor(newTime / 60)
    var sec = newTime % 60

    var minStr = min + ""
    var secStr = sec + ""

    if (sec < 10) {
        secStr = "0" + sec
    }

    document.querySelector("#start").innerHTML = minStr + ":" + secStr
    document.querySelector('ion-range').value = newTime
}

function scrub(newTime) {
    var min = Math.floor(newTime / 60)
    var sec = newTime % 60

    var minStr = min + ""
    var secStr = sec + ""

    if (sec < 10) {
        secStr = "0" + sec
    }

    document.querySelector("#start").innerHTML = minStr + ":" + secStr
    document.querySelector('ion-range').value = newTime
    track.currentTime = newTime
}