function initializeApp() {
  const app = document.getElementById("app");

  // Prevent duplicate rendering
  app.innerHTML = "";

  renderHero();

  renderGreeting();

  renderTimeline();

  renderGallery();

  renderQualities();

  renderWishes();

  renderFinalLetter();
}

window.addEventListener("DOMContentLoaded", () => {
  renderLoadingScreen();
});
