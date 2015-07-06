function doTransfer() {

    var fromId = document.getElementsByClassName('loggedInUserId')[0].innerHTML;
    var toId = document.getElementById('recipient-account').value;

    var amount = +document.getElementById('how-much').value + +(document.getElementById('how-much-cents').value / 100);

    var payee = document.getElementById('recipient-account-boilerplate').value + toId;
    //alert("fromId:" + fromId + " toId:" + toId + " amount:" + amount + " payee:" + payee);
    
    if (fromId == toId) {
    	 document.getElementById('transferInfo').innerHTML = "<p>You cannot transfer from and to the same account.</p>";
    } else {

    $fh.cloud(
        {
            "path": '/cloud/transferMoney?fromId=' + fromId + "&payee=" + toId + "&amount=" + amount,
            "contentType": "application/json",
            "method": "GET"
        },
        function (res) {
            if (res == '-1') { //TODO add onException clause in respective Camel route.
                document.getElementById('transferInfo').innerHTML = "<p>The transfer could not be completed.</p>";
            } else {
                document.getElementById('transferInfo').innerHTML = "<p>The transfer was completed successfully.</p>";
                doLogin();
            }

        },
        function (msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
        }
    );
    }
}
