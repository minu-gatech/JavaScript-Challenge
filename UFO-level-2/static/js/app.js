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

/*function addRow1(item){
    var row = tbody.append("tr");
    Object.entries(item).forEach(function ([key,value]){
        row.append("td").text(value);
    })     
}*/

// Function to add - UFO DATA or filtered data - to HTML Table
function addRow(item){
    // Creating a new row into table element
    var row = tbody.append("tr");
    // Reading value in the object and then inserting that values into table row.
    Object.values(item).forEach(value => row.append("td").text(value))   
}


// Calling a function 'addRow'for each item of an array 'tableData'
tableData.forEach(addRow);




//// Search Filter ////

function selectedOption(searchOption, inputValue)
{
  console.log(searchOption, inputValue);
 
  var filteredData = tableData.filter(item => item[searchOption] === inputValue)
  console.log(filteredData);
  
  tbody.html("");
  
  filteredData.forEach(addRow);
  
  if (searchOption === ''){
    tableData.forEach(addRow);
  }

}


function getData(newValue) {

    var dataInputField = d3.select("#inputBox");

    var inputValue = dataInputField.property("value");
    console.log(inputValue);

    var searchValue = ""

    switch (newValue) {
        case "date/time":
            searchValue = "datetime"
            console.log(searchValue);
            break;
        case "city":
            searchValue = "city"
            console.log(searchValue);
            break;
        case "state":
            searchValue = "state"
            console.log(searchValue);
            break;
        case "country":
            searchValue = "country"
            console.log(searchValue);
            break;
        case "shape":
            searchValue = "shape"
            console.log(searchValue);
            break;  
        case "defaultoption":
            searchValue = '';
            inputValue = '';    
            break;
        default:
            //selectedOption(newValue);
            break;
            
    }   
    console.log(searchValue, inputValue);
    selectedOption(searchValue, inputValue);
  }
  


