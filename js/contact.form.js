

/*jQuery(document).ready(function($) {
    'use strict';

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: 'store_detail.php',
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name, #email, #phone_number, #subject, #message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

});*/


function save_detail()
{

    var name= $("#sender_name").val();
    var email= $("#sender_email").val();
    var reason= $("#reason").val();
    var message= $("#message").val();
    
 if(name!="" && email!="" && reason!="" && message!="")
 {
  $.ajax
  ({
   type:'post',
   url:'store_detail.php',
   data:{
    submit_contact:"submit_contact",
    name:name,
    email:email,
    reason:reason,
    message:message
   },
   success:function(response) {
    if(response=="submitted")
    {
     document.getElementById("contact_form").innerHTML="Thanks For Contacting Us We Will Contact You Soon";
    }
   }
  });
 }
 else
 {
  alert("Please Fill All The Details");
 }
 
 return false;
}
