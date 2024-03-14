szamokGombok();
const esemnygombok=esemenyGombok();
gombesemeny();
const muvjel=muveletjelek();

function szamokGombok(){
    const szamgomg= document.getElementsByClassName("szamok")[0];
    let txt="";
    let szam=1
    for (let index = 0; index < 9; index++) {
         txt += `<button class="gombok">${szam}</button>`;
         szam+=1;
    }
    txt+=`<button class="gombok">0</button>`
    szamgomg.innerHTML=txt;
    console.log(txt);
}

function esemenyGombok() {
    const EsemenyGombok = document.querySelectorAll(".szamok button");
    EsemenyGombok.forEach(button => {
        button.addEventListener("click", gombesemeny);
    });
    return EsemenyGombok;
}

function gombesemeny(event) {
    const kijelzo = document.querySelector(".kijelzo");
    kijelzo.innerHTML = event.target.innerHTML;
}

function muveletjelek(){
    const muveletJel=querySelector("#osszeadas");
    muveletJel.addEventListener("click", osszeadas())
    return muveletJel;
}

function osszeadas(){
    const kijelzo = document.querySelector(".kijelzo");
    kijelzo.innerHTML = event.target.innerHTML;
}