// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function () {
    // Remove exisiting table
    d3.select("tbody").html("");
    // Prevent default line
    d3.event.preventDefault();
    // Get the value property of the input element
    var inputValue = d3.select("#datetime").property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((ufoReport) => {

        var row = tbody.append("tr");

        Object.entries(ufoReport).forEach(([key, value]) => {
            console.log(key, value)
            var cell = row.append("td");
            cell.text(value);
        });
    });
});