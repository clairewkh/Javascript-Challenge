// from data.js
var tableData = data;

// YOUR CODE HERE
var tbody = d3.select("tbody");

// forEach loop that populates table
tableData.forEach((i) =>
{
    // row is created for table
    var row = tbody.append('tr');
    
    row.append('td').text(i.datetime);
    row.append('td').text(i.city);
    row.append('td').text(i.state);
    row.append('td').text(i.country);
    row.append('td').text(i.shape);
    row.append('td').text(i.durationMinutes);
    row.append('td').text(i.comments);
}
)