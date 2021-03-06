$(function () {
    $.validator.addMethod("strongPassword", function (value, element) {
        return this.optional(element) || value.length >= 6;
    }, "Your pass must be at least 6 characters\".");

   $("#register-form").validate({
       rules: {
           email: {
               required: true,
               email: true
           },
           password: {
               required: true,
               strongPassword: true
           },
           password2: {
               required: true,
               equalTo: "#password"
           },
           firstName: {
               required: true,
               nowhitespace: true,
               lettersonly: true
           }
           },
           messages: {
                email: {
                    required: 'Please enter an email address',
                    email: 'Please enter a <em>valid</em> email address'
                }
           }

   });
});