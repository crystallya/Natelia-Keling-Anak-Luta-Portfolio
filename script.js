// 1. DARK / LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

});

// 2. MOBILE / DESKTOP HAMBURGER NAVIGATION
const hamburgerBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Open and close navigation menu
hamburgerBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    hamburgerBtn.setAttribute("aria-expanded", isOpen);

    hamburgerBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close menu after clicking navigation link
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        hamburgerBtn.setAttribute("aria-expanded", "false");

        hamburgerBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});

// 3. SCROLL TO TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// 4. ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", function () {

    let currentSection = "home";

    sections.forEach(function (section) {

        if (window.scrollY >= section.offsetTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(function (item) {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {

            item.classList.add("active");

        }

    });

});

// 5. PROJECT IMAGE ENLARGEMENT
const projectImages = document.querySelectorAll(".project-image");

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.getElementById("closeModal");

// Open enlarged image
projectImages.forEach(function (image) {

    image.addEventListener("click", function () {

        imageModal.classList.add("show");

        modalImage.src = image.src;

        modalImage.alt = image.alt;

    });

});

// Close image using close button
closeModal.addEventListener("click", function () {

    imageModal.classList.remove("show");

});

// Close image by clicking outside the image
imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("show");

    }

});

// Close image using Escape key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        imageModal.classList.remove("show");

    }

});

// 6. CONTACT FORM (PINK SUCCESS MESSAGE)
const contactForm = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Check required fields
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    // Show pink success message
    successMessage.classList.add("show");

    // Clear form fields
    contactForm.reset();

    // Hide success message after 4 seconds
    setTimeout(function () {
        successMessage.classList.remove("show");
    }, 4000);

});

// 7. AUTOMATIC CURRENT YEAR
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
