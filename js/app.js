const countdown = document.querySelector(".countdown");

// Set Launch Date (ms)
const launchDate = new Date("December 30, 2019 13:00:00").getTime();
console.log(launchDate);

//Update every second

const interval = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  //Distance from now to launch date in ms
  const distance = launchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display Result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

  // If launch date passed
  if (distance < 0) {
    // Stop countdown
    clearInterval(interval);

    //Style and output text
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched";
  }
}, 1000);
