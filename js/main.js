import works from "./work.js";

document.addEventListener("DOMContentLoaded", () => {
  // LOGO FORMAT RESPONSIVE
  let logoTxt = "./img/lg-logo-nobg.png";
  let darkLogoTxt = "./img/lg-logo-dark-nobg.png";

  if (window.pageXOffset <= 992) {
    logoTxt = "./img/md-logo-nobg.png";
    darkLogoTxt = "./img/md-logo-dark-nobg.png";
  } else if (window.pageXOffset <= 768) {
    logoTxt = "./img/sm-logo-nobg.png";
    darkLogoTxt = "./img/sm-logo-dark-nobg.png";
  }

  // NAVBAR
  const navbar = document.querySelector("nav");
  const navImg = navbar.querySelector("img");
  navImg.setAttribute("src", logoTxt);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scroll");
      navImg.setAttribute("src", darkLogoTxt);
    } else {
      navbar.classList.remove("scroll");
      navImg.setAttribute("src", logoTxt);
    }
  });

  // WORK
  let filteredWorks = [...works];
  const worksContainer = document.querySelector(
    ".work .content .works-container"
  );

  const displayWorks = () => {
    if (filteredWorks.length < 1) {
      worksContainer.innerHTML = `<span class="alert-text">There is no match found</span>`;
    } else {
      worksContainer.innerHTML = filteredWorks
        .map((Work) => {
          const {
            id,
            img,
            alt,
            title,
            tool: [HTML, CSS, JavaScript],
            desc,
            link,
            github,
          } = Work;
          return `<div class="project" data-id="${id}">
                    <div class="image">
                      <img
                        src="${img}"
                        alt="${alt}"
                      />
                      <div class="overlay">
                        <a href="${link}">Visit this site!</a>
                      </div>
                    </div>
                    <div class="desc">
                      <div class="head">
                        <span>${title}</span>
                        <a href="${github}" target="_blank">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <p>${HTML}</p>
                        <p>${CSS}</p>
                        <p>${JavaScript}</p>
                      </div>
                      <p>${desc}</p>
                    </div>
                  </div>`;
        })
        .join("");
    }
  };
  displayWorks();

  const form = document.querySelector(".search-works");
  const input = form.querySelector("input");

  form.addEventListener("keyup", () => {
    const inputValue = input.value;
    filteredWorks = works.filter((work) => {
      return work.title.toLowerCase().includes(inputValue);
    });
    displayWorks();
  });

  let btnValues = [];

  const filters = document.querySelector(".filters");
  filters.addEventListener("click", (e) => {
    console.log(e.target.dataset.keyname);
  });
  /* if (!btnValues.includes(btnValue)) {
    btnValues.push(btnValue);
    console.log(btnValues);
  } else {
    const index = btnValues.indexOf(btnValue);
    btnValues.splice(index, 1);
  }

  filteredWorks = works.filter((work) => {
    return work.categories.includes(btnValue.trim());
  });

  displayWorks();
   */

  const filterBtns = document.querySelectorAll(".filter .head");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const optionsContainer = btn.parentElement.querySelector(".options");
      const options = optionsContainer.querySelectorAll("label");
      const optionsHeight = options[0].offsetHeight;

      if (optionsContainer.offsetHeight < 1) {
        optionsContainer.style.height = `${optionsHeight * options.length}px`;
      } else {
        optionsContainer.style.height = `0px`;
      }
    });
  });
});
