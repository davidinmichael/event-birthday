function renderGreeting() {
  const greeting = birthdayData.greeting;

  const app = document.getElementById("app");

  app.innerHTML += `
        <section class="greeting">

            <div class="container">

                <div class="letter-card">

                    <div class="letter-header">

                        <i class="fa-solid fa-envelope-open-text"></i>

                        <h2>${greeting.title}</h2>

                    </div>

                    <div class="letter-body">

                        ${greeting.message
                          .split("\n\n")
                          .map(
                            (paragraph) =>
                              `<p class="letter-paragraph">${paragraph}</p>`,
                          )
                          .join("")}

                    </div>

                    <div class="letter-footer">

                        <div class="signature">

                            <img
                                src="${greeting.signatureImage}"
                                alt="${greeting.sender}"
                            >

                            <div>

                                <small>With Love,</small>

                                <h4>${greeting.sender}</h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;

  animateGreeting();
}

function animateGreeting() {
    const letterCard = document.querySelector(".letter-card");

    if (!letterCard) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const paragraphs = entry.target.querySelectorAll(".letter-paragraph");

            paragraphs.forEach((paragraph, index) => {

                setTimeout(() => {
                    paragraph.classList.add("show");
                }, index * 350);

            });

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.2
    });

    observer.observe(letterCard);
}
