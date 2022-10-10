let table = document.querySelector('.table');
const table1 = Object.assign([], table.rows);
let sortedRowsAge = Array.from(table.rows)
                        .slice(1)
                        .sort((rowA, rowB) => {
                            return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML > 0;
                        });
     
let sortedRowsName = Array.from(table.rows)
                        .slice(1)
                        .sort((rowA, rowB) => {
                            return rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML) > 0;
                        });

document.getElementById("name").onclick = function(){
    table.tBodies[0].append(...sortedRowsName);
};
document.getElementById("age").addEventListener('click', function(){
    table.tBodies[0].append(...sortedRowsAge);
});
document.getElementById("ini").onclick = function(){
    table.tBodies[0].append(...table1);
};
