  var btn= document.getElementById('btn');
  btn.addEvenListener('click' , function(e){
      e.preventDefault()
      var name= document.getElementById('name').value;
      var email= document.getElementById('email').value;
      var subject= document.getElementById('subject').value; 
      var message= document.getElementById('message').value; 
      var body = 'name: ' +name +'<br/> email: ' + email + '<br/> subject' + subject + '<br/> message' + message;
      Email.send({
      Host : "smtp.gmail.com",
      Username : "rakibhassan9t7@gmail.com",
      Password : "zouyvgfazhxafkdg",
      To : 'rakibhassan9t7@gmail.com',
      From : email,
      Subject : subject,
      Body : body
      }).then(
      message => alert(message)
      );
  }
