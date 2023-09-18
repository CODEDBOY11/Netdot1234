$(document).ready(function(){
$(".menu-button").click(function(){
$(".menu-bar").toggleClass( "open" );
})
})
$(document).ready(function(){
  // When the "home" icon is clicked
  $(".menu-button.home").click(function(){
    // Toggle the "active" class on the navigation content to show/hide it
    $(".nav-content").toggleClass("active");
  });
});
console.log("fool");