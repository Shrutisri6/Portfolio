
const aboutButton = document.getElementById("aboutButton");
const aboutText = document.getElementById("aboutText");

aboutButton.addEventListener("click", function () {
    if (aboutText.style.display === "none") {
        aboutText.style.display = "block";
        aboutButton.textContent = "Hide More About Me";
    } else {
        aboutText.style.display = "none";
        aboutButton.textContent = "Show More About Me";
    }
});


const addSkillButton = document.getElementById("addSkillButton");
const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skillList");
const message = document.getElementById("message");

addSkillButton.addEventListener("click", function () {
    const skillName = skillInput.value.trim();

    if (skillName === "") {
        message.textContent = "Please enter a skill first.";
    } else {
        const newSkill = document.createElement("li");
        newSkill.textContent = skillName;
        skillList.appendChild(newSkill);

        skillInput.value = "";
        message.textContent = "Skill added!";
    }
});

skillInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addSkillButton.click();
    }
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();

    formMessage.textContent = "Thank you, " + visitorName +
        "! This is a demo form, so your message has not been sent.";

    contactForm.reset();
});
