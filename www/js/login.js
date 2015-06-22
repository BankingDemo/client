document.getElementById('login_button').onclick = function () {
    document.getElementById('loggedInResponse').innerHTML = "<p>Logging in...</p>";
    $fh.cloud(
        {
            path: 'hello',
            data: {
                hello: document.getElementById('loggedInInfo').value
            }
        },
        function (res) {
            document.getElementById('loggedInInfo').innerHTML = "<p>" + res.msg + "</p>";
        },
        function (code, errorprops, params) {
            alert('An error occured: ' + code + ' : ' + errorprops);
        }
    );
};