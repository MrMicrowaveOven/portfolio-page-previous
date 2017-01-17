$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName');
      var email = $('#inputEmail');
      var message = $('#inputMessage');

      if(name.val() == "" || email.val() == "" || message.val() == "") {
        console.log("Failure!!!");
        $('.submit-fail').fadeIn(400);
        $('.submit-success').fadeOut(400);
        setTimeout(function() {
          $('.submit-fail').fadeOut(400);
        }, 5000);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/benj@zagorski.com',
          data: $('#contact-form').serialize(),
          datatype: 'json',
        });
      }
      console.log("DONE!");
      $('.submit-success').fadeIn(400);
      $('.submit-fail').fadeOut(400);
      e.preventDefault();
      $(this).get(0).reset();
      setTimeout(function() {
        $('.submit-success').fadeOut(400);
      }, 5000);
  });

  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  });


});
