var timeout
var track = new Audio('../../support_files/oldtown.mp3')

function toggle(item) {
    if (item.name == "play") {
        item.name = "pause"
        timeout = setInterval(updateTime, 1000)
        track.play()
    } else {
        item.name = "play"
        track.pause()
        clearTimeout(timeout)
    }
}

function previous() {
    track.currentTime = 0
    document.querySelector('ion-range').value = 0
    document.querySelector("#start").innerHTML = "0:00"
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