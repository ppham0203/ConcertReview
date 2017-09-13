$(document).ready(function(){
  // Some code to be executed...
  var artist = localStorage.getItem('_artist');
  console.log( "ready!" );
  searchArtists(artist);
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
