export default function Controls({
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
}) {
    function btnForest() {
        btnSoundForest.classList.toggle('select')
        btnSoundRain.classList.remove('select')
        btnSoundCoffeeShop.classList.remove('select')
        btnSoundFireplace.classList.remove('select')
    }
    
    function btnRain() {
        btnSoundForest.classList.remove('select')
        btnSoundRain.classList.toggle('select')
        btnSoundCoffeeShop.classList.remove('select')
        btnSoundFireplace.classList.remove('select')
    }
    
    function btnCoffeeShop() {
        btnSoundForest.classList.remove('select')
        btnSoundRain.classList.remove('select')
        btnSoundCoffeeShop.classList.toggle('select')
        btnSoundFireplace.classList.remove('select')
    }
    
    function btnFireplace() {
        btnSoundForest.classList.remove('select')
        btnSoundRain.classList.remove('select')
        btnSoundCoffeeShop.classList.remove('select')
        btnSoundFireplace.classList.toggle('select')
    }
    
    function btnStopOrPause() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }
    
    function disableSumAndReduce() {
        btnSum.classList.add('disable')
        btnReduce.classList.add('disable')
    }
    
    function enableSumAndReduce() {
        btnSum.classList.remove('disable')
        btnReduce.classList.remove('disable')
    }

    function checkIsEnable() {
        const sum = btnSum.classList.contains('disable')
        const reduce = btnReduce.classList.contains('disable')
    
        if(sum && reduce){
            return false
        }
        
        return true
    }
    
    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
    }

    function turnSoundOnAndOff() {
        iconVolumeOff.classList.toggle('hide')
        volumeOn.classList.toggle('hide')
        volumeSlider.classList.toggle('noVolume')
    }

    function turnOnSound() {
        iconVolumeOff.classList.add('hide')
        volumeOn.classList.remove('hide')
        volumeSlider.classList.remove('noVolume')
    }

    function turnLightOrDarkTheme() {
        btnDarkTheme.classList.toggle('hide')
        btnLighTheme.classList.toggle('hide')
        body.classList.toggle('active')
    }

    return {
        btnForest,
        btnRain,
        btnCoffeeShop,
        btnFireplace,
        btnStopOrPause,
        disableSumAndReduce,
        enableSumAndReduce,
        play,
        checkIsEnable,
        turnSoundOnAndOff,
        turnOnSound,
        turnLightOrDarkTheme
    }
}
