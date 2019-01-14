$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
   
    $(".member-name").text(data.name);
    $(".member-age").text(data.age);
    $(".member-diet").text(data.diet);
    $(".member-email").text(data.email);
  });
});
