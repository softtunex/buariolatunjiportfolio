// Typing Script JS
var typed = new Typed(".typing", {
  strings: [
    "Web Designer",
    "Web Developer",
    "Frontend Developer",
    "Software Engineer",
  ],
  typeSpeed: 80,
  backSpeed: 80,
});

var typed = new Typed(".typing-2", {
  strings: [
    "Web Designer",
    "Web Developer",
    "Frontend Developer",
    "Software Engineer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
});
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contactModal");
function openModal() {
  document.body.classList.add("modal-open");
  modal.style.display = "flex";
  // Add click event listener to modal background
  window.addEventListener("click", outsideClick);

  document.getElementById("contactModal").style.display = "flex";
  window.addEventListener("click", outsideClick);
}

function sendMessage() {
  const bodyMessage = `<p>Hello,</p>
  
  <p>Someone is trying to reach out to you through your website's contact form. Please find the details below:</p>
  
  <ul>
    <li><strong>Name:</strong> ${firstName?.value} ${lastName?.value}</li>
    <li><strong>Email:</strong> ${email?.value}</li>
    <li><strong>Message:</strong><br>${message?.value}</li>
  </ul>

  <p>Kindly address this inquiry at your earliest convenience.</p>

  <p>Best regards,<br>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "iamtunex1@gmail.com",
    Password: "978961AC042B14FB1BBADC11CC3995703D53",
    To: "iamtunex1@gmail.com",
    From: "iamtunex1@gmail.com",
    Subject: "Someone is trying to reach out to you",
    Body: bodyMessage,
  }).then((message) => alert("Form submited successfully 🎉🎉🎉"));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
  closeModal();
});

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
  window.removeEventListener("click", outsideClick);
  document.body.classList.remove("modal-open");
}
function outsideClick(e) {
  // Close the modal if the click is outside the modal content
  if (e.target === modal) {
    closeModal();
  }
}

// Show/Hide FAQs answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

//Show/hide nav menu
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

hiddenElement.forEach((el) => observer.observe(el));

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);

//nav color change on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
