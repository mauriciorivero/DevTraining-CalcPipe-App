document.getElementById("calcular-1").onclick = function(){
    var angulo = 0;
    var altura = 0;
    var marcaA = 0;
    var marcaB = 0;
    var distancia = 0;
    angulo = parseInt(document.getElementById("angulo").value);
    altura = parseInt(document.getElementById("altura").value);
    distancia = parseInt(document.getElementById("distancia").value);
    marcaA = distancia+(altura/5);
    marcaB = altura * 2.5;
    document.getElementById("marcaA").innerHTML = "Marca A 45° es: "+marcaA;
    document.getElementById("marcaB").innerHTML = "Marca ByC 22° es: "+marcaB;
}
document.getElementById("calcular").onclick = function(){
    var distancia = 0;
    var altura = 0;
    var marcaA = 0;
    var marcaB = 0;
    distancia = parseInt(document.getElementById("dist_obst").value);
    altura = parseInt(document.getElementById("alt_obst").value);
    marcaA = distancia+(altura/5);
    marcaB = altura * 2.5;
    document.getElementById("marcaA").innerHTML = "Marca A 45° es: "+marcaA;
    document.getElementById("marcaB").innerHTML = "Marca ByC 22° es: "+marcaB;
}