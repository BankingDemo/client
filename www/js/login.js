function doLogin() {
    var username = document.getElementById('username').value;
    document.getElementById('loggedInResponse').innerHTML = "<p>Logging you in " + username + "...</p>";
    //window.location.replace('#home');
    $fh.cloud(
        {
            "path": '/cloud/login?username=' + username,
            "contentType": "application/json",
            "method": "GET"
        },
        function (res) {
            //var response = JSON.parse(res);

            //alert("JSON.stringify(res) + " + response);
            //alert(response);
            //alert(res);
            if (res == '[]') {
                document.getElementById('loggedInResponse').innerHTML = "<p>No user found!</p>";
            }else {
                document.getElementById('loggedInResponse').innerHTML = "<p>" + res.username + " user found!</p>";
                //window.location.replace('#home');
            }

        },
        function(msg,err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
        }
    );

};