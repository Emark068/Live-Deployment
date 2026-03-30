const heading = document.getElementById("timer-text");

// Timer event (5 seconds)
setTimeout(function () {
    heading.textContent = "Time is up! The text has changed.";
    heading.style.color = "yellow";
    console.log("Timer finished: text updated.");
}, 5000);

// Button click event
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

// Keyboard event
document.getElementById("input").addEventListener("keyup", function(event) {
    console.log("Key pressed: " + event.key);
});