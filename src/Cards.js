let cards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
];
let cheap = [];
let dealCards;

let firstLetter;
let secondLetter;
let counter = 0;
let plays = 0;
let time=0

function askAmount() {
    dealCards = prompt("Escolha um numero par de cartas entre 4 a 14");
    while (
        dealCards < 4 ||
        dealCards > 15 ||
        dealCards % 2 === 1 ||
        isNaN(dealCards)
    ) {
        dealCards = prompt("Escolha um numero par de cartas entre 4 a 14");
    }
    sortCards();
}

function sortCards() {
    for (let i = 0; i < dealCards / 2; i++) {
        cheap.push(cards[i]);
        cheap.push(cards[i]);
    }
    cheap.sort(random);
    cheap.sort(random);
    inputCards();
    setTimeout(()=>{
       let turncards =  document.querySelectorAll(".card")
       console.log(turncards)
       for(const turn of turncards){
        turn.classList.remove("turn")
       }
    },3000)
}

function inputCards() {
    cheap.map((card) => {
        document.querySelector(".table").innerHTML += `
            <div class="card turn" onClick=selectCards(this) >
                <div class="front face">
                    <img src="../Images/front.png" alt="">
                </div>
                <div class="back face"><img src="../Images/${card}.gif" alt=""></div>
            </div>
    `;
    });
}


function selectCards(element) {
    if (firstLetter === undefined) {
        firstLetter = element;
        element.classList.add("turn");
        watch();
    } else if (secondLetter === undefined) {
        secondLetter = element;
        element.classList.add("turn");
        ;
    }

    if (firstLetter !== undefined && secondLetter !== undefined) {
        if (firstLetter.innerHTML === secondLetter.innerHTML) {
            counter += 2;
            plays += 1;
            firstLetter = undefined;
            secondLetter = undefined;
        } else {
            setTimeout(() => {
                firstLetter.classList.remove("turn");
                secondLetter.classList.remove("turn");
                firstLetter = undefined;
                secondLetter = undefined;
                plays += 1;
            }, 1000);
        }
    }

    if (counter == dealCards) {
       setTimeout(()=> alert(`Você ganhou em ${plays} jogadas e em ${time} segundos!`)
       ,1000);
    }
}0

function watch(){
    setInterval(()=>{time+=1
    document.querySelector(".root .watch").innerHTML = `
        ${time} Segundos
    `
},1000)
}

function random() {
    return Math.random() - 0.5;
}

/* ------------ start ----------- */
askAmount();
