function doLogin() {
	var username = document.getElementById('username').value;
    document.getElementById('loggedInResponse').innerHTML = "<p>Logging you in " + username + "...</p>";
    window.location.replace('#home');
/*    $fh.cloud(
        {
            path: 'hello',
            data: {
                hello: document.getElementById('loggedInInfo').value
            }
        },
        function (res) {
            document.getElementById('loggedInInfo').innerHTML = "<p>" + res.msg + "</p>";
        },
        function (code, errorprops, params) {
            alert('An error occured: ' + code + ' : ' + errorprops);
        }
    );*/
};