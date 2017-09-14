$(document).ready(function(){
  // Some code to be executed...
  var artist = localStorage.getItem('_artist');
  console.log( "ready!" );
  searchArtists(artist);
  ticketSearch(artist);
  $(".select-artist").on("click", function(event) {


      $("#bioDiv").show();

      // Storing the artist name
      artist = $(".artist-input").val().trim();
      localStorage.clear();
      localStorage.setItem('_artist', artist);

      // Running the searchArtists function (passing in the artist as an argument)
      searchArtists(artist);
  });


function searchArtists(artist) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=8ce559d2fd9f4e234a3ac172db2d0ef6&format=json";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

            // Printing the entire object to console
            console.log(response);
            console.log("Artist name: " + response.artist.name);
            console.log("Bio: " + response.artist.bio);
            console.log("Artist Image: " + response.artist.image[0]);

            // Constructing HTML containing the artist information
            var artistName = $("<h1>").text(response.artist.name);
            var artistURL = $("<a>").attr("href", response.artist.url).append(artistName);
            var artistImage = $("<img>").attr("src", response.artist.image[2]["#text"], "align", "right");
            var Bio = $("<p>").text(response.artist.bio.summary.substring(response.artist.bio.summary[0], response.artist.bio.summary.indexOf("<a")));

            $("#artist-div").empty();


            $("#artist-div").append(artistURL, artistImage, Bio);
            artistImage.css("float", "left");
            artistImage.css("margin-right", "10px");
        }
      );
    }
});




function ticketSearch(artist) {
    $(".div").empty();
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + artist + "&classificationName=music&countryCode=US&apikey=8Tvqs6GD3WAR3yzGQutUM67fbguu78VT";

    //Uses ajax to pull events from TicketMaster API
    $.ajax({
        url: queryURL,
        methond: "GET"
    }).done(function (response) {
        console.log(response);

        for (var i = 0; i < response._embedded.events.length; i++) {
            arr = response._embedded.events;

            arr.sort(function compare(a, b) {
                var dateA = new Date(a.dates.start.localDate);
                var dateB = new Date(b.dates.start.localDate);
                return dateA - dateB;
            });
            var name = $("<p class='name'>").text(response._embedded.events[i].name);
            var eventDate = $("<p class='date'>").text(response._embedded.events[i].dates.start.localDate);
            var venue = $("<p class='venue'>").text(response._embedded.events[i]._embedded.venues[0].name);
            var ticketLink = $("<p><a class='tix' href='" + response._embedded.events[i].url + "'>Get Tickets!</a></p>");
            $("#date-div").append(eventDate);
            $("#venue-div").append(venue);
            $("#name-div").append(name);
            $("#ticket-div").append(ticketLink);


        }
        var urlTix = $("<p><a class='tix' href='/buy'>Buy Upcoming Tour Tickets</a></p>");
        $("#artist-div").append(urlTix);
    });

}



// helpfulness button click function

$("#like-btn").on("click", function (event) {


});
