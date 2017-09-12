// When user hits the author-search-btn
$("#author-search-btn").on("click", function() {
    
      // Save the authorthey typed into the author-search input
      var artistSearched = $("#artist-search").val().trim();
    
      // Make an AJAX get request to our api, including the user's author in the url
      $.get("/api/" + artistSearched, function(data) {
    
        // Log the data to the console
        console.log(data);
        
    
      });
    
    });