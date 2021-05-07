// add Row



function addTableRow() {
   
        //get table id, create row and cells
        var table = document.getElementById("table");
        var row =table.insertRow(table.length); //0 initial
        var cell1 = row.insertCell(0); 
        var cell2 = row.insertCell(1); 
        var cell3 = row.insertCell(2); 
        var cell4 = row.insertCell(3); 
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
       

        var fname = document.getElementById("fname").value; //get value from input text 
        var surname = document.getElementById("surname").value; 
        var age = document.getElementById("age").value; 
        var clevel = document.getElementById("clevel").value; 
        var fclub = document.getElementById("fclub").value;
        
        
        //get value from input text and add to table
        cell1.innerHTML = fname;
        cell2.innerHTML = surname;
        cell3.innerHTML = age;
        cell4.innerHTML = clevel;
        cell5.innerHTML = fclub;
        
    
        //call the function to set the event to the new row
        selectedRow();
    
}

//display selected row
function selectedRow () {
    var rIndex, table = document.getElementById("table");
    for(let i =0; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("surname").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("clevel").value = this.cells[3].innerHTML;
            document.getElementById("fclub").value = this.cells[4].innerHTML;
        };
    }
}
selectedRow();

function removeRow () {
    var rIndex, table = document.getElementById("table");

    document.getElementById("table").deleteRow(rIndex);
    //clear input text
    document.getElementById("fname").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("clevel").value = "";
    document.getElementById("fclub").value = "";

}


function deleterow(el) {
    $(el).closest('tr').remove();
  }