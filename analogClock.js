/*
# @Author: Nick Horn
# @Date: 19-11-2025 
# @Last Modified: 19-11-2025 
# @Description: JS for Analog Clock
# @This video has helped me: https://www.youtube.com/watch?v=qBEBSD7rwuo
*/

// Get clock hand elements
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');            
const secondHand = document.querySelector('.second-hand');

// Update the clock
function updateClock() {
  const now = new Date(); 

  // Read current time values
  const hours = now.getHours();   
  const minutes = now.getMinutes(); 
  const seconds = now.getSeconds(); 

  // Convert time to angles
  let hr = hours % 12; 
  let min = minutes;
  let sec = seconds;

  // Rotate hour hand
  let hrDeg = hr * 30;
  hourHand.style.transform = "rotate(" + hrDeg + "deg)";

  // Rotate minute hand
  let minDeg = min * 6;
  minHand.style.transform = "rotate(" + minDeg + "deg)";

  // Rotate second hand
  let secDeg = sec * 6;
  secondHand.style.transform = "rotate(" + secDeg + "deg)";
}

// Run update every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();
