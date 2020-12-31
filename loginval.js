function loginformValidation()
{
    var mail=document.form1.mail;
    var pass=document.form1.psw;
    {
        if(emailval(mail))
            {
                if(passwordval(pass,7,30))
                    {

                    } 
            }
    }
    return false;
}

function emailval(mail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid e-mail address!");
        mail.focus();
        return false;
    }
}

function passwordval(pass,mx,my)
{
    var passlength=pass.value.length;
    if (passlength== 0 ||passlength >= my || passlength< mx)
    {
        alert("Password should not be empty and the length should be between "+mx+" to "+my);
        pass.focus();
        return false;
    }
    else
    {
        window.location.reload();
        return true;
    }
}