document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-blur");
    } else {
      navbar.classList.remove("bg-blur");
    }
  });

  // ABOUT
  const aboutDesc = document.querySelector(".about .content .desc");
  const titleDesc = aboutDesc.querySelector("span");
  const paragraphDesc = aboutDesc.querySelector("p");

  const ourHistory = document.querySelector(".about .content .our-history");

  aboutDesc.style.width = `${ourHistory.clientWidth}px`;
  window.addEventListener("resize", () => {
    aboutDesc.style.width = `${ourHistory.clientWidth}px`;
  });

  const aboutHistoryBtns = document.querySelectorAll(
    ".about .content .desc .btn-container button"
  );
  aboutHistoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (
        !btn.classList.contains("active") &&
        btn.classList.contains("about-btn")
      ) {
        aboutDesc.style.left = "0%";

        titleDesc.textContent = "Why 2nd Is Made?";
        paragraphDesc.textContent = `2nd (Second) was born from my passion for empowering others through technology. I envisioned a company dedicated to the coding sector, helping individuals develop their websites, create mobile apps, and explore countless possibilities.`;
      } else if (
        !btn.classList.contains("active") &&
        btn.classList.contains("history-btn")
      ) {
        aboutDesc.style.left = "calc(51% + 7px)";

        titleDesc.textContent = "How is 2nd started?";
        paragraphDesc.textContent = `We ignited the vision of 2nd in September 2024 by passionately sharing coding-related information on two dynamic social media platforms, Instagram and TikTok, to inspire and elevate our brand.`;
      }

      if (
        btn.classList.contains("history-btn") &&
        btn.classList.contains("active")
      ) {
      }

      if (!btn.classList.contains("active")) {
        aboutHistoryBtns.forEach((item) => item.classList.remove("active"));

        btn.classList.add("active");
      }
    });
  });
});
