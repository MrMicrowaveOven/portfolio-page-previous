function sendForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contactBody = document.getElementById("contactBody").value;
  console.log("Sending to " + name + ", " + email + ", " + contactBody + ".");
  $.ajax({
    url: "https://formspree.io/benj@zagorski.com",
    method: "POST",
    data: {
      name: name,
      _replyto: email,
      _subject: "Someone likes your portfolio!",
      message: contactBody
    },
    dataType: "json",
    success: function() {
      $("#submit-success").fadeIn();
      $("#contact-form").fadeOut();
    },
    error: function() {
      $("#submit-errors").fadeIn();
    }
  });
}
