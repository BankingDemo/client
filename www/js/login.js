function doLogin() {
	var username = document.getElementById('username').value;
    document.getElementById('loggedInResponse').innerHTML = "<p>Logging you in " + username + "...</p>";
    //window.location.replace('#home');
    $fh.cloud(
        {
            path: 'cloud/login?username=' + username,
            // data: {
            //     hello: document.getElementById('loggedInInfo').value
            // }
        },
        function (res) {
            
            if (res.msg = ''){
              document.getElementById('loggedInInfo').innerHTML = "<p>No user found!</p>";
            } else{
              document.getElementById('loggedInInfo').innerHTML = "<p>" + res.msg.username+  " user found!</p>";
            
            }
            
        },
        function (code, errorprops, params) {
            alert('An error occured: ' + code + ' : ' + errorprops);
        }
    );*/
};