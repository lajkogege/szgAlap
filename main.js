szamokGombok();
esemenyGombok();
osszead();
kivonas();
szorzas();
osztas();
tizedes();
torles(); 
egyenlo();

let szamok=2+34+5.6+3+3+4*5;
console.log(szamok)

const tombMuveletek = [];
let kijelzo = "";
let kijelzoErtek = "";
let eredmeny;

function szamokGombok(){
    const szamgomg = document.getElementsByClassName("szamok")[0];
    let txt = "";
    let szam = 1;
    for (let index = 0; index < 9; index++) {
         txt += `<button class="gombok">${szam}</button>`;
         szam += 1;
    }
    txt += `<button class="gombok">0</button>`;
    szamgomg.innerHTML = txt;
}

function esemenyGombok() {
    const EsemenyGombok = document.querySelectorAll(".szamok button");
    EsemenyGombok.forEach(button => {
        button.addEventListener("click", gombesemeny);
    });
    return EsemenyGombok;
}

function gombesemeny(event) {
    kijelzo = document.querySelector(".kijelzo");
    kijelzoErtek = event.target.innerHTML;
    kijelzo.innerHTML += kijelzoErtek;
    tombMuveletek.push(kijelzoErtek); 
    console.log(tombMuveletek)
    console.log(eredmeny)
}


function osszead(){
    const OszeadElem = document.querySelectorAll(".muvjelek button")[0];
    OszeadElem.addEventListener("click", oszeadfv);
 
}

function oszeadfv(){
    kijelzo = document.querySelector(".kijelzo");
    const osszead = "+";
    kijelzo.innerHTML += osszead;
    tombMuveletek.push("+");
    console.log(tombMuveletek);
    console.log(eredmeny)
}

function kivonas(){
    const KivonElem = document.querySelectorAll(".muvjelek button")[1];
    KivonElem.addEventListener("click", kivonfv);
   
}

function kivonfv(){
    kijelzo = document.querySelector(".kijelzo");
    const kivon = "-";
    kijelzo.innerHTML += kivon;
    tombMuveletek.push("-");
    console.log(tombMuveletek)
    console.log(eredmeny)
}

function szorzas(){
    const SzorzasElem = document.querySelectorAll(".muvjelek button")[2];
    SzorzasElem.addEventListener("click", szorfv);
 
}

function szorfv(){
    kijelzo = document.querySelector(".kijelzo");
    const szor = "*";
    kijelzo.innerHTML += szor;
    tombMuveletek.push("*");
    console.log(tombMuveletek)
    console.log(eredmeny)
}



function osztas(){
    const OsztasElem = document.querySelectorAll(".muvjelek button")[3];
    OsztasElem.addEventListener("click", osztfv);
}

function osztfv(){
    kijelzo = document.querySelector(".kijelzo");
    const oszt = "/";
    kijelzo.innerHTML += oszt;
    tombMuveletek.push("/");
    console.log(tombMuveletek)
    console.log(eredmeny)
}


function tizedes(){
    const TizedesElem = document.querySelectorAll(".muvjelek button")[4];
    TizedesElem.addEventListener("click", tizedfv);
 
}

function tizedfv(){
    kijelzo = document.querySelector(".kijelzo");
    const tized = ".";
    kijelzo.innerHTML += tized;
    tombMuveletek.push(".");
    console.log(tombMuveletek)
    console.log(eredmeny)
}


function torles(){
    const TorlesElem = document.querySelectorAll(".muvjelek button")[6]; // Módosítva a gomb indexe
    TorlesElem.addEventListener("click", torlesfv);
}

function torlesfv(){
    kijelzo = document.querySelector(".kijelzo");
    kijelzo.innerHTML = "";
    tombMuveletek.length = 0;
    console.log(tombMuveletek)
    console.log(eredmeny)
}

function egyenlo(){
    const TorlesElem = document.querySelectorAll(".muvjelek button")[5]; 
    TorlesElem.addEventListener("click", egyenlofv);
}

function egyenlofv(){
    kijelzo = document.querySelector(".kijelzo");
    const kifejezes= tombMuveletek.join('');//összefüzöm a tomb elemiet
    let eredmeny; 
        if (kifejezes.includes('+')){//Ha tartalmaza a kfejezés akkor a jel mentén szét választja őket
            const reszletek=kifejezes.split('+');
            eredmeny = parseFloat(reszletek[0]) + parseFloat(reszletek[1]);
        } else if (kifejezes.includes('-')) {
        const reszletek = kifejezes.split('-');
        eredmeny = parseFloat(reszletek[0]) - parseFloat(reszletek[1]);
        } else if (kifejezes.includes('*')) {
        const reszletek = kifejezes.split('*');
        eredmeny = parseFloat(reszletek[0]) * parseFloat(reszletek[1]);
        } else if (kifejezes.includes('/')) {
        const reszletek = kifejezes.split('/');
        eredmeny = parseFloat(reszletek[0]) / parseFloat(reszletek[1]);
        }

    
    kijelzo.innerHTML = eredmeny;
    console.log(tombMuveletek)
    console.log(eredmeny)
    }
