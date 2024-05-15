const sendMailBtn = document.getElementById("sendMail");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

var typed = new Typed(".text", {
  strings: [
    "Senior Associate(Fixed Income)",
    "Account Manager",
    "Wealth Mangement Professional",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

sendMailBtn.addEventListener("click", function (e) {
  console.log(
    "Emial >>",
    email.value,
    " === ",
    "subject >>",
    subject.value,
    "===",
    "message >>",
    message.value
  );
  window.open(
    `mailto:saksrivastava1995@gmail.com?subject=${encodeURIComponent(
      subject.value
    )}&body=${encodeURIComponent(name.value)} (${encodeURIComponent(
      email.value
    )}): ${encodeURIComponent(message.value)}`
  );
});

const cards = document.querySelectorAll(".service-card");

console.log("cards >", cards);
cards.forEach((card) => {
  const toggleButton = card.querySelector(".toggle-button");
  const listItems = card.querySelectorAll(".ul li");

  function showInitialItems() {
    listItems.forEach((item, index) => {
      if (index < 3) {
        item.classList.add("visible");
      } else {
        item.classList.remove("visible");
      }
    });
  }

  function toggleItems() {
    console.log(listItems);
    const allVisible = Array.from(listItems).every((item) =>
      item.classList.contains("visible")
    );

    console.log(allVisible);
    if (allVisible) {
      // Hide items
      showInitialItems();
      toggleButton.textContent = "Show More";
    } else {
      // Show all items
      listItems.forEach((item) => item.classList.add("visible"));
      toggleButton.textContent = "Show Less";
    }
  }

  // Show initial 3 items for each card
  showInitialItems();

  // Add click event to toggle button for each card
  toggleButton.addEventListener("click", toggleItems);
});

// Navbar
function toggleNavbar() {
  let navbarLinks = document.getElementById("navbarLinks");
  let closeBtn = document.getElementsByClassName("close-btn");

  navbarLinks.classList.toggle("active");
  closeBtn[0].classList.toggle("active");
}

// Close the navbar when a link is clicked
document.querySelectorAll("#navbarLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    let navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.style.right = "-100%";
  });
});
