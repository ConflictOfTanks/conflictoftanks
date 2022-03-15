var gameTitle = "War of Tanks.io";
var gameDescription = "War of Tanks.io is a competitive game! Compete with other tanks to obtain victory!";
var playButton = "PLAY!";
var gameDownText = "Game is currently under maintenance. Check us on <a href='/discord.html'>Discord</a> for more information!";
var playerBanText = "This player has been banned.";
var consoleHackWarning = "%c Please do not paste scripts from the internet. Hacking the game is against rules, and you might as well get banned from the game.";
var consoleFact = "%c The console logs in-game actions! Only use this for executing actions (type \"cnsl('help')\" for help!) or to ask for help.";
var rules = ["No hacking or using bots in any way.", "rule 2", "rule 3", "rule 4", "and so on"];


function loadConfig(param1) {
  if (param1 == '100') {
    console.log("%c ALERT!", "color:red;font-size:30px;");
    console.log(consoleHackWarning, "color:lightblue;font-size:20px;");
    console.log(consoleFact, "color:yellow;font-size:15px;");
    document.getElementById("dark-wrapper").style.display = "none";
    document.getElementById("homepageTitle").innerHTML = gameTitle;
    document.getElementById("playButton").innerHTML = playButton;
  }
  
  if (param1 == "gameDown") {
    document.getElementById("dark-wrapper").innerHTML = gameDownText;
  } else if (param1 == "banned") {
    document.getElementById("dark-wrapper").innerHTML = playerBanText;
  }
}