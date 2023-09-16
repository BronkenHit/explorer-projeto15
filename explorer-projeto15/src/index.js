const play = document.getElementById('play');
const pause = document.getElementById('pause');
const timer = document.getElementById('timer');
const stop = document.getElementById('stop');
const soundActive = document.getElementById('sound-active');
const soundDisable = document.getElementById('sound-disable');
const fireplace = document.getElementById('fireplace');
const rain = document.getElementById('rain');
const forest = document.getElementById('forest');
const coffeeplace = document.getElementById('coffeeplace');
const dark = document.getElementById('dark');
const light = document.getElementById('light');
const mode = document.getElementById('mode');
const time = document.getElementById('time');

const forestAudio = new Audio('./audio/Floresta.wav');
const rainAudio = new Audio('./audio/Chuva.wav');
const coffeePlaceAudio = new Audio('./audio/Cafeteria.wav');
const firePlaceAudio = new Audio('./audio/Lareira.wav');

forestAudio.loop = true;
rainAudio.loop = true;
coffeePlaceAudio.loop = true;
firePlaceAudio.loop = true;

let state = {
    isRunning: false,
    stop: false,
    timer: false,
    enable: false,
    disable: false,
    plus: 0,
    minus: 0,
    hours: 0,
    minutes: 25,
    seconds: 0,
}

function toggleDark () {
    dark.classList.add('hidden');
    dark.classList.remove('visible');
    light.classList.remove('hidden');
    light.classList.add('visible');

    mode.classList.add('dark');
    mode.classList.remove('light');
}

function toggleLight () {
    light.classList.add('hidden');
    light.classList.remove('visible');
    dark.classList.remove('hidden');
    dark.classList.add('visible');

    mode.classList.add('light');
    mode.classList.remove('dark');
}

function togglePlay () {
    play.classList.toggle("visible");
    play.classList.toggle("hidden");
    pause.classList.toggle("hidden");
    pause.classList.toggle("visible");

    toggleTimer();
    toggleSoundActive();

    if (play.classList != 'visible' && pause.classList != 'hidden') {
        timer.classList.remove('visible');
        timer.classList.add('hidden');
        stop.classList.remove('hidden');
        stop.classList.add('visible');
    }
}

function togglePause () {
    play.classList.toggle("hidden");
    play.classList.toggle("visible");
    pause.classList.toggle("visible");
    pause.classList.toggle("hidden");

    toggleTimer();
    toggleSoundActive();
}

function toggleTimer () {
    timer.classList.toggle("visible");
    timer.classList.toggle("hidden");
    stop.classList.toggle("hidden");
    stop.classList.toggle("visible");

    if (timer.classList != 'hidden' && play.classList != 'hidden') {
        timer.classList.remove('hidden');
        timer.classList.add('visible');
        stop.classList.remove('visible');
        stop.classList.add('hidden');
    }
}

function toggleStop () {
    stop.classList.toggle("visible");
    stop.classList.toggle("hidden");
    timer.classList.toggle("hidden");
    timer.classList.toggle("visible");

    togglePause();

    if (stop.classList != 'hidden') {
        stop.classList.remove('visible');
        stop.classList.add('hidden');
        timer.classList.remove('hidden');
        timer.classList.add('visible');
    }
}

function toggleSoundActive () {
    if (fireplace.classList != 'audio-control') {
        firePlaceAudio.play();
    } else if (rain.classList != 'audio-control') {
        rainAudio.play();
    } else if (forest.classList != 'audio-control') {
        forestAudio.play();
    } else if (coffeeplace.classList != 'audio-control') {
        coffeePlaceAudio.play();
    } else {
        console.log("Nenhuma escolha de som encontrada!");
    }

    soundActive.classList.toggle("visible");
    soundActive.classList.toggle("hidden");
    soundDisable.classList.toggle("hidden");
    soundDisable.classList.toggle("visible");

    // if (pause.classList != 'visible' && play.classList != 'hidden' && stop.classList != 'visible' && timer.classList != 'hidden') {
    //     soundActive.classList.remove('hidden');
    //     soundActive.classList.add('visible');
    //     soundDisable.classList.remove('visible');
    //     soundDisable.classList.add('hidden');
    // }
}

