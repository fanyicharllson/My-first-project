function search() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var results = document.querySelectorAll('searchable');
    var searchResults = [];

    // Loop through each element with the "searchable" class
    for (var i = 0; i < results.length; i++) {
        var text = results[i].textContent.toLowerCase();
        if (text.includes(input)) {
            searchResults.push(results[i].outerHTML);
        }
    }

    // Display search results
    document.getElementById('search-results').innerHTML = searchResults.join('');
}
// <!-- <script>
// function Search() {
// var input = document.getElementById("search-input").value.toLowerCase();
// alert("Search input: " + input);

// var items = document.querySelectorAll(".item");
// alert("Number of items: " + items.length);

// items.forEach(function(item) {
// var searchableElements = item.querySelectorAll(".searchable");
// alert("Number of searchable elements in this item: " + searchableElements.length);

// searchableElements.forEach(function(element) {
// var text = element.textContent.toLowerCase();
// alert("Text content of this searchable element: " + text);
// if (text.includes(input)) {
// alert("Match found!");
// element.style.backgroundColor = "yellow";
// item.scrollIntoView({ behavior: "smooth", block: "start" });
// }
// });
// });
// }


// </script>
// -->