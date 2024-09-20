// Your existing code
console.log("Hello World");

// Determine the time of day and show a welcome message
const hours = new Date().getHours();

let welcomeMessage = "";

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

if (isMorning) {
    welcomeMessage = "Good Morning! Hope you have a great start to your day.";
} else if (isAfternoon) {
    welcomeMessage = "Good Afternoon! Hope you're having a productive day.";
} else if (isEvening) {
    welcomeMessage = "Good Evening! Relax and enjoy your evening.";
}

// Add the message to the page
document.getElementById("welcome").textContent = welcomeMessage;

// Adding the secret message to localStorage
localStorage.setItem("It's a secret to everybody.", "It's dangerous to go alone! Take this.");