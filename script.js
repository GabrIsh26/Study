let deck = [];
let index = 0;
let score = 0;
let flipped = false;

function updateCharacter(){

    let c = "🔒 Locked";

    if(score >= 100){
        c = "🦊 Fox";
    } else if(score >= 50){
        c = "🐶 Dog";
    } else if(score >= 20){
        c = "🐱 Cat";
    }

    document.getElementById("character").innerText = c;
}

/* ADD FLASHCARD */

function addCard(){

    let q = document.getElementById("question").value;
    let a = document.getElementById("answer").value;

    if(q === "" || a === ""){
        alert("Fill both fields");
        return;
    }

    deck.push({q:q, a:a});

   let li = document.createElement("li");
li.textContent = q;
document.getElementById("deckList").appendChild(li);
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";

    if(deck.length === 1){
        showCard();
    }
}

/* SHOW CARD */

function showCard(){
    document.getElementById("front").innerText =
        deck[index].q;

    document.getElementById("back").innerText =
        deck[index].a;
}

/* FLIP CARD */

function flipCard(){

    if(deck.length === 0){
        alert("Add flashcards first!");
        return;
    }

    document.getElementById("card").classList.toggle("flipped");

    if(!flipped){
        score += 5;
        document.getElementById("score").innerText = score;
    }

    flipped = !flipped;

    updateCharacter();
}


/* NEXT CARD */

function nextCard(){

    if(deck.length === 0){
        alert("No cards yet!");
        return;
    }

    index++;

    if(index >= deck.length){
        index = 0;
        score += 20;
        alert("Deck complete! +20 bonus");
    } else {
        score += 10;
    }

    flipped = false;

    document.getElementById("card").classList.remove("flipped");

    showCard();

    document.getElementById("score").innerText = score;

    updateCharacter();
}
