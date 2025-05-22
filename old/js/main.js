import works from "./work.js";

document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR
  const navbar = document.querySelector("nav");
  const navImg = navbar.querySelector("img");

  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
    navImg.setAttribute("src", "./img/lg-logo-dark-nobg.png");
  } else {
    navbar.classList.remove("scroll");
    navImg.setAttribute("src", "./img/lg-logo-nobg.png");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scroll");
      navImg.setAttribute("src", "./img/lg-logo-dark-nobg.png");
    } else {
      navbar.classList.remove("scroll");
      navImg.setAttribute("src", "./img/lg-logo-nobg.png");
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
        .map((work) => {
          const {
            id,
            img,
            alt,
            title,
            tool: [HTML, CSS, JavaScript],
            desc,
            link,
            github,
          } = work;
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
                      <span>${title}</span>
                      <div class="tags">
                        <p>${HTML}</p>
                        <p>${CSS}</p>
                        <p>${JavaScript}</p>
                      </div>
                      <p>${desc}</p>
                      <a href="${github}" target="_blank">
                        Check repository
                        <i class="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </div>`;
        })
        .join("");
    }
  };
  displayWorks();

  const form = document.querySelector(".search-works");
  const searchInput = form.querySelector("input");

  form.addEventListener("keyup", () => {
    const inputValue = searchInput.value;
    filteredWorks = works.filter((work) => {
      return work.title.toLowerCase().includes(inputValue);
    });
    displayWorks();
  });

  const toolsBtnsContainer = document.querySelector(".tools-filter .options");

  const displayBoxes = () => {
    const checkboxes = ["All", ...new Set(works.flatMap((work) => work.tool))];

    toolsBtnsContainer.innerHTML = checkboxes
      .map((tool) => {
        return `<label class="tool-btn" data-id="${tool}"><input type="checkbox" /><i class="fa-solid fa-check checkmark"></i>${tool}</label>`;
      })
      .join("");
  };

  displayBoxes();

  toolsBtnsContainer.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("tool-btn")) {
      if (el.dataset.id === "All") {
        filteredWorks = [...works];
      } else {
        return (filteredWorks = works.filter((work) =>
          work.tool.includes(el.dataset.id)
        ));
      }
      searchInput.value = "";
      displayWorks();
    }
  });

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

  // CONTACT
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const selectedServices = document.querySelectorAll(
      ".select-box input:checked"
    );
    let selectedServicesText = "";
    selectedServices.forEach((service) => {
      const text = service.parentElement.innerText;
      selectedServicesText += `${text}, `;
    });
    selectedServicesText = selectedServicesText.slice(0, -2);

    console.log(username, email, message, selectedServicesText);

    const url = `https://wa.me/+6287843902885?text=Name: ${username}%0aEmail: ${email}%0aSelected services: ${selectedServicesText}%0a%0aDescription: ${message}`;
    window.open(url, "_blank").focus();

    username.value = "";
    email.value = "";
    message.value = "";
    selectedServices.forEach((service) => {
      service.checked = false;
    });
  });
});
