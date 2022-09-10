function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username : "tipusultan9t7a@gmail.com",
				Password : "<email password>",
				To : 'tipusultan9t7a@gmail.com',
				From : "tipusultan9t7a@gmail.com",
				Subject : "test mail",
				Body : "hi",
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
