const newYea = '1 january 2023'
const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minuet = document.querySelector('.minuets');
const second = document.querySelector('.seconds');
function Timer() {
    const newYear = new Date(newYea);
    const currentDate = new Date();
    const Totalseconds = (newYear - currentDate) / 1000;

    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;

    day.innerText = days;
    hour.innerText = hours;
    minuet.innerText = minutes;
    second.innerText = seconds;
    setTimeout(Timer, 1000)
}
Timer();

