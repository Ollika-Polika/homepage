/* ===================================================== */
/*                  BACK TO TOP BUTTON                    */
/* ===================================================== */

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTopButton.classList.add("show");

    } else {

        backToTopButton.classList.remove("show");

    }

});

backToTopButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===================================================== */
/*                  ACTIVE NAVIGATION                     */
/* ===================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});

/* ===================================================== */
/*                 COPY EMAIL                             */
/* ===================================================== */

const copyEmail = document.getElementById("copyEmail");

const toast = document.getElementById("toast");

copyEmail.addEventListener("click", (event) => {

    event.preventDefault();

    const email = copyEmail.dataset.email;

    navigator.clipboard.writeText(email);

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);

});