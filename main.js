const sendMailBtn = document.getElementById("sendMail");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

var typed = new Typed(".text", {
  strings: ["Senior Associate(Fixed Income)", "Account Manager","Wealth Mangement Professional"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



sendMailBtn.addEventListener("click", function (e) {
  window.open(
    `mailto:${email.value}?subject=${encodeURIComponent(
      subject.value
    )}&body=${encodeURIComponent(name.value)} (${encodeURIComponent(
      email
    )}): ${encodeURIComponent(message.value)}`
  );
});

document.addEventListener('DOMContentLoaded', function() {
  const achievements = document.querySelector('.achievements');
  const toggleBtn = document.querySelector('.toggle-info');
  const hideableItems = document.querySelectorAll('.hideable');

  toggleBtn.addEventListener('click', function() {
      if (achievements.classList.contains('show')) {
          achievements.classList.remove('show');
          toggleBtn.textContent = 'More Info';
          hideableItems.forEach(item => {
              item.style.display = 'none';
          });
      } else {
          achievements.classList.add('show');
          toggleBtn.textContent = 'Less Info';
          hideableItems.forEach(item => {
              item.style.display = 'block';
          });
      }
  });
});