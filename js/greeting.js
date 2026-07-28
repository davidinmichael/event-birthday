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
  const paragraphs = document.querySelectorAll(".letter-paragraph");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          paragraphs.forEach((paragraph, index) => {
            setTimeout(() => {
              paragraph.classList.add("show");
            }, index * 400);
          });

          observer.disconnect();
        }
      });
    },

    {
      threshold: 0.4,
    },
  );

  observer.observe(document.querySelector(".letter-card"));
}
