function sendEmail(){


    Email.send({
        Host : "smtp.gmail.com",
        Username : "pisciottano.work@gmail.com",
        Password : "password",
        To : 'pisciottano2000@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New email from your website",
        Body : document.getElementById('message').value,
    }).then(
      message => alert(message)
    );


}