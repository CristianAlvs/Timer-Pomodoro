import Sounds from "./sounds.js"

const sounds = Sounds({
    undefined,
    undefined,
    undefined
})

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    btnStopOrPause,
    enableSumAndReduce
}) {
    let initialMinutes = Number(minutesDisplay.textContent)
    let minutes = initialMinutes
    let initialSeconds = Number(secondsDisplay.textContent)
    let seconds = initialSeconds
    let time

    function updateDisplayTimers(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function startTimer() {
        if(minutes == 0 && seconds == 0) {
            sounds.finishTimer.play()
            stopTimer()
            return
        }

        if(seconds == 0){
            seconds = 60

            minutes -= 1
            updateDisplayTimers(minutes, seconds)
        }

        seconds -= 1
        updateDisplayTimers(minutes, seconds)

        time = setTimeout(startTimer, 1000)
    }

    function stopTimer() {
        minutes = initialMinutes
        seconds = initialSeconds

        btnStopOrPause()
        enableSumAndReduce()
        updateDisplayTimers(minutes, seconds)
    }

    function holdTimer() {
        clearTimeout(time)
    }

    function sumMinutes(isEnable) {
        if(isEnable) {
            initialMinutes += 5
            minutes = initialMinutes
            updateDisplayTimers(minutes, seconds)
        }
    }

    function reduceMinutes(isEnable) {
        if(isEnable) {
            if(initialMinutes > 0){
                initialMinutes -= 5
                minutes = initialMinutes
                updateDisplayTimers(minutes, seconds)
            } 
        }
    }

    return {
        updateDisplayTimers,
        startTimer,
        stopTimer,
        holdTimer,
        initialMinutes,
        sumMinutes,
        reduceMinutes
    }
}