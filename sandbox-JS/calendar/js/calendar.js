document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15; // Gets Mouse X
    let mousey = event.clientY - 15; // Gets Mouse Y
    let elem = document.querySelector('.cursor-glow');
    elem.style.opacity = 1;
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});

function getDate(date) {
    let day  = date.getDay();
    if(day == 0) day = 7;
    return day-1;
}

let month_number = Array.from(Array(12).keys());
let month_names = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let months = {};
month_number.forEach((key, i) => months[key] = month_names[i]);

function creteMonthCalendar (elem, year, month) {
    elem = document.querySelector(elem);
    let mon = month - 1; // in JS from 0, we enter 5 = May
    let table = `
    <div class="month">${months[mon]} ${year}</div>
    <table>
        <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thг</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
        </tr>
        <tr>
    `;

    let d = new Date(year, mon);
    while (mon == d.getMonth()) {
        for (let i=0; i<7; i++) {
                if ((d.getDate() < 7 && i < d.getDay()) || (d.getMonth() != mon)) {
                    let diff = d.getDay() - i;
                    let temp_d = new Date();
                    temp_d.setDate(d.getDate() - diff);
                    table += `<td class='light'>${temp_d.getDate()}</td>`;
                } else {
                    table += `<td>${d.getDate()}</td>`;
                    d.setDate(d.getDate() + 1);
                }
            }
        table += `</tr>`;
    }

    table += `</tr></table>`;
    elem.innerHTML = table;
    return table;
}

function createYearCalendar (selector, year=2021) {
    try {
        let input_year = document.querySelector(".input__year").value;
        if (!isNaN(input_year)) {
            year = input_year;
        }
    } catch (e) {    }    
    let elem = document.querySelector(selector);
    elem.innerHTML = '';
    for (let i=1; i<13; i++) {
        elem.innerHTML += `<div class="calendar">${creteMonthCalendar(selector, year, i)}</div>`;
    }
}

createYearCalendar('.year-calendar');