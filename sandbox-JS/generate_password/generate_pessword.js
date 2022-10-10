let low_letter = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upper_letter = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
let symbol = '!@#$%^:()-+'.split('');
let num = '1234567890'.split('');
let symb_set = low_letter + upper_letter + symbol + num;
function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

