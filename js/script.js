function window_onload()
{
  state=getCookieValue('State');
  if (state=='Logged in')
  {
    window.location.replace('logged-in.html');
  }
}

function btn_createCookie()
{
  var myRegExp=/^(([^<>()\[\]\\.,;:@“\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D”\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
  var email=document.myForm.txtEmail;
  var password=document.myForm.pwdPassword
  if (email.value=='')
  {
    alert('this field cannot be empty')
    email.focus();
  }
  else
  {
    if (!(myRegExp.test(email.value)))
    {
      alert('invalid email');
      email.focus();
      email.select();
    }
    else
    {
        if (password.value=='')
        {
          alert('this field cannot be empty');
          password.focus();
        }
        else
        {
          window.location.href='logged-in.html';
          if (document.myForm.chkRemember.checked)
          {
            setCookie('Email',email.value,'','');
            setCookie('State','Logged in','','');
          }
        }
    }
  }

}

function btnLogOut(){
  alert('clicked')
  setCookie('State','Logged out','','');
}

function setCookie(cookieName,cookieValue,cookieExpires,cookiePath)
{
  cookieName=escape(cookieName);
  cookievalue=escape(cookieValue);
  if (cookieExpires=='')
  {
    nowDate=new Date();
    nowDate.setMonth(nowDate.getMonth()+6);
    cookieExpires=nowDate.toGMTString();
  }
  if (cookiePath!='')
  {
    cookiePath='; path='+cookiePath;
  }
  document.cookie=cookieName+'='+cookieValue+';expires='+cookieExpires+cookiePath;
}


function getCookieValue(cookieName)
{
  var cookieValueStart=document.cookie.indexOf(cookieName);
  if (cookieValueStart==-1)
  {
    return null;
  }
  else
  {
      cookieValueStart=document.cookie.indexOf('=',cookieValueStart)+1;
      var cookieValueEnd=document.cookie.indexOf(';',cookieValueStart);
      if (cookieValueEnd==-1)
      {
        cookieValueEnd=document.cookie.length;
      }
      return unescape(document.cookie.substring(cookieValueStart,cookieValueEnd));
  }
}
