export default function Sounds({
    iconVolumMax,
    iconVolumMedium,
    iconVolumMin
})  {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    buttonPressAudio.volume = 0.2

    const finishTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const sounds = {
        soundForest: {
            title: 'soundForest',
            audio: new Audio("./sounds/forest.wav")
        },
        soundRain: {
            title: 'soundRain',
            audio: new Audio("./sounds/rain.wav")
        },
        soundCoffeeShop: {
            title: 'soundCoffeeShop',
            audio: new Audio("./sounds/coffeShop.wav")
        },
        soundFireplace: {
            title: 'soundFireplace',
            audio: new Audio("./sounds/fireplace.wav")
        }
    };

    function checkSoundIsPlay(soundLoop) {
        if(soundLoop == true){
            return true
        }

        return false 
    }

    function pressButtonSound(clickedSound) {

        const check = checkSoundIsPlay(clickedSound.audio.loop)
        if(check) {
            clickedSound.audio.pause()
            clickedSound.audio.loop = false
            return
        }

        for(const sound in sounds){
            if(clickedSound.title == sound){
                clickedSound.audio.play()
            } 
            else {
                sounds[sound].audio.pause()
                sounds[sound].audio.loop = false
            }  
        } 

        clickedSound.audio.loop = true
    }

    function controlVolumeSound(volumeSlider) {
        let volume = 0

        if(volumeSlider != null){
            volume = volumeSlider / 100
        }

        sounds.soundCoffeeShop.audio.volume = volume;
        sounds.soundFireplace.audio.volume = volume;
        sounds.soundForest.audio.volume = volume;
        sounds.soundRain.audio.volume = volume;
    }

    function setFillVolume(volumeSlider, inputFillVolumeSlider) {
        inputFillVolumeSlider.style.width = volumeSlider + "%";

        if(volumeSlider <= 10) {
            iconVolumMax.classList.add('hide')
            iconVolumMedium.classList.add('hide')
            iconVolumMin.classList.remove('hide')
        }
        if(volumeSlider < 60 && volumeSlider > 10) {
            iconVolumMax.classList.add('hide')
            iconVolumMedium.classList.remove('hide')
            iconVolumMin.classList.add('hide')
        }
        if(volumeSlider >= 60) {
            iconVolumMax.classList.remove('hide')
            iconVolumMedium.classList.add('hide')
            iconVolumMin.classList.add('hide')
        }
    }

    function setCurrentVolume(volumeSlider) {
        const currentVolume = volumeSlider
        return currentVolume
    }

    return {
        buttonPressAudio,
        finishTimer,
        pressButtonSound,
        sounds,
        controlVolumeSound,
        setFillVolume,
        setCurrentVolume
    }
}