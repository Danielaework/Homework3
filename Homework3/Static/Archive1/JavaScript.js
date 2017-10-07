function clicked() {

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var courser = "test";
    var corpass = "123";

    if (user.value == courser) {

        if)pass.value == corpass) {

            window.alert("you are logged in as " + user.value);
            window.open("http://localhost:50970/Products.html");

        } else {

            window.alert("incorrect username or password!");

        }

    } else {

        window.alert("incorrect username or password!");

    }


