function doLogin() {
    var username = document.getElementById('username').value;
    document.getElementById('loggedInResponse').innerHTML = "<p>Logging you in " + username + "...</p>";
    //window.location.replace('#home');
    $fh.cloud(
        {
            path: '/cloud/login?username=' + username,
            method: "GET"
        },
        function (res) {
            alert("res.msg" +res.msg);
            if (res.msg = '[]') {
                document.getElementById('loggedInResponse').innerHTML = "<p>No user found!</p>";
            } else {
                var response = res.msg;
                alert(response);
                document.getElementById('loggedInResponse').innerHTML = "<p>" + responseAsJson + " user found!</p>";
                window.location.replace('#home');
            }

        },
        function (code, errorprops, params) {
            alert('An error occured: ' + code + ' : ' + errorprops);
        }
    );

};