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


