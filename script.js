const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

const flashcardsDeck2 = [
    { term: "Python", definition: "A high-level programming language" },
    { term: "Java", definition: "A class-based, object-oriented programming language" },
    { term: "C++", definition: "A general-purpose programming language" }
]

const decks = [flashcards, flashcardsDeck2];
// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let deckIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardElement = document.getElementById("flashcard");
    const currentCard = decks[deckIndex][currentIndex];
    if (showingTerm) {
        cardElement.innerText = currentCard.term;
    } else {
        cardElement.innerText = currentCard.definition;
    }
}

// The rest of the code you will write is apart of event listeners
const cardElement = document.getElementById("flashcard");
cardElement.addEventListener("click", function () {
    showingTerm = !showingTerm;
    displayCard();
});

function nextCard() {
    currentIndex = (currentIndex + 1) % decks[deckIndex].length;
    showingTerm = true;
    displayCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + decks[deckIndex].length) % decks[deckIndex].length;
    showingTerm = true;
    displayCard();
}

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

function addCardToArray(term, definition) {
    const deck = decks[deckIndex];
    deck.push({ term: term, definition: definition });
}

const addBtn = document.getElementById("add-card-btn");
addBtn.addEventListener("click", function () {
    const termInput = document.getElementById("new-term");
    const definitionInput = document.getElementById("new-definition");
    if (!termInput || !definitionInput) return;
    const term = termInput.value.trim();
    const definition = definitionInput.value.trim();
    addCardToArray(term, definition);
    termInput.value = "";
    definitionInput.value = "";
});


function switchDeck() {
    deckIndex = (deckIndex + 1) % decks.length;
    currentIndex = 0;
    showingTerm = true;
    displayCard();
}

const switchDeckBtn = document.getElementById("switch-deck-btn");
switchDeckBtn.addEventListener("click", switchDeck);

// This line will display the card when the page is refreshed
window.onload = displayCard;

