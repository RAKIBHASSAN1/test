function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username : "rakibhassan9t7@gmail.com",
				Password : "nkftukmjddtzhzdx",
				To : 'rakibhassan9t7@gmail.com',
				From : "tipusultan9t7a@gmail.com",
				Subject : "email subject",
				Body : "email body",
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
