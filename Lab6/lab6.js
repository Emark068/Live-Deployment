// --- Sample Code Function ---
function changeTitle() {
    document.getElementById("title").innerHTML = "New Title!";
}

// --- Activity 1: Add paragraph and change color ---
const para = document.createElement("p");
para.innerText = "Activity 1: This is a new paragraph.";
para.style.color = "blue";
document.body.appendChild(para);

// --- Activity 2: Append to existing UL ---
const ul = document.getElementById("myList");
const li = document.createElement("li");
li.innerText = "Activity 2: New Dynamic Item";
ul.appendChild(li);

// --- Activity 3: querySelector and Toggle ---
function toggleBox() {
    const element = document.querySelector(".box");
    element.classList.toggle("hidden");
}

// --- Activity 4: Fetch input and display in Div ---
function displayInput() {
    const inputVal = document.getElementById("userInput").value;
    document.getElementById("displayDiv").innerText = inputVal;
}

// --- Activity 5: Handle Errors ---
try {
    // Intentionally selecting an ID that doesn't exist
    const ghost = document.getElementById("non-existent-element");
    if (!ghost) {
        throw new Error("Element not found!");
    }
} catch (err) {
    console.log("Activity 5 Error Logged: " + err.message);
}