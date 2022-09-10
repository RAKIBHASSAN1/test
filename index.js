function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username : "rakibhassan9t7@gmail.com",
				Password : "dsfhyacjvwsqlhit",
				To : 'rakibhassan9t7@gmail.com',
				From : "rakibhassan9t7@gmail.com",
				Subject : "test mail",
				Body : "hi",
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
