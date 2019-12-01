$("#clicker").click(function() {
    // $("#secret").css("display", "block");
    $( "#secret" ).slideDown( 1000, function() {
    });
    $("#clicker").text("Click me to toggle a hidden secret!");
    $("#clicker").fadeToggle( "slow", "linear" );
});
$("#clicker2").click(function() {
    $( ".secret" ).slideUp();

});
$("#clicker3").click(function() {
$("img").attr("src","done.gif");

});