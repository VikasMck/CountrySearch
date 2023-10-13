//filtering function

function lookupFxn() {
    var i, txtValue;
    var input = document.getElementById("main_input");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("main_table");
    var tr = table.getElementsByClassName("table-row");

    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        
        if (td) { //check whether its not empty
            txtValue = td.textContent || td.innerText; //found out that this is great to ensure cross compatability
            
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
