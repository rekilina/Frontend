// Получаем форму по имени form1. 
let form = document.forms.form1;
// Находим в этой форме все кнопки, у которых name = radioBtn;
// Возвращает тип RadioNodeList
let radioBtns = form.elements.radioBtn;

let fieldSet = form.elements.myFieldset;
let select1 = form.elements.mySelect1;
console.log(select1.options[2].selected);
console.log(select1.selectedIndex);
// Select Item way1
select1.options[2].selected = true;
// Select Item way2
select1.selectedIndex = 2;
// Select Item way3
select1.value = 'option3';

// multiple select
let select2 = form.elements.mySelect2;
let selected = Array.from(select2.options).filter(option => option.selected).map(option => option.value);
console.log(selected);

// Add new Option
let newOpt = new Option('Element 4', "item4", true);
select2.append(newOpt);