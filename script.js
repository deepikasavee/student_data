// Get the form
const form = document.querySelector("form");

// Get the table
const table = document.querySelector("table");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
    const marks = document.getElementById("marks").value;

    // Check if all fields are filled
    if (name === "" || roll === "" || course === "" || email === "" || marks === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new row
    const row = table.insertRow();

    // Add student data
    row.insertCell(0).textContent = roll;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = course;
    row.insertCell(3).textContent = email;
    row.insertCell(4).textContent = marks;

    // Clear the form
    form.reset();

    // Success message
    alert("Student data added successfully!");
});

