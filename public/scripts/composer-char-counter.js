$(document).ready(function() {
    const textCount = ".new-tweet textarea";
    function counter() {
      let total = 140 - $(this).val().length;
      $(".counter").text(total).css("color", "black");
      if(total < 0) { 
        $(".counter").css("color", "red")
      }
    }
  

    $(textCount).keyup(counter);
    $(textCount).change(counter);
  
  });