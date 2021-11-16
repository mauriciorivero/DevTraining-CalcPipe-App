document.getElementById("calculo1").style.display = "none";
document.getElementById("calculo2").style.display = "none";
document.getElementById("calculo3").style.display = "none";
document.getElementById("calculo4").style.display = "none";
document.getElementById("opcionVolver").style.display = "none";

document.getElementById("opcion1").onclick = function(){
    document.getElementById("calculo1").style.display = "block";
    document.getElementById("calculo2").style.display = "none";
    document.getElementById("calculo3").style.display = "none";
    document.getElementById("calculo4").style.display = "none";
    document.getElementById("opcion1").style.display = "none";
    document.getElementById("opcion2").style.display = "none";
    document.getElementById("opcion3").style.display = "none";
    document.getElementById("opcion4").style.display = "none";
    document.getElementById("opcionVolver").style.display = "inline-block";
}

document.getElementById("opcion2").onclick = function(){
    document.getElementById("calculo1").style.display = "none";
    document.getElementById("calculo2").style.display = "block";
    document.getElementById("calculo3").style.display = "none";
    document.getElementById("calculo4").style.display = "none";
    document.getElementById("opcion1").style.display = "none";
    document.getElementById("opcion2").style.display = "none";
    document.getElementById("opcion3").style.display = "none";
    document.getElementById("opcion4").style.display = "none";
    document.getElementById("opcionVolver").style.display = "inline-block";
}

document.getElementById("opcion3").onclick = function(){
    document.getElementById("calculo1").style.display = "none";
    document.getElementById("calculo2").style.display = "none";
    document.getElementById("calculo3").style.display = "block";
    document.getElementById("calculo4").style.display = "none";
    document.getElementById("opcion1").style.display = "none";
    document.getElementById("opcion2").style.display = "none";
    document.getElementById("opcion3").style.display = "none";
    document.getElementById("opcion4").style.display = "none";
    document.getElementById("opcionVolver").style.display = "inline-block";
}

document.getElementById("opcion4").onclick = function(){
    document.getElementById("calculo1").style.display = "none";
    document.getElementById("calculo2").style.display = "none";
    document.getElementById("calculo3").style.display = "none";
    document.getElementById("calculo4").style.display = "block";
    document.getElementById("opcion1").style.display = "none";
    document.getElementById("opcion2").style.display = "none";
    document.getElementById("opcion3").style.display = "none";
    document.getElementById("opcion4").style.display = "none";
    document.getElementById("opcionVolver").style.display = "inline-block";
}

document.getElementById("opcionVolver").onclick = function(){
    document.getElementById("calculo1").style.display = "none";
    document.getElementById("calculo2").style.display = "none";
    document.getElementById("calculo3").style.display = "none";
    document.getElementById("calculo4").style.display = "none";
    document.getElementById("opcion1").style.display = "inline-block";
    document.getElementById("opcion2").style.display = "inline-block";
    document.getElementById("opcion3").style.display = "inline-block";
    document.getElementById("opcion4").style.display = "inline-block";
    document.getElementById("opcionVolver").style.display = "none";
}

