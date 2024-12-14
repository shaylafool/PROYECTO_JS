/// FUNCION JUGADOR 
/// SU FUNCIONES ES CLASiFICAR POR UN OBJETO LLAMADO JUGADOR CON 4 PROPIEDADES LAS CUALES ES SU INFORMACION.

var JUGADOR = /** @class */ (function () {
    function JUGADOR(n, r, e, a) {
        this.nombre = n;   
        this.rol = r;
        this.edad = e;
        this.sexo = a;
    }
    JUGADOR.prototype.mostrarInfo = function () {
        document.write(" <br> - El jugador " + this.nombre + " de rol: " + this.rol + " y tiene edad " + this.edad + " con genero : " + this.sexo + "<br>");
    };
    JUGADOR.prototype.ATACAR = function (AT, J) {
        document.write(" <br> - El jugador " + this.nombre + " atacara " + AT + " veces a jugador: " + J + "<br>");
    };
    JUGADOR.prototype.dormir = function (nm) {
        document.write("<br> - JUGADOR " + this.nombre + " duerme " + nm + " minutos " + "<br>");
    };
    JUGADOR.prototype.ESCONDETE = function (EC, min) {
        document.write(" <br> - JUGADOR " + this.nombre + " se escondio en: " + EC + " por " + min + " minutos " + "<br>" );
    };
    JUGADOR.prototype.mostrarDatos = function (L) {
        document.write(`<div class="jugador"> <br>  NOMBRE: ${this.nombre} <br> ROL: ${this.rol} <br> EDAD: ${this.edad} <br> GENERO: ${this.sexo} <br> <br> <img src="${L}" width="100" height="100"><br></div>`);
    };
    return JUGADOR;
}());

/// CLASE TITULOS

class TITLES {
    constructor(C) {
        this.TT = C;
    }
    mostrar() {
        document.write("<br><br>" + this.TT + "<br><br>");
    }
}

var p1, p2, p3, p4, T1, T2, T3, T4, p5;

// TITULOS
T1 = new TITLES("---[ INFORMACION JUGADORES ]---");
T2 = new TITLES("---[ HISTORIAL DE JUGADAS ]---");
T3 = new TITLES("---[ SKIN DE JUGADORES ]---");
T4 = new TITLES("---[ DATOS DE JUGADOR ]---");

// JUGADORES
p1 = new JUGADOR("SANCHEZ", "CIVIL", 18, "M");
p2 = new JUGADOR("CHILY", "TRAFICANTE", 26, "F");
p3 = new JUGADOR("MANUEL", "CIVIL", 21, "MTF");
p4 = new JUGADOR("JAVI", "REY", 15, "M");


// Mostrar información y acciones
T1.mostrar();
p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();
p4.mostrarInfo();


T2.mostrar();
p1.ATACAR(9, "CHILY");
p2.dormir(90);
p1.dormir(200);
p3.ATACAR(3, "SANCHEZ");
p1.ESCONDETE("un árbol", 5);
p4.dormir(1000);
p4.ESCONDETE("en su camuflaje", 9);




// Título adicional

T4.mostrar();


// para postrar la imagen del personaje toca colocar una de internet con su link enlace 

// Mostrar datos con imágenes
p1.mostrarDatos("https://i.postimg.cc/KvSxcBVL/SANCHES.png");
p2.mostrarDatos("https://i.postimg.cc/pLPvzxPL/CHILY.png");
p3.mostrarDatos("https://i.postimg.cc/Vk48FTNB/MANUEL.png");
p4.mostrarDatos("https://i.postimg.cc/ZqMzGdpW/JAVI.png");

