function doTransfer() {
  var fromId = document.getElementsByClassName('loggedInUserId')[0].innerHTML;
  var toId = document.getElementById('recipient-account').value;
  var amount = +document.getElementById('how-much').value + +(document.getElementById('how-much-cents').value / 100);

  if (fromId == toId) {
    document.getElementById('transferInfo').innerHTML = "<p>You cannot transfer from and to the same account.</p>";

  } else {
    $fh.cloud({
        "path": '/cloud/transferMoney?fromId=' + fromId + "&payee=" + toId + "&amount=" + amount,
        "contentType": "application/json",
        "method": "GET"
      },
      function(res) {
        document.getElementById('transferInfo').innerHTML = "<p>The transfer was completed successfully.</p>";
        doLogin();
      },
      function(msg, err) {
        document.getElementById('transferInfo').innerHTML = "<p>The transfer could not be completed.</p>";
      }
    );
  }
}
