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
            if (res == '') { //res[0] = undefined
                document.getElementById('loggedInResponse').innerHTML = "<p>No user found!</p>";
            } else {
                var id = res[0].id;
                var username = res[0].username;
                var firstName = res[0].firstname;
                var address = res[0].address;
                var surname = res[0].surname;
                var email = res[0].email;
                var amount = res[0].amount;
                document.getElementById('loggedInUser').innerHTML = firstName + " " + surname;
                document.getElementById('loggedInResponse').innerHTML = "<p></p>";
                document.getElementById('firstname').value = firstName;
                document.getElementById('surname').value = surname;
                document.getElementById('address').value = address;
                document.getElementById('email').value = email;
                document.getElementById('amount').innerHTML = amount;
                document.getElementById('loggedUsername').innerHTML = username;
                document.getElementById('loggedInUserId').value = id;
                window.location.replace('#home');
            }

        },
        function(msg,err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
        }
    );

};