// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE
var tbody = d3.select("tbody");
var form = d3.select("#form");
var table = d3.select("table");

// forEach loop to generate table
tableData.forEach(i =>
{
    
    var row = tbody.append('tr');

    row.append('td').text(i.datetime);
    row.append('td').text(i.city);
    row.append('td').text(i.state);
    row.append('td').text(i.country);
    row.append('td').text(i.shape);
    row.append('td').text(i.durationMinutes);
    row.append('td').text(i.comments);
}
);

//Select the button, table 
var table = d3.select("#ufo-table");
var button = d3.select("#filter-btn");


//Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

//Complete the event handler function for the form
function runEnter() {

//Prevent the page from refreshing
    d3.event.preventDefault();

//Get the value datetime input
    var inputdate = d3.select("#datetime");
//Get the value property of the input element
    var inputValue = inputdate.property("value");

    console.log(inputValue);

//Filter
    var filteredData = tableData.filter(j => j.datetime === inputValue);
    console.log(filteredData);
    tbody.html("");

//Print out data based on filtered
    filteredData.forEach(i =>
        {
            
        var row = tbody.append('tr');
        
        row.append('td').text(i.datetime);
        row.append('td').text(i.city);
        row.append('td').text(i.state);
        row.append('td').text(i.country);
        row.append('td').text(i.shape);
        row.append('td').text(i.durationMinutes);
        row.append('td').text(i.comments);
        }
        );

    }

  