function toggleSoundDisable () {
    soundDisable.classList.toggle("visible");
    soundDisable.classList.toggle("hidden");
    soundActive.classList.toggle("hidden");
    soundActive.classList.toggle("visible");
    
    
    if (fireplace.classList != '') {
        firePlaceAudio.pause();
        console.log("a");
    } else if (rain.classList != '') {
        rainAudio.pause();
        console.log("b");
    } else if (forest.classList != '') {
        forestAudio.pause();
        console.log("c");
    } else if (coffeeplace.classList != '') {
        coffeePlaceAudio.pause();
        console.log("d");
    } else {
        console.log("Nenhuma escolha de som encontrada!");
    }
    
    // if (pause.classList != 'visible' && play.classList != 'hidden' && stop.classList != 'visible' && timer.classList != 'hidden') {
    //     soundActive.classList.remove('visible');
    //     soundActive.classList.add('hidden');
    //     soundDisable.classList.remove('hidden');
    //     soundDisable.classList.add('visible');
    // }
}

function togglefireplace () {
    fireplace.classList.toggle('active');
    rain.classList.remove('active');
    forest.classList.remove('active');
    coffeeplace.classList.remove('active');

    if (fireplace.classList != 'active') {
        fireplace.classList.add('active');
    }
}

function toggleRain () {
    fireplace.classList.remove('active');
    rain.classList.toggle('active');
    forest.classList.remove('active');
    coffeeplace.classList.remove('active');

    if (rain.classList != 'active') {
        rain.classList.add('active');
    }
}

function toggleforest () {
    fireplace.classList.remove('active');
    rain.classList.remove('active');
    forest.classList.toggle('active');
    coffeeplace.classList.remove('active');

    if (forest.classList != 'active') {
        forest.classList.add('active');
    }
}

function togglecoffeeplace () {
    fireplace.classList.remove('active');
    rain.classList.remove('active');
    forest.classList.remove('active');
    coffeeplace.classList.toggle('active');

    if (coffeeplace.classList != 'active') {
        coffeeplace.classList.add('active');
    }
}

dark.addEventListener('click', toggleDark);

light.addEventListener('click', toggleLight);

play.addEventListener('click', togglePlay);

pause.addEventListener('click',togglePause);

timer.addEventListener('click', toggleTimer);

stop.addEventListener('click', toggleStop);

soundActive.addEventListener('click', toggleSoundActive);

soundDisable.addEventListener('click', toggleSoundDisable);

fireplace.addEventListener('click', togglefireplace);

rain.addEventListener('click', toggleRain);

forest.addEventListener('click', toggleforest);

coffeeplace.addEventListener('click', togglecoffeeplace);

function toggleRunning() {
    state.isRunning = !state.isRunning;
}

function reset () {
    state.isRunning = false;
    updateDisplay()
}

function updateDisplay (hours, minutes, seconds) {
    hours = hours ?? state.hours;
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;
    
    time.textContent = `${time.textContent = String(hours).padStart(2, "0")}:${time.textContent = String(hours).padStart(2, "0")}:${time.textContent = String(hours).padStart(2, "0")}`;
}

function start (hours, minutes, seconds) {
    state.hours = hours;
    state.minutes = minutes;
    state.seconds = seconds;

    updateDisplay();
}

function countdown () {
    if (!state.isRunning) {
        return
    }

    let hours = Number(time.textContent);
    let minutes = Number(time.textContent);
    let seconds = Number(time.textContent);

    seconds--;

    if (seconds < 0) {
        seconds = 59;

        minutes--;
    }

    if (minutes < 0) {
        minutes = 59;

        hours--;
    }

    if (hours < 0) {
        reset();
        return
    }

    updateDisplay(hours, minutes, seconds)

    setTimeout(() => {
        countdown();
    }, 1000)
}

function set () {
    minutes.setAttribute('contentedditable', true);
    minutes.focus();
}

function setMinutes() {
    minutes.addEventListener('focus', () => {
        minutes.textContent = "";
    })


    minutes.onkeypress = (event) => {
        /\d/.test(event.key);
    }

    minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent;

        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;
        state.hours = 0;

        updateDisplay()
        minutes.removeAttribute('contenteditable');
    });
}