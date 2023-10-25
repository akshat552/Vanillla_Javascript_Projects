(function() {
    emailjs.init("302mIHjArYJxIzfQu"); // Replace 'user_your_user_id' with your Email.js user ID

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Use the Email.js service and template to send the email
        emailjs.send("service_cdgj2nn", "template_4etmohs", {
            from_name: name,
            from_email: email,
            to_email: "akshat.02jan@gmail.com", 
            subject: subject,
            message_html: message
        }).then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contact-form").reset();

            // You can add further actions or redirects here.
        }, function(error) {
            alert("Email could not be sent. Please try again later.");
        });
    });
})();