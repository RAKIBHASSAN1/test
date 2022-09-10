function sendEmail() {
			Email.send({
				SecureToken : "6cbffe77-7788-4664-b2dc-33b3f06be059",
                                To : 'rakibhassan9t7@gmail.com',
                                From : "rakibhassan9t7@gmail.com",
                                Subject : "This is the subject",
                                Body : "And this is the body"
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
