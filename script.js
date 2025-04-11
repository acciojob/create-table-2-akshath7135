function createTable() {
    // Get the number of rows from the user
    const rowsInput = prompt("Input number of rows");
    const rows = parseInt(rowsInput, 10); // Convert input to an integer

    // Get the number of columns from the user
    const colsInput = prompt("Input number of columns");
    const cols = parseInt(colsInput, 10); // Convert input to an integer

    // Validate the input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return; // Exit the function if input is invalid
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear any existing rows in the table
    table.innerHTML = "";

    // Create the table dynamically
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr"); // Create a new row
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("td"); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set the cell text
            row.appendChild(cell); // Append the cell to the row
        }
        table.appendChild(row); // Append the row to the table
    }
}