
// CLASE E FUNCION DE SKIN DE JUGADORES

class JUGADOR_SKIN {
    constructor(jugador, C, TR, AC) {
        this.jugador = jugador; // Instancia de JUGADOR
        this.color_piel = C;
        this.traje = TR;
        this.accesory = AC;
    }
    mostrarInfo() {
        document.write("<br> - El jugador de nombre " + this.jugador.nombre + " de color de piel " + this.color_piel + " con traje de: " + this.traje + " de arma " + this.accesory + "<br>");
    }
}

T3.mostrar();
let p1_skin = new JUGADOR_SKIN(p1, "AZUL", "SOLDADO", "UZI");
p1_skin.mostrarInfo();

let p2_skin = new JUGADOR_SKIN(p2, "VERDE", "GUERRERO", "ESPADA");
p2_skin.mostrarInfo();

let p3_skin = new JUGADOR_SKIN(p3, "BLANCO", "ARTILLERO", "TORRETA");
p3_skin.mostrarInfo();
let p4_skin = new JUGADOR_SKIN(p4, "BLANCO", "CAMUFLAJE", "NAVAJA")
p4_skin.mostrarInfo();