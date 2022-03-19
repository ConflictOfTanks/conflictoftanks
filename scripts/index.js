function displayPopup(popup) {
  document.getElementById("dark-wrapper").style.display = "block";
  if (popup == 1 || popup == '1' || popup == "1" || popup == "login" || popup == 'login') {
    document.getElementById("login-popup").style.display = "block";
  }
}
function cnsl(cmd) {
  if (cmd == "help" || cmd == 'help' || cmd == 1 || cmd == "1" || cmd == '1') {
    console.log("%c Available functions:", "background-color:blue;color:white;font-size:30px;");
    console.log("%c logout() - Logs you out.", "background-color:blue;color:red;");
    console.log("%c login(username, password) - Logs you in with defined user and password.", "background-color:blue;color:red;");
    console.log("%c cnsl() - View available commands which can be run in this console!", "background-color:blue;color:red;");
  } else {
    console.log("%c Commands:", "background-color:blue;color:white;font-size:30px;");
  }
}

document.getElementById("dark-wrapper").addEventListener("click", function(){
  document.getElementById("login-popup").style.display = "none";
  document.getElementById("dark-wrapper").style.display = "none";
});

function closePopups() {
  document.getElementById("login-popup").style.display = "none";
  document.getElementById("dark-wrapper").style.display = "none";
}