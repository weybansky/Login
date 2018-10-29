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
