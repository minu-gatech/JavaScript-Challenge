//////////////////////////////////////////////
/* Level 1: Automatic Table and Date Search */
//////////////////////////////////////////////



//// Using the UFO dataset provided in the form of an array of JavaScript objects,
//// write code that appends a table to your web page and
//// then adds new rows of data for each UFO sighting.


// from data.js
var tableData = data;

// Selecting tbody element of html
var tbody = d3.select("tbody");


// Function to add - UFO DATA or filtered data - to HTML Table
function addRow(item){
    // Creating a new row into table element
    var row = tbody.append("tr");
    // Reading value in the object and then inserting that values into table row.
    Object.values(item).forEach(value => row.append("td").text(value))   
}


// Calling a function 'addRow'for each item of an array 'tableData'
tableData.forEach(addRow);



//// Use a date form in your HTML document and
//// write JavaScript code that will listen for events and
//// search through the date/time column to find rows that match user input.


// Referencing to button in the HTML form
var filteredButton = d3.select("#filter-btn");


// Event will be triggered when buttion is clicked and calls the function

filteredButton.on("click", function () // Inline anonymous function
{
// Select the input element and get the raw HTML node
var dataInputField = d3.select("#datetime");

// Get the value property of the input element
var inputValue = dataInputField.property("value");
console.log(inputValue);

// Filtering out the data based on input value
var filteredData = tableData.filter(item => item.datetime === inputValue)
console.log(filteredData);

// Clearing out the tr and td from tbody
tbody.html("");

// Calling a function for each item of an array 'filteredData'
filteredData.forEach(addRow);

// Show a message if there is input field is empty
if (inputValue == '')
{
    tbody.append("tr").append("td").text("Please enter the search information!")
}
 
}   // Anonymous Function Ends
);  // On() Method Ends


    

