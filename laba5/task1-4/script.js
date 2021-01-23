function task1(){
    alert("Тюленев Сергей")
}

function task2(){
    let 
    random_number = (randomInteger(1, 10))
    document.getElementById("task2").value = random_number;
}
function task2(){
    let 
    text = document.getElementById('task2');
	text.value = Math.round(Math.random() * 10);
}
function task3_copy() {
	let
	text_field1=document.getElementById('text_field1'); 
	text_field2=document.getElementById('text_field2');
	if (text_field1.value=='') {
		alert("Введите текст пожалуйста!");
	}
	else {
        text_field2.value=text_field1.value;
	}
}
function task3_clear(){
	let 
	text_field1=document.getElementById('text_field1'); 
	text_field1.value='';
	text_field2=document.getElementById('text_field2');
	text_field2.value='';

}
function task4_table_creation(){
    let 
    c = document.getElementById('columns');
    columns = c.value
    r = document.getElementById('rows');
    rows = r.value
    elem = document.querySelector('#elem');
    createTable(elem, columns, rows);
    function createTable(parent, columns, rows){
        let table = document.createElement('table');
        for (let i = 0; i < rows; i++){
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++){
                let td = document.createElement('td');
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        parent.appendChild(table);
    }
}

