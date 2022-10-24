var nombres = new Array();
var nombre = "", indice=0;

while (nombre != "Fin"){
    nombre = prompt("introduzca el nombre de la persona ", "");
    if (nombre != "Fin") {
        nombres[indice] = nombre;
        indice++;
    }
}

document.write("La matriz tiene los siguientes nombres: <br>");

for (indice = 0; indice < nombres.length; indice++){
    document.write([indice+1] + " " + nombres[indice] + "<br>");
}
if (nombres.length == 1)
    document.write("En total hay " + nombres.length + " nombre.");
else
    document.write("En total hay " + nombres.length + " nombres.");