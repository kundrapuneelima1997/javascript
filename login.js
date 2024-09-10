
function result() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    
    // Correct email and password
    const correctuser= "tech";
    const correctPassword = "1234";

    // Validate input
    if (user === correctuser && password === correctPassword) {
        alert("Successfully logged in");
        location.href = "login.html";
    } else if (user !== correctuser && password !== correctPassword) {
        alert("Login failed: Incorrect user name and password");
    } else if (user !== correctuser) {
        alert("Please enter the correct user name");
    } else if (password !== correctPassword) {
        alert("Please enter the correct password");
    }
}







