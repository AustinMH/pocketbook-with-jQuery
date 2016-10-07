var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    if(firstName === "") {
      $('.first-name-error').text('Please enter your first name');
    }
    
    if(lastName === "") {
      $('.last-name-error').text('Please enter your last name');
    }
    
    if(email === "") {
      $('.email-error').text('Please enter your email');
    }
    
    if(password === "") {
      $('.password-error').text('Please enter your password');
    }
    
    if(password < 8) {
      $('.password-error').text('Short passwords are easy to guess. Write a password longer than 8 characters.');
    }
    
    if(email === "austinmunschhayhurst@gmail.com") {
      $('.email-error').text('That email address is taken');
    }

    return false;
  })
}

$(document).ready(main);