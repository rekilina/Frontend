// Добавляем уведомление в локальное хранилище
document.querySelector('.notification__form input').addEventListener('click', function() {
    let time = document.querySelector('.notification__form input').value;
    let message = document.querySelector('.notification__forn textarea').value;

    let info = document.querySelector('.notification__info');

    if(!time || !message) {
        info.textContent = 'Укажите время и сообщение';
        info.style.opacity = 1;
        setTimeout(() => {
            info.style.opacity = 0;
        }, 2000);
        setTimeout(() => {
            info.textContent = '';
        }, 3000);
        return;
    }
    localStorage.setItem(time, message);
})

document.querySelector('.notification__list > button').addEventListener('click', function() {
    if(!localStorage.length) {
        document.querySelector('.notification__list').hidden = treu;
    } else {
        document.querySelector('.notification__list').hidden = false;
    }
    document.querySelector('.notification__list > div').innerHTML = '';
    document.querySelector('.notification__info').textContent = '';
    for(let key of Object.keys(localStorage)) { 
        document.querySelector('.notification__list > div').insertAdjacentHTML('beforeend', `
        <div class="notification__item">
            <div>${key} - ${localStorage.getItem(key)}</div>
            <button data-time="${key}">&times;</button>
        </div>
        `
        )
    }
})