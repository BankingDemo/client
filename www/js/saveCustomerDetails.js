function doSaveCustomerDetails() {
	var custId = document.getElementsByClassName('loggedInUserId')[0].innerHTML;
	var firstName = document.getElementById('firstname').value;
	var surname = document.getElementById('surname').value;
	var address = document.getElementById('address').value;
	var email = document.getElementById('email').value;
	var username = document.getElementById('username').value;
	
	$fh.cloud(
	        {
	            "path": '/cloud/getBackendData?method=POST&id=' + id + '&restpath=savecustomerdetails' + 
	            '&id=' + custId + "&firstName=" + firstName + "&surname=" + surname + "&address=" + address +
	            "&email=" + email + "&username=" + username,
	            "contentType": "application/json",
	            "method": "GET"
	        },
	        function (getSaveRes) {
	        	if (getSaveRes == '-1') {
	                document.getElementById('saveInfo').innerHTML = "<p>Your details could not be updated.</p>";
	            } else {
	                document.getElementById('saveInfo').innerHTML = "<p>Your details were updated successfully.</p>";
	                doLogin();
	            }

	        },
	        function (getSaveMsg, getBalErr) {
	            // An error occured during the cloud call. Alert some debugging information
	            alert('Cloud call failed with error message:' + getSaveMsg + '. Error properties:' + JSON.stringify(getSaveMsg));
	        }
	    );
	
}