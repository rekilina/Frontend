function myTimer(seconds) {
    let startDate = new Date();
    let endDate = new Date();
    endDate = endDate.setSeconds(endDate.getSeconds() + seconds);
    let Interval = setInterval(() => {
        let currentDate = new Date();
        let leftPercent = Math.trunc((endDate - currentDate) / (endDate - startDate) * 100);
        let passedPercent = 100 - leftPercent;
        document.querySelector('.timer-progressbar__fill').textContent = passedPercent + '%';
        document.querySelector('.timer-progressbar__fill').style.width = passedPercent + '%';
        document.querySelector('.timer-progressbar__empty').textContent = leftPercent + '%';
        document.querySelector('.timer-progressbar__empty').style.width = leftPercent + '%';
        if(leftPercent == 0) {
            clearInterval(Interval);
            document.querySelector('.timer-progressbar__empty').style.display = 'none';
        }
    }, 1000);      
}
myTimer(10);