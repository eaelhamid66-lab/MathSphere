// =============================
// Wait Until Page Loads
// =============================
document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // Navbar Scroll Effect
    // =============================
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.style.background = "#151a26";
                navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
            } else {
                navbar.style.background = "#1e2433";
                navbar.style.boxShadow = "none";
            }

        });
    }


    // =============================
    // Smooth Button Click
    // =============================
    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", () => {
            alert("Welcome to Math Sphere 🚀");
        });
    }


    // =============================
    // Floating Symbols Parallax
    // =============================
    const symbols = document.querySelectorAll(".floating");

    if (symbols.length > 0) {
        document.addEventListener("mousemove", (e) => {

            symbols.forEach((symbol, index) => {

                let speed = (index + 1) * 0.01;

                let x = (window.innerWidth - e.pageX * speed) / 100;
                let y = (window.innerHeight - e.pageY * speed) / 100;

                symbol.style.transform =
                    `translate(${x}px, ${y}px)`;

            });

        });
    }


    // =============================
    // Fade In Animation
    // =============================
    const elements = document.querySelectorAll(".hero-text, .hero-image");

    if (elements.length > 0) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });

        });

        elements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = "translateY(40px)";
            el.style.transition = "1s";
            observer.observe(el);
        });
    }


    // =============================
    // Questions System
    // =============================
    const questions = [
        { q: "What is the domain of f(x)=x² ?", a: "All real numbers" },
        { q: "The graph of quadratic function is called?", a: "Parabola" },
        { q: "If a>0 parabola opens?", a: "Upward" },
    ];

    let currentPage = 1;
    const perPage = 10;

    const container = document.getElementById("questions-container");
    const pageNumber = document.getElementById("page-number");

    function renderQuestions() {

        if (!container) return;

        const start = (currentPage - 1) * perPage;
        const end = start + perPage;

        container.innerHTML = "";

        questions.slice(start, end).forEach(item => {

            container.innerHTML += `
                <div class="question">
                    <p>${item.q}</p>

                    <button class="show-btn">
                        Show Answer
                    </button>

                    <div class="answer" style="display:none">
                        ${item.a}
                    </div>
                </div>
            `;
        });

        if (pageNumber)
            pageNumber.innerText = `Page ${currentPage}`;

        attachAnswerEvents();
    }

    function attachAnswerEvents() {
        document.querySelectorAll(".show-btn").forEach(btn => {

            btn.addEventListener("click", () => {

                const answer = btn.nextElementSibling;

                answer.style.display =
                    answer.style.display === "block"
                        ? "none"
                        : "block";

                btn.classList.toggle("active");
            });

        });
    }

    window.nextPage = function () {
        if (currentPage * perPage < questions.length) {
            currentPage++;
            renderQuestions();
        }
    };

    window.prevPage = function () {
        if (currentPage > 1) {
            currentPage--;
            renderQuestions();
        }
    };

    renderQuestions();


    // =============================
    // User System
    // =============================
    const user = localStorage.getItem("mathsphereUser");

    const loginLink = document.getElementById("loginLink");
    const userProfile = document.getElementById("userProfile");
    const welcomeUser = document.getElementById("welcomeUser");

    if (user) {

        if (loginLink) loginLink.style.display = "none";
        if (userProfile) userProfile.style.display = "block";
        if (welcomeUser) welcomeUser.innerText = "Hello, " + user;

    } else {
        if (userProfile) userProfile.style.display = "none";
    }

});


// =============================
// Global Functions
// =============================
function toggleUserMenu() {
    const menu = document.getElementById("userMenu");
    if (menu) menu.classList.toggle("showMenu");
}

function logout() {
    localStorage.removeItem("mathsphereUser");
    window.location.href = "login.html";
}

