function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username : "mehedibitm20@gmail.com",
				Password : "John@onlineacc123",
				To : 'mehedibitm20@gmail.com',
				From : "tipusultan9t7a@gmail.com",
				Subject : "email subject",
				Body : "email body",
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
