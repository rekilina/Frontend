let data = {
    "Tea": {"Black": '', "Green": '', "White": ''},
    "Fruits": {"Pear":'', "Banana":'', "Apple": {"Green apple":'', "Red apple":''}},
    "Vegetables": {"Carrot":'', "Cucumber":'', "Tomato":''}
}
function createTree(selector, obj) {
    document.querySelector(selector).append(createUl(obj));
}
function createUl(obj) {
    if (!obj) return;
    if(!Object.keys(obj).length) return; 
    let ul = document.createElement('ul');
    for (key of Object.keys(obj)) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = key;
        li.append(a);
        console.log(`key is ${key}`);
        let new_obj = obj[key];
        let children_ul = createUl(new_obj);
        if(children_ul) {
            li.append(children_ul);
        }
        ul.append(li);
    }
    return ul
}
createTree('div', data)

let ul = document.querySelector('ul');
ul.onclick = function(event) {
    if(event.target.tagName != "A") return
    let childrenContainer = event.target.parentNode.querySelector('ul');
    if(!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
}