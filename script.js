const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardElement = document.getElementById("flashcard");
    const currentCard = flashcards[currentIndex];
    if (showingTerm) {
        cardElement.innerText = currentCard.term;
    } else {
        cardElement.innerText = currentCard.definition;
    }
}

// The rest of the code you will write is apart of event listeners
const cardElement = document.getElementById("flashcard");
cardElement.addEventListener("click", function() {
    showingTerm = !showingTerm;
    displayCard();
});

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
}

// Hook up the prev/next buttons safely
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
if (nextBtn) nextBtn.addEventListener("click", nextCard);
if (prevBtn) prevBtn.addEventListener("click", prevCard);

// This line will display the card when the page is refreshed
window.onload = displayCard;
