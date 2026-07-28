function renderGallery() {
  const gallery = birthdayData.gallery;

  const app = document.getElementById("app");

  app.insertAdjacentHTML(
    "beforeend",
    `
        <section class="gallery">

            <div class="container">

                <div class="section-heading text-center">
                    <h2 class="section-title">Moments Worth Remembering</h2>
                    <p class="section-subtitle">
                        Every picture tells a story, and every story reminds me how wonderful you are.
                    </p>
                </div>

                <div class="gallery-grid">

                    ${gallery
                      .map(
                        (item) => `

                        <div class="gallery-item"
                            onclick="openGallery(${item.id})">

                            <img
                                src="${item.image}"
                                alt="${item.caption}"
                            >

                            <div class="gallery-overlay">

                                <p>${item.caption}</p>

                                <i class="fa-solid fa-expand"></i>

                            </div>

                        </div>

                    `,
                      )
                      .join("")}

                </div>

            </div>

        </section>

        <div id="gallery-lightbox">

            <button class="gallery-close"
                onclick="closeGallery()">

                <i class="fa-solid fa-xmark"></i>

            </button>

            <img
                id="gallery-lightbox-image"
                src=""
                alt=""
            >

            <p id="gallery-lightbox-caption"></p>

        </div>
    `,
  );
}

function openGallery(id) {
  const image = birthdayData.gallery.find((item) => item.id === id);

  if (!image) return;

  document.getElementById("gallery-lightbox-image").src = image.image;

  document.getElementById("gallery-lightbox-caption").textContent =
    image.caption;

  document.getElementById("gallery-lightbox").classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeGallery() {
  document.getElementById("gallery-lightbox").classList.remove("active");

  document.body.style.overflow = "";
}
