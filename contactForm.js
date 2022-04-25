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
        var name = $('#inputName').val()
        var email = $('#inputEmail').val()
        var message = $('#inputMessage').val()
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'a767b334ee202bf9650b23aa5b3ec189-us4',
            'message': {
              'from_email': $('#inputEmail').val(),
              'to': [
                  {
                    'email': 'benj@zagorski.com ',
                    'type': 'to'
                  }
                ],
              'autotext': 'true',
              'subject': "Someone's interested!",
              'html': name + ' from ' + email + ' sent a message.  Here it is:  ' + message
            }
          }
         }).done(function(response) {
           console.log(response); // if you're into that sorta thing
         });
      }
      // console.log("DONE!");
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
