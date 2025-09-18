// Typewriter effect
const typewriterText = [
    "Aspiring Engineer.",
    "Curious Learner.",
    "Creative Thinker.",
    "Team Player.",
    "Driven by Purpose."
];
let twIndex = 0, charIndex = 0, isDeleting = false;
const twElem = document.getElementById('typewriter');
function type() {
    let current = typewriterText[twIndex];
    if (isDeleting) {
        twElem.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            twIndex = (twIndex + 1) % typewriterText.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 40);
        }
    } else {
        twElem.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 80);
        }
    }
}
type();

// Random tech fact
const techFacts = [
    "Did you know? The first computer bug was an actual moth!",
    "Python is named after Monty Python, not the snake.",
    "HTML stands for HyperText Markup Language.",
    "The first website is still online: info.cern.ch",
    "C++ was originally called 'C with Classes'.",
    "JavaScript was created in just 10 days.",
    "The first email was sent in 1971."
];
function showRandomFact() {
    const factElem = document.getElementById('tech-fact');
    let newFact;
    do {
        newFact = techFacts[Math.floor(Math.random() * techFacts.length)];
    } while (factElem.textContent === newFact && techFacts.length > 1);
    factElem.textContent = newFact;
}
