const navToggle = document.getElementById('nav-toggle');
const sidebar = document.getElementById('sidebar');

navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
const textElement = document.getElementById('text');
const phrases = ["Logical Coder","Problem Solver", "Creative Thinker","Web Developer"];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
  const currentPhrase = phrases[phraseIndex];
  
  // Determine what text to show
  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
    typeSpeed = 100; // Faster when deleting
  } else {
    textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
    typeSpeed = 200; // Slower when typing
  }

  // Logic for switching between typing and deleting
  if (!isDeleting && characterIndex === currentPhrase.length) {
    // Pause at the end of the phrase
    isDeleting = true;
    typeSpeed = 2000; 
  } else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Loop back to start
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Start the effect
document.addEventListener('DOMContentLoaded', type);

