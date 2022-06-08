

$( "#facebook" ).click(function() {
    $( "#facebook" ).animate({
      width: "10%",
      opacity: 0.4,
      marginLeft: "0.6in",
      marginRight: "0.6in",
      fontSize: "2em",
      borderWidth: "10px"
    }, 1500 );
  });

  $( "#twitter" ).click(function() {
    $( "#twitter" ).animate({
      width: "10%",
      opacity: 0.4,
      marginLeft: "0.6in",
      marginRight: "0.6in",
      fontSize: "2em",
      borderWidth: "10px"
    }, 1500 );
  });

  $( "#inst" ).click(function() {
    $( "#inst" ).animate({
      width: "10%",
      opacity: 0.4,
      marginLeft: "0.6in",
      marginRight: "0.6in",
      fontSize: "2em",
      borderWidth: "10px"
    }, 1500 );
  });

  $( "#env" ).click(function() {
    $( "#env" ).animate({
      width: "10%",
      opacity: 0.4,
      marginLeft: "0.6in",
      marginRight: "0.6in",
      fontSize: "2em",
      borderWidth: "10px"
    }, 1500 );
  });


  $("#sl1").mouseenter(function(){
    $("#sl1").attr("src", "p1.1.jpg"); 
    return false;
});
$("#sl1").mouseleave(function(){
    $("#sl1").attr("src", "unia.1.jpg"); 
    return false;
});

$("#sl2").mouseenter(function(){
  $("#sl2").attr("src", "p2.2.jpg"); 
  return false;
});
$("#sl2").mouseleave(function(){
  $("#sl2").attr("src", "unn.1.jpg"); 
  return false;
});


$('#tekstt').mouseenter (function(){

  $('#tekstt').css ('font-weight', 'bold');
  return false;
});


$("#tekstt").mouseleave(function(){
  $("#tekstt").css('font-size', '2rem'); 
  return false;
});

$("#in").click(function(){
  $("#sl0").slideUp("slow"); 
  
});


$("#ex1").click(function(){
  $("#ex1").html("Modern architecture");
  
});



 