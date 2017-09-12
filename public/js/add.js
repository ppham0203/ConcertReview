// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newReview = {
      Artist: $("#artist").val().trim(),
      Venue: $("#venue").val().trim(),
      DateOfConcert: $("#DateOfConcert").val().trim(),
      Review: $("#Review").val().trim(),
      Helpful: $("#helpful").val().trim()
    };
  


    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newReview)
      // On success, run the following code
      .done(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#artist").val("");
    $("#venue").val("");
    $("#DateOfConcert").val("");
    $("#Review").val("");
    $("#helpful").val("");
  });
  