document.getElementById("op1_calcular").onclick = function(){
    var angulo = document.getElementById("op1_angulo").value;
    var multiplicador = 0;
    var contraccion1 = 0;
    var contraccion2 = 0;
    var altura = parseFloat(parseInt(document.getElementById("op1_altura").value));
    var marcaA = 0;
    var marcaB = 0;
    var distAngulo = parseFloat(parseInt(document.getElementById("op1_distancia").value));
    switch(angulo){
        case "10":
            angulo = parseInt(angulo);
            multiplicador = 6;
            contraccion1 = 0.0625;
            contraccion2 = altura*contraccion1;
            marcaA = distAngulo+contraccion2;
            marcaB = altura*multiplicador;
            document.getElementById("op1_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op1_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "22":
            angulo = parseInt(angulo);
            multiplicador = 2.6;
            contraccion1 = 0.0625;
            contraccion2 = altura*contraccion1;
            marcaA = distAngulo+contraccion2;
            marcaB = altura*multiplicador;
            document.getElementById("op1_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op1_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "30":
            angulo = parseInt(angulo);
            multiplicador = 2;
            contraccion1 = 0.25;
            contraccion2 = altura*contraccion1;
            marcaA = distAngulo+contraccion2;
            marcaB = altura*multiplicador;
            document.getElementById("op1_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op1_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "45":
            angulo = parseInt(angulo);
            multiplicador = 1.4;
            contraccion1 = 0.375;
            contraccion2 = altura*contraccion1;
            marcaA = distAngulo+contraccion2;
            marcaB = altura*multiplicador;
            document.getElementById("op1_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op1_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "60":
            angulo = parseInt(angulo);
            multiplicador = 1.2;
            contraccion1 = 0.5;
            contraccion2 = altura*contraccion1;
            marcaA = distAngulo+contraccion2;
            marcaB = altura*multiplicador;
            document.getElementById("op1_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op1_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "nada":
            alert("Seleccione un ángulo");
        break;
    }
}

document.getElementById("op2_calcular").onclick = function(){
    var angulo = document.getElementById("op2_angulo").value;
    var multiplicador = 0;
    var altura = parseFloat(parseInt(document.getElementById("op2_altura").value));
    var marcaA = 0;
    var marcaB = 0;
    switch(angulo){
        case "10":
            angulo = parseInt(angulo);
            multiplicador = 6;
            marcaA = 40;
            marcaB = altura*multiplicador;
            document.getElementById("op2_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op2_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "22":
            angulo = parseInt(angulo);
            multiplicador = 2.6;
            marcaA = 50;
            marcaB = altura*multiplicador;
            document.getElementById("op2_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op2_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "30":
            angulo = parseInt(angulo);
            multiplicador = 2;
            marcaA = 40;
            marcaB = altura*multiplicador;
            document.getElementById("op2_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op2_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "45":
            angulo = parseInt(angulo);
            multiplicador = 1.4;
            marcaA = 15;
            marcaB = altura*multiplicador;
            document.getElementById("op2_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op2_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "60":
            angulo = parseInt(angulo);
            multiplicador = 1.2;
            marcaA = 8;
            marcaB = altura*multiplicador;
            document.getElementById("op2_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op2_marcaB").innerHTML = "Marca B: "+marcaB;
        break;
        case "nada":
            alert("Seleccione un ángulo");
        break;
    }
}

document.getElementById("op3_calcular").onclick = function(){
    var distancia = parseInt(document.getElementById("op3_distancia").value);
    var altura = parseInt(document.getElementById("op3_altura").value);
    var marcaA = 0;
    var marcaB = 0;
    marcaA = distancia+(altura/5);
    marcaB = altura * 2.5;
    document.getElementById("op3_marcaA").innerHTML = "Marca A 45° es: "+marcaA;
    document.getElementById("op3_marcaB").innerHTML = "Marca ByC 22° es: "+marcaB;
}

document.getElementById("op4_calcular").onclick = function(){
    var angulo = document.getElementById("op4_angulo").value;
    var multiplicador = 0;
    var contraccion1 = 0;
    var contraccion2 = 0;
    var distobjeto1 = parseFloat(parseInt(document.getElementById("op4_distancia1").value));
    var distobjeto2 = parseFloat(parseInt(document.getElementById("op4_distancia2").value));
    var altura = parseFloat(parseInt(document.getElementById("op4_altura").value));
    var marcaA = 0;
    var marcaB = 0;
    var marcaC = 0;
    var marcaD = 0;
    switch(angulo){
        case "10":
            angulo = parseInt(angulo);
            multiplicador = 6;
            contraccion1 = 0.0625;
            contraccion2 = altura*contraccion1;
            marcaA = distobjeto1+contraccion2;
            marcaB = marcaA-(altura*multiplicador);
            marcaC = distobjeto2+marcaA;
            marcaD = marcaC+(altura*multiplicador);
            document.getElementById("op4_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op4_marcaB").innerHTML = "Marca B: "+marcaB;
            document.getElementById("op4_marcaC").innerHTML = "Marca C: "+marcaC;
            document.getElementById("op4_marcaD").innerHTML = "Marca D: "+marcaD;
        break;
        case "22":
            angulo = parseInt(angulo);
            multiplicador = 2.6;
            contraccion1 = 0.1875;
            contraccion2 = altura*contraccion1;
            marcaA = distobjeto1+contraccion2;
            marcaB = marcaA-(altura*multiplicador);
            marcaC = distobjeto2+marcaA;
            marcaD = marcaC+(altura*multiplicador);
            document.getElementById("op4_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op4_marcaB").innerHTML = "Marca B: "+marcaB;
            document.getElementById("op4_marcaC").innerHTML = "Marca C: "+marcaC;
            document.getElementById("op4_marcaD").innerHTML = "Marca D: "+marcaD;
        break;
        case "30":
            angulo = parseInt(angulo);
            multiplicador = 2;
            contraccion1 = 0.25;
            contraccion2 = altura*contraccion1;
            marcaA = distobjeto1+contraccion2;
            marcaB = marcaA-(altura*multiplicador);
            marcaC = distobjeto2+marcaA;
            marcaD = marcaC+(altura*multiplicador);
            document.getElementById("op4_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op4_marcaB").innerHTML = "Marca B: "+marcaB;
            document.getElementById("op4_marcaC").innerHTML = "Marca C: "+marcaC;
            document.getElementById("op4_marcaD").innerHTML = "Marca D: "+marcaD;
        break;
        case "45":
            angulo = parseInt(angulo);
            multiplicador = 1.4;
            contraccion1 = 0.375;
            contraccion2 = altura*contraccion1;
            marcaA = distobjeto1+contraccion2;
            marcaB = marcaA-(altura*multiplicador);
            marcaC = distobjeto2+marcaA;
            marcaD = marcaC+(altura*multiplicador);
            document.getElementById("op4_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op4_marcaB").innerHTML = "Marca B: "+marcaB;
            document.getElementById("op4_marcaC").innerHTML = "Marca C: "+marcaC;
            document.getElementById("op4_marcaD").innerHTML = "Marca D: "+marcaD;
        break;
        case "60":
            angulo = parseInt(angulo);
            multiplicador = 1.2;
            contraccion1 = 0.5;
            contraccion2 = altura*contraccion1;
            marcaA = distobjeto1+contraccion2;
            marcaB = marcaA-(altura*multiplicador);
            marcaC = distobjeto2+marcaA;
            marcaD = marcaC+(altura*multiplicador);
            document.getElementById("op4_marcaA").innerHTML = "Marca A: "+marcaA;
            document.getElementById("op4_marcaB").innerHTML = "Marca B: "+marcaB;
            document.getElementById("op4_marcaC").innerHTML = "Marca C: "+marcaC;
            document.getElementById("op4_marcaD").innerHTML = "Marca D: "+marcaD;
        break;
        case "nada":
            alert("Seleccione un ángulo");
        break;
    }
}

