// Define the schedule hours
const hours = [
  '9:00 AM - Wake up and get ready for the day.',
  '9:30 AM - Enjoy a leisurely breakfast.',
  '10:00 AM - Study session 1: Focus on your summer course material for 2 hours.',
  '12:00 PM - Take a short break, stretch, and have a snack.',
  '12:15 PM - Engage in physical activity: Go for a jog, practice yoga, or hit the gym.',
  '1:30 PM - Lunchtime: Prepare and enjoy a nutritious meal.',
  '2:00 PM - Relaxation time: Read a book, listen to music, or engage in a hobby you enjoy.',
  '3:00 PM - Study session 2: Review and work on assignments for your summer classes for 2 hours.',
  '5:00 PM - Take a break and socialize with friends or family.',
  '6:00 PM - Engage in a creative activity: Paint, write, play a musical instrument, or pursue any other artistic interest.',
  '7:30 PM - Free time: Explore outdoor activities, go for a walk, or participate in a recreational sport.',
  '8:30 PM - Dinner break: Cook a healthy meal or go out with friends.',
  '9:30 PM - Relaxation time: Watch a movie, catch up on a favorite TV show, or play video games.',
  '11:00 PM - Study session 3: Review and revise course material for 1 hour.',
  '12:00 AM - Wind down: Practice relaxation techniques, such as meditation or deep breathing.',
  '12:30 AM - Bedtime: Ensure you get enough sleep for adequate rest and rejuvenation.'
];

// Function to display the schedule
function displaySchedule() {
  const scheduleTable = document.getElementById("scheduleTable");

  hours.forEach((hour) => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = hour;
    row.appendChild(cell);
    scheduleTable.appendChild(row);
  });
}
function checkAccessCode() {
  const accessCodeInput = document.getElementById("accessCodeInput");
  const accessCode = accessCodeInput.value.trim();

  if (accessCode === "7878") {
    window.location.href = "schedule.html";
  } else {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
  }
  
}
document.addEventListener("DOMContentLoaded", function() {
  const accessCodeButton = document.getElementById("accessCodeButton");
  const accessCodeInput = document.getElementById("accessCodeInput");
  const errorMessage = document.getElementById("errorMessage");

  accessCodeButton.addEventListener("click", function() {
    const accessCode = accessCodeInput.value;
    if (accessCode === "7878") {
      window.location.href = "schedule.html";
    } else {
      errorMessage.textContent = "You are NOT Tyleen.";
    }
  });
});

// Call the function to display the schedule
displaySchedule();
