$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName');
      var email = $('#inputEmail');
      var message = $('#inputMessage');

      if(name.val() == "" || email.val() == "" || message.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/benj@zagorski.com',
          data: $('#contact-form').serialize(),
          datatype: 'json',
          success: function (res) {
            console.log("Success!");
            $('.submit-success').fadeIn(400);
            $('.submit-fail').fadeOut(400);
          },
          error: function (xhr, status, error) {
            console.log("Error!");
            $('.submit-fail').fadeIn(400);
            $('.submit-success').fadeOut(400);
          }
        });
        e.preventDefault();
        $(this).get(0).reset();
      }
    });

  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  });
});
