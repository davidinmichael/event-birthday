function renderFinalLetter() {
  const letter = birthdayData.finalLetter;

  const app = document.getElementById("app");

  app.insertAdjacentHTML(
    "beforeend",
    `
        <section class="final-letter">

            <div class="container">

                <div class="final-letter-wrapper">

                    <div class="final-letter-header">

                        <span class="letter-badge">
                            A Final Message
                        </span>

                        <h2>
                            ${letter.title}
                        </h2>

                    </div>

                    <div class="final-letter-body">

                        ${letter.message
                          .split("\n\n")
                          .map(
                            (paragraph) => `
                                <p>${paragraph}</p>
                            `,
                          )
                          .join("")}

                    </div>

                    <div class="final-letter-signature">

                        ${letter.sender
                          .split("\n")
                          .map((line) => `<span>${line}</span>`)
                          .join("")}

                    </div>

                </div>

            </div>

        </section>
        `,
  );

  animateFinalLetter();
}

function animateFinalLetter() {
  const section = document.querySelector(".final-letter-wrapper");

  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25,
    },
  );

  observer.observe(section);
}
