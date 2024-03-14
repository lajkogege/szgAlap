szamokGombok();

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

function esemenyGombok(){
    const EsemynGombok=document.querySelectorAll(".szamok button ");
    console.log(esemenyGombok)
    for (let index = 0; index < esemenyGombok.length; index++) {
        esemenyGom
        
    }
}

function