$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    console.log("this is the user data==============================================="+user_data)
    $(".member-name").text(data.name);
  });
});
