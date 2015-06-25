function doLogin() {
    var username = document.getElementById('username').value;
    document.getElementById('loggedInResponse').innerHTML = "<p>Logging you in " + username + "...</p>";
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
                document.getElementById('loggedInUsername').value = username;
                document.getElementById('loggedInUserId').value = id;

                //getTransactions for loggedIn user
                $fh.cloud(
                    {
                        "path": '/cloud/getTransactions?id=' + id,
                        "contentType": "application/json",
                        "method": "GET"
                    },
                    function (getTxRes) {
                        var tbody = "";
                        if (getTxRes != '-1') {
                            $.each(getTxRes, function (idx, transaction) {
                                tbody += "<tr>" +
                                    "<td>" + transaction.fromid + "</td>" +
                                    "<td>" + transaction.toId + "</td>" +
                                    "<td>" + transaction.payee + "</td>" +
                                    "<td>" + transaction.amount + "</td>" +
                                    "<td>" + transaction.details + "</td>" +
                                    "<td>" + transaction.txdate + "</td>" +
                                    " </tr> \n";
                            });
                            document.getElementById('transactionsList').innerHTML = tbody;
                            window.location.replace('#home');
                        }
                    },
                    function (getTxMsg, getTxErr) {
                        // An error occured during the cloud call. Alert some debugging information
                        alert('Cloud call failed with error message:' + getTxMsg + '. Error properties:' + JSON.stringify(getTxErr));
                    }
                );

            }

        },
        function (msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
        }
    )


};