$(document).ready(function() {
    $("#submit-form").validate({
        rules: {
            name:{
                required: true,
                minlength: 3,
                maxlength: 20
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true,
                minlength: 10,
                maxlength: 10
            },
            message:{
                required: true,
                minlength: 10,
                maxlength: 200
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 3 characters",
                maxlength: "Your name must consist of at most 20 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Your phone number must consist of at least 10 characters",
                maxlength: "Your phone number must consist of at most 10 characters"
            },
            message: {
                required: "Please enter your message",
                minlength: "Your message must consist of at least 10 characters",
                maxlength: "Your message must consist of at most 200 characters"
            }
        },
        submitHandler: function(form) {
            form.submit();

        }

    })
})

