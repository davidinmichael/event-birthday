function renderHero() {
  const hero = birthdayData.hero;

  const app = document.getElementById("app");

  app.innerHTML += `
        <section class="hero">

            <div class="hero-media">

                ${
                  hero.heroVideo
                    ? `
                            <video
                                class="hero-video"
                                autoplay
                                muted
                                loop
                                playsinline
                            >
                                <source src="${hero.heroVideo}" type="video/mp4">
                            </video>
                        `
                    : `
                            <img
                                class="hero-image"
                                src="${hero.heroImage}"
                                alt="${hero.title}"
                            >
                        `
                }

                <div class="hero-overlay"></div>

            </div>

            <div class="container">

                <div class="hero-content">

                    <span class="hero-tag">
                        Today is Your Day
                    </span>

                    <h1 class="hero-title">
                        ${hero.title}
                    </h1>

                    <p class="hero-subtitle">
                        ${hero.subtitle}
                    </p>

                    <p class="hero-description">
                        ${hero.description}
                    </p>

                    <button
                        class="btn btn-primary hero-btn"
                        onclick="scrollToNextSection()"
                    >
                        ${hero.ctaText}
                        <i class="fa-solid fa-arrow-down"></i>
                    </button>

                </div>

            </div>

            <div class="hero-scroll-indicator">

                <i class="fa-solid fa-chevron-down"></i>

            </div>

        </section>
    `;
}

function scrollToNextSection() {
  const nextSection = document.querySelector(".greeting");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}
