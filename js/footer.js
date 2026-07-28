function renderFooter() {
  const footer = birthdayData.footer;

  const app = document.getElementById("app");

  app.insertAdjacentHTML(
    "beforeend",
    `
        <footer class="footer">

            <div class="container">

                <div class="footer-top">

                    <p class="footer-made-with">

                        <i class="fa-solid fa-heart"></i>

                        ${footer.madeWith}

                    </p>

                    <div class="footer-socials">

                        <a href="${footer.socialLinks.instagram}" target="_blank" aria-label="Instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>

                        <a href="${footer.socialLinks.tiktok}" target="_blank" aria-label="TikTok">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>

                        <a href="${footer.socialLinks.linkedin}" target="_blank" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a href="${footer.socialLinks.facebook}" target="_blank" aria-label="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="${footer.socialLinks.twitter}" target="_blank" aria-label="Twitter">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>

                        <a href="${footer.socialLinks.github}" target="_blank" aria-label="GitHub">
                            <i class="fa-brands fa-github"></i>
                        </a>

                    </div>

                </div>

                <div class="footer-bottom">

                    <p>${footer.copyright}</p>

                    <p>

                        Developed by

                        <a
                            href="${footer.website}"
                            target="_blank"
                            rel="noopener"
                        >
                            ${footer.developer}
                        </a>

                    </p>

                </div>

            </div>

        </footer>
        `,
  );
}
