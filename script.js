
// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("show");
    });
}

// STUDENT APPLICATION FORM

const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
    applicationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const programme = document.getElementById("programme").value;

        const message = document.getElementById("applicationMessage");

        if (!fullName || !email || !programme) {
            message.textContent = "Please complete all required fields.";
            return;
        }

        message.textContent =
            "Thank you, " + fullName +
            "! Your application form has been completed successfully. " +
            "This is a demonstration: your information has not been saved or sent to the university.";

        message.style.color = "green";
    });
}

/* AUTOMATIC ABOUT SECTION SLIDESHOW */

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(
        ".about-slideshow img"
    );

    if (slides.length > 1) {
        let currentSlide = 0;

        setInterval(function () {
            slides[currentSlide].classList.remove("active");

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");
        }, 4000);
    }
});

/* E-LIBRARY PDF SEARCH */

function filterPDFs() {
    const search = document.getElementById("pdfSearch");
    const cards = document.querySelectorAll(".pdf-card");
    const message = document.getElementById("pdfMessage");

    if (!search) return;

    const keyword = search.value.toLowerCase();
    let count = 0;

    cards.forEach(card => {
        const matches = card.textContent.toLowerCase().includes(keyword);
        card.style.display = matches ? "block" : "none";

        if (matches) count++;
    });

    message.textContent = count === 0
        ? "No matching learning materials found."
        : "";
}
