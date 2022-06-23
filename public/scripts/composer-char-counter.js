$(document).ready(function() {
    const textCount = ".new-tweet textarea";
    function counter() {
      let total = 140 - $(this).val().length;
      $(".counter").text(total);
    }

    $(textCount).keyup(counter);
    $(textCount).change(counter);
  
  });