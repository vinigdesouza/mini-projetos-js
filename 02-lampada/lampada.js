const turnOn = document.querySelector('button#turnOn')
const turnOff = document.getElementById('turnOff')
const consertar = document.getElementById('consertar')
const lamp = document.getElementById('lamp')

const lampOff = () => {
    if(!isBroken() ){
        lamp.src = './img/desligada.jpg'
    }
}

const lampOn = () => {
    if(!isBroken() ){
        lamp.src = './img/ligada.jpg'
    }
}

const lampBroken = () => {
    lamp.src = './img/quebrada.jpg'
}

const lampFix = () => {
    if(isBroken()){
        lamp.src = './img/desligada.jpg'
    }
}

const isBroken = () => {
    return lamp.src.indexOf('quebrada') > 1
}

turnOff.addEventListener('click', lampOff)
turnOn.addEventListener('click', lampOn)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
consertar.addEventListener('click', lampFix)