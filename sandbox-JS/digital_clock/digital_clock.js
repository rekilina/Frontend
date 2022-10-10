function update() {
    let clock = document.querySelector('.clock');
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    clock.textContent = `${hours}:${min}:${sec}`;
}
setInterval(update, 1000);