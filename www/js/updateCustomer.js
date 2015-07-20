function doUpdateCustomer() {
  var custId = document.getElementsByClassName('loggedInUserId')[0].innerHTML;
  var firstname = document.getElementById('firstname').value;
  var surname = document.getElementById('surname').value;
  var address = document.getElementById('address').value;
  var email = document.getElementById('email').value;

  $fh.cloud({
      "path": '/cloud/updateCustomer',
      "method": "POST",
      "contentType": "application/json",
      "data": {
        "id": custId,
        "firstname": firstname,
        "surname": surname,
        "address": address,
        "email": email
      }
    },
    function(res) {
      document.getElementById('saveInfo').innerHTML = "<p>Your details were updated successfully.</p>";
      doLogin();
    },
    function(msg, err) {
      document.getElementById('saveInfo').innerHTML = "<p>Your details could not be updated.</p>";
    }
  );
}
