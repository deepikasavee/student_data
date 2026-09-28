```javascript
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

    // Get 5 subject marks
    const mark1 = Number(document.getElementById("mark1").value);
    const mark2 = Number(document.getElementById("mark2").value);
    const mark3 = Number(document.getElementById("mark3").value);
    const mark4 = Number(document.getElementById("mark4").value);
    const mark5 = Number(document.getElementById("mark5").value);

    // Check if all fields are filled
    if (
        name === "" ||
        roll === "" ||
        course === "" ||
        email === "" ||
        document.getElementById("mark1").value === "" ||
        document.getElementById("mark2").value === "" ||
        document.getElementById("mark3").value === "" ||
        document.getElementById("mark4").value === "" ||
        document.getElementById("mark5").value === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate total marks
    const total = mark1 + mark2 + mark3 + mark4 + mark5;

    // Calculate average
    const average = total / 5;

    // Determine pass/fail
    const status = average >= 40 ? "Pass" : "Fail";

    // Create a new row
    const row = table.insertRow();

    // Add student data
    row.insertCell(0).textContent = roll;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = course;
    row.insertCell(3).textContent = email;
    row.insertCell(4).textContent = mark1;
    row.insertCell(5).textContent = mark2;
    row.insertCell(6).textContent = mark3;
    row.insertCell(7).textContent = mark4;
    row.insertCell(8).textContent = mark5;
    row.insertCell(9).textContent = total;
    row.insertCell(10).textContent = average.toFixed(2);
    row.insertCell(11).textContent = status;

    // Clear the form
    form.reset();

    // Success message
    alert("Student data added successfully!");
});
```

### Your HTML input IDs must match

Add these five inputs to your HTML:

```html
<input type="number" id="mark1" placeholder="Subject 1 Marks">
<input type="number" id="mark2" placeholder="Subject 2 Marks">
<input type="number" id="mark3" placeholder="Subject 3 Marks">
<input type="number" id="mark4" placeholder="Subject 4 Marks">
<input type="number" id="mark5" placeholder="Subject 5 Marks">
```

And your table headings should be:

```html
<th>Roll No</th>
<th>Name</th>
<th>Course</th>
<th>Email</th>
<th>Subject 1</th>
<th>Subject 2</th>
<th>Subject 3</th>
<th>Subject 4</th>
<th>Subject 5</th>
<th>Total</th>
<th>Average</th>
<th>Status</th>
```

### Example

If the student enters:

```text
Subject 1 = 80
Subject 2 = 75
Subject 3 = 90
Subject 4 = 85
Subject 5 = 70
```

The program calculates:

```text
Total = 400
Average = 80.00
Status = Pass
```

So you are now **not using fixed student values** in the JavaScript—the values come from the form entered by the user.
