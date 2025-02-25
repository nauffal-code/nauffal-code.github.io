simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 4, // required
  day: 2, // required
  hours: 8, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// OFFCANVAS
const offCanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

offCanvas.addEventListener("show.bs.offcanvas", () => {
  stickyTop.style.overflow = "visible";
});

offCanvas.addEventListener("hidden.bs.offcanvas", () => {
  stickyTop.style.overflow = "hidden";
});

// DISABLE SCROLL
const root = document.querySelector(":root");

const disableScroll = () => {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  root.style.scrollBehavior = "auto";
};

const enableScroll = () => {
  window.onscroll = function () {};
  root.style.scrollBehavior = "smooth";
};
const enableScrollBtn = document.querySelector(".enable-scroll-btn");
enableScrollBtn.addEventListener("click", () => {
  enableScroll();
});

disableScroll();

// FORM
window.addEventListener("load", () => {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi kehadiran sudah terkirim!");
    });
  });
});
