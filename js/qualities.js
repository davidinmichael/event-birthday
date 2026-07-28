function renderQualities() {
  const qualities = birthdayData.qualities;

  const app = document.getElementById("app");

  app.insertAdjacentHTML(
    "beforeend",
    `
        <section class="qualities">

            <div class="container">

                <div class="section-heading text-center">

                    <h2 class="section-title">
                        Reasons You're Amazing
                    </h2>

                    <p class="section-subtitle">
                        There are countless reasons why you're so special, but here are just a few that deserve to be celebrated today.
                    </p>

                </div>

                <div class="qualities-grid">

                    ${qualities
                      .map(
                        (quality) => `

                        <div class="quality-card">

                            <div class="quality-icon">

                                <i class="${quality.icon}"></i>

                            </div>

                            <h3>${quality.title}</h3>

                            <p>${quality.description}</p>

                        </div>

                    `,
                      )
                      .join("")}

                </div>

            </div>

        </section>
        `,
  );

  animateQualities();
}

function animateQualities() {
  const cards = document.querySelectorAll(".quality-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 180);
        });

        observer.disconnect();
      });
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(document.querySelector(".qualities"));
}
