var gameTitle = "Conflict of Tanks.io";
var gameDescription = "Conflict of Tanks.io is a competitive game! Compete with other tanks to obtain victory!";
var playButtonText = "Play!";
var loginButtonText = "Login";
var gameDownText = "Game is currently under maintenance. Check us on <a href='/discord.html'>Discord</a> for more information!";
var playerBanText = "This user has been banned.";
var consoleHackWarning = "%c Please do not paste scripts from the internet. Hacking the game is against rules, and you might as well get banned from the game. There's a chance that you might get hacked instead if someone told you to paste something here.";
var consoleFact = "%c The console logs are meant only for support purposes, such as asking for help.";
var rules = ["No hacking or using bots in any way.", "No farming, or using alts to grind illegitimate statistics."];

function loadConfig(param1) {
  if (param1 == '100') {
    console.log("%c ALERT!", "color:red;font-size:30px;");
    console.log(consoleHackWarning, "color:lightblue;font-size:20px;");
    console.log(consoleFact, "color:yellow;font-size:15px;");
    document.getElementById("dark-wrapper").style.display = "none";
    document.getElementById("homepageTitle").innerHTML = gameTitle;
    document.getElementById("playButton").innerHTML = playButtonText;
    document.getElementById("loginButton").innerHTML = loginButtonText;
  }
  
  if (param1 == 'gameDown') {
    document.getElementById("dark-wrapper").innerHTML = gameDownText;
    document.getElementById("dark-wrapper").display = "block";
  } else if (param1 == 'banned') {
    document.getElementById("dark-wrapper").innerHTML = playerBanText;
    document.getElementById("dark-wrapper").display = "block";
  }
}