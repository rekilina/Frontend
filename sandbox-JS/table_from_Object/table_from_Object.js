for(let key in PHONE_NUMBER) {
    let row = document.createElement('tr');
    row.innerHTML = `<tr><td colspan="2">${key}</td></tr>`;
    document.getElementById("phones").append(row);
    for(let i=0; i<PHONE_NUMBER[key].length; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${PHONE_NUMBER[key][i][0]}</td>
            <td>${PHONE_NUMBER[key][i][1]}</td>
            `
        document.querySelector('table').append(row);
    }
}

function rooms() {
    let rooms = [];
    for (let i=0; i<PEOPLE.length; i++) {
        rooms.push(
            [
                PEOPLE[i]["room"], `${PEOPLE[i]["name"]["f"]} ${PEOPLE[i]["name"]["i"]} ${PEOPLE[i]["name"]["o"]}`
            ]
        )
    }
    return rooms.sort((a, b) => a[0]-b[0])
}
let rooms_table = document.getElementById("rooms");
let title_rooms = document.createElement('tr');
title_rooms.innerHTML = `
        <th>ROOM</th>
        <th>FIO</th>
    `
document.querySelector('#rooms').append(title_rooms);
for(let i=0; i<rooms().length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `
    <td>${rooms()[i][0]}</td>
    <td>${rooms()[i][1]}</td>
    `
    document.querySelector('#rooms').append(row);
}

for (let i = 0; i<PEOPLE.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
    ФИО: ${PEOPLE[i]["name"]["f"]} ${PEOPLE[i]["name"]["i"]} ${PEOPLE[i]["name"]["o"]}<br/>
    Номер телефона: ${PEOPLE[i]["number"]}<br/>
    День рождения: ${PEOPLE[i]["date"]["d"]}.${PEOPLE[i]["date"]["m"]}.${PEOPLE[i]["date"]["y"]}<br/>
    Команата: ${PEOPLE[i]["room"]}
    `
    document.querySelector('.items').append(item);
}