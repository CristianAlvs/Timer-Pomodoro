import Controls from "./controls.js"
import Sounds from "./sounds.js"
import Timer from "./timer.js"

// ELEMENTS
const body = document.querySelector("body")

const btnDarkTheme = document.querySelector(".iconDark")
const btnLighTheme = document.querySelector(".iconLight")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const btnPlay = document.querySelector(".play")
const btnPause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const btnSum = document.querySelector(".sum")
const btnReduce = document.querySelector(".reduce")

const btnSoundForest = document.querySelector(".soundForest")
const btnSoundRain = document.querySelector(".soundRain")
const btnSoundCoffeeShop = document.querySelector(".soundCoffeeShop")
const btnSoundFireplace = document.querySelector(".soundFireplace")

const iconVolumMax = document.querySelector(".volumMax")
const iconVolumMedium = document.querySelector(".volumMedium")
const iconVolumMin = document.querySelector(".volumMin")
const iconVolumeOff = document.querySelector(".iconVolumeOff")
const volumeOn = document.querySelector(".volumeOn")

const volumeSlider = document.querySelector("#slider")
const fillVolumeSlider = document.querySelector(".bar .fill");
let currentVolume = 0

// DEPENDENCY INJECTION
const controls = Controls({
    btnSoundForest,
    btnSoundRain,
    btnSoundCoffeeShop,
    btnSoundFireplace,
    btnPlay,
    btnPause,
    btnSum,
    btnReduce,
    iconVolumeOff,
    volumeOn,
    volumeSlider,
    btnDarkTheme,
    btnLighTheme,
    body
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    btnStopOrPause: controls.btnStopOrPause,
    enableSumAndReduce: controls.enableSumAndReduce
})

const sound = Sounds({
    iconVolumMax,
    iconVolumMedium,
    iconVolumMin
})

// EVENTS
btnLighTheme.addEventListener('click', function() {
    controls.turnLightOrDarkTheme()
})

btnDarkTheme.addEventListener('click', function() {
    controls.turnLightOrDarkTheme()
})

volumeSlider.addEventListener('input', function() {
    sound.controlVolumeSound(volumeSlider.value)
    sound.setFillVolume(volumeSlider.value, fillVolumeSlider)

    controls.turnOnSound()
})

volumeOn.addEventListener('click', function() {
    currentVolume = sound.setCurrentVolume(volumeSlider.value)

    controls.turnSoundOnAndOff()

    sound.controlVolumeSound(0)
    sound.setFillVolume(0, fillVolumeSlider)
})

iconVolumeOff.addEventListener('click', function() {
    controls.turnSoundOnAndOff()

    sound.controlVolumeSound(currentVolume)
    sound.setFillVolume(currentVolume, fillVolumeSlider)
})

btnSoundForest.addEventListener('click', function() {
    controls.btnForest()
    sound.pressButtonSound(sound.sounds.soundForest)
})

btnSoundRain.addEventListener('click', function() {
    controls.btnRain()
    sound.pressButtonSound(sound.sounds.soundRain)
})

btnSoundCoffeeShop.addEventListener('click', function() {
    controls.btnCoffeeShop()
    sound.pressButtonSound(sound.sounds.soundCoffeeShop)
})

btnSoundFireplace.addEventListener('click', function() {
    controls.btnFireplace()
    sound.pressButtonSound(sound.sounds.soundFireplace)
})

btnSum.addEventListener('click', function() {
    const isEnable = controls.checkIsEnable();
    timer.sumMinutes(isEnable)
})

btnReduce.addEventListener('click', function() {
    const isEnable = controls.checkIsEnable();
    timer.reduceMinutes(isEnable)
})

btnPlay.addEventListener('click', function() {
    sound.buttonPressAudio.play()

    controls.play()
    controls.disableSumAndReduce() 

    timer.startTimer()
})

btnPause.addEventListener('click', function() {
    sound.buttonPressAudio.play()

    controls.btnStopOrPause()
    timer.holdTimer()
})

btnStop.addEventListener('click', function() {
    sound.buttonPressAudio.play()

    timer.holdTimer()
    timer.stopTimer()

    controls.enableSumAndReduce()
})
