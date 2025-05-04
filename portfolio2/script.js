// Simple typing animation (optional)
const texts = ["Tech Enthusiast", "Front End Web developer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('p').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  
    // Re-initialize AOS for new visible content
    AOS.refreshHard();
  }
  
