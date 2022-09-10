function sendEmail() {
			Email.send({
				SecureToken : "dsfhyacjvwsqlhit",
                                To : 'rakibhassan9t7@gmail.com',
                                From : "rakibhassan9t7@gmail.com",
                                Subject : "This is the subject",
                                Body : "And this is the body"
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
