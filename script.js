let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

let aboutButton = document.getElementById("aboutButton");
let aboutText = document.getElementById("aboutText");

aboutButton.addEventListener("click", function() {
    if (aboutText.style.display === "none") {
        aboutText.style.display = "block";
        aboutButton.textContent = "Hide More About Me";
    } else {
        aboutText.style.display = "none";
        aboutButton.textContent = "Show More About Me";
    }
});

let addSkillButton = document.getElementById("addSkillButton");
let skillInput = document.getElementById("skillInput");
let skillList = document.getElementById("skillList");
let message = document.getElementById("message");

addSkillButton.addEventListener("click", function() {
    let skillName = skillInput.value.trim();

    if (skillName === "") {
        message.textContent = "Please type a skill first.";
        return;
    }

    let newSkill = document.createElement("li");
    newSkill.textContent = skillName;
    skillList.appendChild(newSkill);

    skillInput.value = "";
    message.textContent = "New skill added!";
});

let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let userMessage = document.getElementById("userMessage").value.trim();

    if (name === "" || email === "" || userMessage === "") {
        formMessage.textContent = "Please fill in all the fields.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.textContent = "Thank you! Your message is ready to be sent.";
    contactForm.reset();
});
