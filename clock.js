var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon) 
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var loldogImageJS = document.getElementById('loldogImage');
  
  if (time == partytime)
  {
    image = "https://images.pexels.com/photos/5731896/pexels-photo-5731896.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://images.pexels.com/photos/11596511/pexels-photo-11596511.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://images.pexels.com/photos/4587982/pexels-photo-4587982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://images.pexels.com/photos/39388/chihuahua-dog-puppy-cute-39388.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://images.pexels.com/photos/3860306/pexels-photo-3860306.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://cdn.pixabay.com/photo/2016/11/22/19/41/puppy-1850276_1280.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);