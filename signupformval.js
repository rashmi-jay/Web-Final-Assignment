function formValidation()
{
    var ttle=document.form1.title;
    var firstname=document.form1.fname;
    var lastname=document.form1.lname;
    var d=document.form1.date;
    var m=document.form1.month;
    var y=document.form1.year;
    var country=document.form1.coure;
    var gender=document.form1.gender;
    var mail=document.form1.email;
    var pass=document.form1.psw;
    {
      if(titleselect(ttle)) 
      {
          if(fisrtnameval(firstname))
          {
              if(lastnameval(lastname))
              {
                  if(dateselect(d))
                  {
                      if(monthselect(m))
                      {
                          if(yearselect(y))
                          {
                              if(countryval(country))
                              {
                                if(genderval(gender))
                                {
                                    if(emailval(mail))
                                    {
                                        if(passwordval(pass,7,30))
                                        {

                                        } 
                                    }
                                }
                              }
                          }
                      }
                  }
              }
          }
      }
    
    }
    return false;
}
function titleselect(ttle) 
{
    if(ttle.value=="default")
    {
        alert("Select your title from the list");
        ttle.focus();
        return false;
    }
    else 
    {
        return true;
    }
} 
function fisrtnameval(firstname)
{
    if(firstname.value==0)
    {
        alert("Enter your first name");
        firstname.focus();
        return false;  
    }
    else 
    {
        return true;
    }
}
function lastnameval(lastname)
{
    if(lastname.value==0)
    {
        alert("Enter your last name");
        lastname.focus();
        return false;  
    }
    else 
    {
        return true;
    }
}
function dateselect(d) 
{
    if(d.value=="default1")
    {
        alert("Select your birth date from the list");
        d.focus();
        return false;
    }
    else 
    {
        return true;
    }
} 
function monthselect(m) 
{
    if(m.value=="default2")
    {
        alert("Select your birth month from the list");
        m.focus();
        return false;
    }
    else 
    {
        return true;
    }
} 
function yearselect(y) 
{
    if(y.value=="default3")
    {
        alert("Select your birth year from the list");
        y.focus();
        return false;
    }
    else 
    {
        return true;
    }
} 
function countryval(country)
{
    if(country.value==0)
    {
        alert("Enter your Country");
        country.focus();
        return false;  
    }
    else 
    {
        return true;
    }
}
function genderval(gender)
{
if(!gender[0].checked && !gender[1].checked)
{
    alert("Pick a gender");
    return false;
}
else 
{
    return true;
}
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
