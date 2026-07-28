function renderWishes() {
  const wishes = birthdayData.wishes;

  const app = document.getElementById("app");

  app.insertAdjacentHTML(
    "beforeend",
    `
        <section class="wishes">

            <div class="container">

                <div class="section-heading text-center">

                    <h2 class="section-title">
                        Birthday Wishes
                    </h2>

                    <p class="section-subtitle">
                        Special words from the people whose lives you've touched.
                    </p>

                </div>

                <div class="wishes-grid">

                    ${wishes
                      .map(
                        (wish) => `

                        <article class="wish-card">

                            <div class="wish-header">

                                <img
                                    src="${wish.avatar}"
                                    alt="${wish.name}"
                                    class="wish-avatar"
                                >

                                <div>

                                    <h4>${wish.name}</h4>

                                    <span>${wish.relationship}</span>

                                </div>

                            </div>

                            <div class="wish-message">

                                <i class="fa-solid fa-quote-left"></i>

                                <p>${wish.message}</p>

                            </div>

                        </article>

                    `,
                      )
                      .join("")}

                </div>

            </div>

        </section>
        `,
  );

  animateWishes();
}

function animateWishes() {
  const cards = document.querySelectorAll(".wish-card");

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

  observer.observe(document.querySelector(".wishes"));
}
