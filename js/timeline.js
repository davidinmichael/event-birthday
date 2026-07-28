function renderTimeline() {
  const app = document.getElementById("app");

  const memories = birthdayData.memories;

  app.insertAdjacentHTML(
    "beforeend",
    `
        <section class="timeline">

            <div class="container">

                <div class="section-heading text-center">
                    <h2 class="section-title">Our Beautiful Journey</h2>
                    <p class="section-subtitle">
                        Every unforgettable moment has led us here. Here's a walk through some of our favorite memories together.
                    </p>
                </div>

                <div class="timeline-wrapper">

                    ${memories
                      .map(
                        (memory, index) => `
                        <div class="timeline-item ${index % 2 ? "right" : "left"}">

                            <div class="timeline-dot"></div>

                            <div class="timeline-card">

                                <div class="timeline-image">
                                    <img
                                        src="${memory.image}"
                                        alt="${memory.title}"
                                    >
                                </div>

                                <div class="timeline-content">

                                    <span class="timeline-date">
                                        <i class="fa-solid fa-calendar-days"></i>
                                        ${formatDate(memory.date)}
                                    </span>

                                    <h3>${memory.title}</h3>

                                    <p>${memory.description}</p>

                                    <blockquote>
                                        "${memory.caption}"
                                    </blockquote>

                                </div>

                            </div>

                        </div>
                    `,
                      )
                      .join("")}

                </div>

            </div>

        </section>
    `,
  );

  animateTimeline();
}

function animateTimeline() {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    },
  );

  items.forEach((item) => observer.observe(item));
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
