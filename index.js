function sendMail() {
    var link = "mailto:tipusultan9t7a@gmail.com"
             + "?cc=tipusultan9t7a@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}
