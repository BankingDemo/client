function fillRepeatedFields(elementClassName, valueToFill) {
	 var elements = document.getElementsByClassName(elementClassName)
     for (var i = 0; i < elements.length; i++) {
     	elements[i].innerHTML = valueToFill;
     }
}

function getCurrentBalance(id) {
	//getTransactions for loggedIn user
    $fh.cloud(
        {
            "path": '/cloud/getBackendData?method=get&id=' + id + '&restpath=getcurrentbalance',
            "contentType": "application/json",
            "method": "GET"
        },
        function (getBalRes) {
            if (getBalRes != '-1' && getBalRes != null) {
            	var currentBalance = 0;
            	alert(JSON.stringify(getBalRes));
                $.each(getBalRes, function (idx, balance) {
                	currentBalance = balance.amount;
                });
            	fillRepeatedFields('amount', currentBalance);
            }
        },
        function (getBalMsg, getBalErr) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed with error message:' + getBalMsg + '. Error properties:' + JSON.stringify(getBalErr));
        }
    );
}

function loadTransactions(id) {
	//getTransactions for loggedIn user
    $fh.cloud(
        {
            "path": '/cloud/getTransactions?id=' + id,
            "contentType": "application/json",
            "method": "GET"
        },
        function (getTxRes) {
            var tbody = "";
            var operation = "";

            if (getTxRes != '-1') {
                $.each(getTxRes, function (idx, transaction) {
                	
                	var decimalAmount = parseFloat(Math.round(transaction.amount * 100) / 100).toFixed(2);
                
                    tbody += "<tr>" +
                    	"<td>" + transaction.txdate + "</td>";
                        
                    if (transaction.toId != -1 && transaction.toId != id && transaction.toId != 99 && transaction.fromid != "-1") {
                    	tbody += 
                        	"<td> Money sent to account: " + transaction.payee + "</td>" +
                        	"<td>" + transaction.details + "</td>";
                    	
                    	operation = "-";
                    } else if (transaction.toId != -1 && transaction.toId == id && transaction.toId != 99 && transaction.fromid != "-1") {
                    	tbody += 
                        	"<td> Money received from account: " + transaction.payee + "</td>" +
                        	"<td>" + transaction.details + "</td>";
                    	
                    	operation = "+";
                    } else if (transaction.toId == 99) {
                    	//Payment to some company should have toId 99
                    	tbody += 
                    		"<td>" + transaction.payee + "</td>" +
                    		"<td> Payment</td>";
                    	
                    	operation = "-";
                    } else {
                    
                    	tbody += "<td>" + transaction.payee + "</td>" +
                        "<td>" + transaction.details + "</td>";
                    }
                    
                    if (transaction.toId == -1) {
                    	operation = "-";
                    } else if (transaction.fromid == -1 && transaction.toId == id) {
                    	operation = "+";
                    }

                    if (operation == "+") {
                    	tbody +=
                    		"<td>&#163; +" + decimalAmount + "</td><td></td>" +
                            " </tr> \n";
                    } else {
                    	tbody +=
                            "<td></td><td>&#163; -" + decimalAmount + "</td>" +
                            " </tr> \n";
                    }
                    
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
                document.getElementById('loggedInResponse').innerHTML = "<p>Please check your username/password.</p>";
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
                document.getElementById('accountNumber').value = "100-452-" + id;
                fillRepeatedFields('amount', amount);
                document.getElementById('loggedInUsername').value = username;
                //Need to process the multiple header panels
                fillRepeatedFields('headerFullname', firstName + " " + surname);
                fillRepeatedFields('loggedInUserId', id);
                
                loadTransactions(id);
            }

        },
        function (msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
        }
    )


};