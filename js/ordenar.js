function sortTable(n, type) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById("myTable");
    switching = true;
    //Dirección de orden: ascendente
    dir = "asc";

    /*Loop hasta que no tenga que cambiar más el orden de las filas*/
    while (switching) {
        switching = false;
        rows = table.rows;
        /*Loop en las filas, excepto la de encabezado*/
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            /*Elementos para comparar*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if ((type == "str" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) || ((type == "int" || type == "float") && parseFloat(x.innerHTML) > parseFloat(y.innerHTML))) {
                    //indica que deben cambiar de lugar
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if ((type == "str" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) || ((type == "int" || type == "float") && parseFloat(x.innerHTML) < parseFloat(y.innerHTML))) {
                    //indica que deben cambiar de lugar
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*[i] e [i + 1] son las filas que deben cambiarse*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            /*No hay más cambios de filas, se ha ordenado ascendentemente, y la próxima vez será en orden descendente*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}