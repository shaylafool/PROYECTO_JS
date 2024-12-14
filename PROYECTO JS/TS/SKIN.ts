class JugadorSkin {
    jugador: Jugador;
    color_piel: string;
    traje: string;
    accesory: string;

    constructor(jugador: Jugador, C: string, TR: string, AC: string) {
        this.jugador = jugador; // Instancia de JUGADOR
        this.color_piel = C;
        this.traje = TR;
        this.accesory = AC;
    }

    mostrarInfo() {
        document.write("<br> - El jugador de nombre " + this.jugador.nombre + " de color de piel " + this.color_piel + " con traje de: " + this.traje + " de arma " + this.accesory + "<br>");
    }
}

// Aseguramos que los títulos están definidos antes de llamarlos
if (typeof T3 !== 'undefined') {
    T3.mostrar();
}


let p1_skin = new JugadorSkin(p1, "AZUL", "SOLDADO", "UZI");
p1_skin.mostrarInfo();

let p2_skin = new JugadorSkin(p2, "VERDE", "GUERRERO", "ESPADA");
p2_skin.mostrarInfo();

let p3_skin = new JugadorSkin(p3, "BLANCO", "ARTILLERO", "TORRETA");
p3_skin.mostrarInfo();

let p4_skin = new JugadorSkin(p4, "BLANCO", "CAMUFLAJE", "NAVAJA");
p4_skin.mostrarInfo();
