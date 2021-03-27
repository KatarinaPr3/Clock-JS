const clock = document.querySelector('.clock');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const hours = document.querySelector('.hours');


function setClock() {
    const time = new Date();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let hour = time.getHours();
    console.log(second);

    const secDegree = ((second / 60) * 360) + 90;
    const minDegree = ((minute / 60) * 360) + 90;
    const hoursDegree = ((hour / 12) * 360) + 90;

    seconds.style.transform = `rotate(${secDegree}deg)`;
    minutes.style.transform = `rotate(${minDegree}deg)`;
    hours.style.transform = `rotate(${hoursDegree}deg)`;
};

setInterval(setClock, 1000);