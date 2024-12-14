
class Jugador {
    nombre: string;
    rol: string;
    edad: number;
    sexo: string;

    constructor(n: string, r: string, e: number, a: string) {
        this.nombre = n;
        this.rol = r;
        this.edad = e;
        this.sexo = a;
    }

    mostrarInfo() {
        document.write(" <br> - El jugador " + this.nombre + " de rol: " + this.rol + " y tiene edad " + this.edad + " con genero : " + this.sexo + "<br>");
    }

    atacar(AT: number, J: string) {
        document.write(" <br> - El jugador " + this.nombre + " atacara " + AT + " veces a jugador: " + J + "<br>");
    }

    dormir(nm: number) {
        document.write("<br> - JUGADOR " + this.nombre + " duerme " + nm + " minutos " + "<br>");
    }

    esconderse(EC: string, min: number) {
        document.write(" <br> - JUGADOR " + this.nombre + " se escondio en: " + EC + " por " + min + " minutos " + "<br>");
    }

    mostrarDatos(L: string) {
        const contenedor = document.createElement('div');
        contenedor.className = 'jugador';
        contenedor.innerHTML = `
            <br> NOMBRE: ${this.nombre} <br> 
            ROL: ${this.rol} <br> 
            EDAD: ${this.edad} <br> 
            GENERO: ${this.sexo} <br> 
            <br> 
            <img src="${L}" width="100" height="100">
            <br>
        `;
        document.body.appendChild(contenedor);
    }
}

class Titles {
    color_piel: string;

    constructor(C: string) {
        this.TT = C;
    }

    mostrar() {
        document.write("<br><br>" + this.TT + "<br><br>");
    }
}

let p1: Jugador, p2: Jugador, p3: Jugador, p4: Jugador;
let T1: Titles, T2: Titles, T3: Titles, T4: Titles;

// TITULOS
T1 = new Titles("---[ INFORMACION JUGADORES ]---");
T2 = new Titles("---[ HISTORIAL DE JUGADAS ]---");
T3 = new Titles("---[ SKIN DE JUGADORES ]---");
T4 = new Titles("---[ DATOS DE JUGADOR ]---");

// JUGADORES
p1 = new Jugador("SANCHEZ", "CIVIL", 18, "M");
p2 = new Jugador("CHILY", "TRAFICANTE", 26, "F");
p3 = new Jugador("MANUEL", "CIVIL", 21, "MTF");
p4 = new Jugador("JAVI", "REY", 15, "M");

// Mostrar información y acciones
T1.mostrar();
p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();
p4.mostrarInfo();

T2.mostrar();
p1.atacar(9, "CHILY");
p2.dormir(90);
p1.dormir(200);
p3.atacar(3, "SANCHEZ");
p1.esconderse("un árbol", 5);
p4.dormir(1000);
p4.esconderse("en su camuflaje", 9);

// Título adicional
T4.mostrar();

// Mostrar datos con imágenes
p1.mostrarDatos("https://i.postimg.cc/KvSxcBVL/SANCHES.png");
p2.mostrarDatos("https://i.postimg.cc/pLPvzxPL/CHILY.png");
p3.mostrarDatos("https://i.postimg.cc/Vk48FTNB/MANUEL.png");
p4.mostrarDatos("https://i.postimg.cc/ZqMzGdpW/JAVI.png");
