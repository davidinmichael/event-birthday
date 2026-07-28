/* ==========================================================
   Loading Screen
========================================================== */

function renderLoadingScreen() {
  const loading = birthdayData.loading;

  if (!loading?.enabled) {
    initializeApp();
    return;
  }

  const loadingScreen = document.getElementById("loading-screen");

  loadingScreen.style.backgroundImage = `url(${loading.backgroundImage})`;

  loadingScreen.innerHTML = `
        <div class="loading-overlay"></div>

        <div class="loading-content">

            <img
                class="loading-avatar"
                src="${loading.avatar}"
                alt="${loading.recipient}"
            >

            <h1 class="loading-title">
                ${loading.title}
            </h1>

            <p class="loading-preview">
                ${loading.preview}
            </p>

            <div class="loading-progress">
                <div class="loading-progress-fill"></div>
            </div>

            <span class="loading-percent">0%</span>

            <p class="loading-text">
                ${loading.loadingText}
            </p>

        </div>
    `;

  startLoadingAnimation();
}

/* ==========================================================
   Loading Animation
========================================================== */

function startLoadingAnimation() {
  const loading = birthdayData.loading;

  const progressFill = document.querySelector(".loading-progress-fill");
  const percentText = document.querySelector(".loading-percent");

  const duration = loading.duration;

  const startTime = performance.now();

  createFloatingHearts();

  function animate(now) {
    const elapsed = now - startTime;

    const progress = Math.min(elapsed / duration, 1);

    const percent = Math.floor(progress * 100);

    progressFill.style.width = percent + "%";

    if (loading.showPercentage) {
      percentText.textContent = percent + "%";
    } else {
      percentText.style.display = "none";
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(finishLoading, 500);
    }
  }

  requestAnimationFrame(animate);
}

/* ==========================================================
   Floating Hearts
========================================================== */

let heartInterval;

function createFloatingHearts() {
  const loadingScreen = document.getElementById("loading-screen");

  heartInterval = setInterval(() => {
    const heart = document.createElement("i");

    heart.className = "loading-heart fa-solid fa-heart";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = 12 + Math.random() * 18 + "px";

    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    heart.style.bottom = "-40px";

    loadingScreen.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }, 350);
}

/* ==========================================================
   Finish Loading
========================================================== */

function finishLoading() {
  clearInterval(heartInterval);

  const loadingScreen = document.getElementById("loading-screen");

  loadingScreen.classList.add("hide");

  setTimeout(() => {
    loadingScreen.remove();

    initializeApp();
  }, 800);
}




