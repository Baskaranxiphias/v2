$('#emailUs').click(function () {
    var name = $("#Name").val();
            var emil = $("#Emails").val();
            var cmmt = $("#Problem").val();

            var email   = require("../node_modules/emailjs/email");
    var server 	= email.server.connect({
       user:    "baskaran@xiphiastec.com", 
       password:"id0ntkn0w", 
       host:    "smtp.your-email.com", 
       ssl:     true
    });
     
    // send the message and get a callback with an error or details of the message that was sent
    server.send({
       text:    cmmt, 
       from:    "Baskaran <baskaran@xiphiastec.com>", 
       to:      emil,
       cc:      "",
       subject: "testing emailjs"
    }, function(err, message) { 
        if(err){
            console.log(err || message);
        }else{
            console.log("success");
        }
     });


    });






