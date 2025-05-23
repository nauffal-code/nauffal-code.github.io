"use client";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faArrowRight,
  // faCaretUp,
  // faChevronLeft,
  // faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  // faInstagram,
  // faTiktok,
  // faFacebook,
  // faYoutube,
  faGithub,
  // faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <>
      <header>
        <nav className="main-nav">
          <Link href="#" className="flex items-center w-[200px] h-[50px]">
            <Image
              src="/images/logo/nobg/lg-logo-nobg.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#about" className="underline-hover">
              About Me
            </Link>
            <Link href="#work" className="underline-hover">
              My Works
            </Link>
            <Link href="#service" className="underline-hover">
              My Services
            </Link>
            <Link href="#contact" className="underline-hover">
              Contact Me
            </Link>
          </div>
        </nav>
        <div className="flex justify-around items-center h-[100vh] text-black">
          <div className="text-main1">
            <span className="text-3xl font-semibold">Visualize your ideas</span>
            <p className="text-xl mt-2 mb-4">One step closer to our dream!</p>
            <button className="normal-btn">What is Second?</button>
          </div>
          <Image
            className="w-[300px]"
            src="/images/logo/nobg/sm-logo-nobg.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </header>
      <main>
        <section>
          <article>
            <h1>About us</h1>
            <div className="grid grid-cols-2 gap-10 w-full">
              <Swiper
                className="w-full text-white"
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide className="bg-[url('/images/myjourney.jpg')] bg-cover bg-center rounded-sm">
                  <div className="flex flex-col justify-center h-full bg-secondary/30 pb-8 py-6 px-12 rounded-sm">
                    <span className="w-fit bg-accent text-xl mb-2 py-1 px-2 rounded-xs">
                      Tech Services
                    </span>
                    <p className="text-justify">
                      Our comprehensive range of services includes exceptional
                      website development, innovative web application
                      development, and much more. Let us assist you in
                      overcoming your tech obstacles and achieving your goals.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('/images/myjourney.jpg')] bg-cover bg-center rounded-sm">
                  <div className="flex flex-col justify-center h-full bg-secondary/30 pb-8 py-6 px-12 rounded-sm">
                    <span className="w-fit bg-accent text-xl mb-2 py-1 px-2 rounded-xs">
                      Information about Technology
                    </span>
                    <p className="text-justify">
                      We consistently share valuable insights on coding and
                      programming for educational purposes across our social
                      media platforms, including Instagram and TikTok. Don’t
                      miss out—check us out today!
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <aside>
                <h2>Why This Website Is Made?</h2>
                <p className="text-base text-justify">
                  My motivation to create this website is for empowering others
                  through technology. I envisioned a company dedicated to the
                  coding sector, helping individuals develop their websites,
                  create mobile apps, and explore countless possibilities.
                </p>
                <Link href="" className="normal-btn">
                  See My Work<i className="fa-solid fa-angle-right"></i>
                </Link>
                {/* <div className="social-links">
                  <Link href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </div> */}
              </aside>
            </div>
          </article>
        </section>
        <section>
          <article>
            <h1>Our Works</h1>
            <div className="w-full">
              <div className="flex">
                <form action="#" className="relative w-full h-fit mr-4">
                  <input
                    type="text"
                    placeholder="Search projects...
                "
                    className="w-full py-3 px-5 border-b-2 border-secondary"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute top-1/2 right-0 bg-[#fff] py-2 px-5 text-secondary -translate-y-1/2"
                  />
                </form>
                <div className="relative flex flex-col w-[200px] border-r-2 border-white">
                  <div className="flex justify-between items-center h-full bg-main text-white text-lg px-4 rounded-l-[10px]">
                    <span className="font-medium">Tools</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                  <div className="absolute top-full left-0 flex flex-col w-full opacity-0">
                    <span className="w-full bg-white text-secondary text-center py-2">
                      HTML
                    </span>
                    <span className="w-full bg-white text-secondary text-center py-2  border-y-1 border-secondary">
                      CSS
                    </span>
                    <span className="w-full bg-white text-secondary text-center py-2">
                      JavaScript
                    </span>
                    <span className="w-full bg-white text-secondary text-center py-2 border-y-1 border-secondary">
                      PHP
                    </span>
                    <span className="w-full bg-white text-secondary text-center py-2 rounded-b-[10px]">
                      Python
                    </span>
                  </div>
                </div>
                <div className="relative flex flex-col w-[200px]">
                  <div className="flex justify-between items-center h-full bg-main text-white text-lg px-4 rounded-r-[10px]">
                    <span className="font-medium">Types</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                  <div className="absolute top-full left-0 flex flex-col w-full opacity-0">
                    <label className="w-full bg-white text-secondary p-2">
                      <input type="checkbox" className="mr-2" />
                      <i className="fa-solid fa-check checkmark"></i>Landing
                      Page
                    </label>
                    <label className="w-full bg-white text-secondary p-2 border-y-1 border-secondary">
                      <input type="checkbox" className="mr-2" />
                      <i className="fa-solid fa-check checkmark"></i>Web App
                    </label>
                    <label className="w-full bg-white text-secondary p-2">
                      <input type="checkbox" className="mr-2" />
                      <i className="fa-solid fa-check checkmark"></i>Web Game
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-10">
                <div className="flex flex-col bg-white rounded-[20px]">
                  <Image
                    className="w-full rounded-t-[20px]"
                    width={100}
                    height={100}
                    src="/images/myjourney.jpg"
                    alt="workImg"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-2xl ">
                      <span className="font-semibold">Work Title</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="flex gap-2 mt-2 mb-3">
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        HTML
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        CSS
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        JavaScript
                      </span>
                    </div>
                    <p className="text-justify">
                      lorem ipsum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Asperiores ex vel recusandae corrupti
                      deleniti? Similique laborum reiciendis quis unde quia?
                    </p>
                    <button className="relative w-full bg-main text-white font-medium mt-6 py-2 rounded-[10px]">
                      See details{" "}
                      <FontAwesomeIcon
                        className="absolute top-1/2 right-4 -translate-y-1/2"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded-[20px]">
                  <Image
                    className="w-full rounded-t-[20px]"
                    width={100}
                    height={100}
                    src="/images/myjourney.jpg"
                    alt="workImg"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-2xl ">
                      <span className="font-semibold">Work Title</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="flex gap-2 mt-2 mb-3">
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        HTML
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        CSS
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        JavaScript
                      </span>
                    </div>
                    <p className="text-justify">
                      lorem ipsum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Asperiores ex vel recusandae corrupti
                      deleniti? Similique laborum reiciendis quis unde quia?
                    </p>
                    <button className="relative w-full bg-main text-white font-medium mt-6 py-2 rounded-[10px]">
                      See details{" "}
                      <FontAwesomeIcon
                        className="absolute top-1/2 right-4 -translate-y-1/2"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded-[20px]">
                  <Image
                    className="w-full rounded-t-[20px]"
                    width={100}
                    height={100}
                    src="/images/myjourney.jpg"
                    alt="workImg"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-2xl ">
                      <span className="font-semibold">Work Title</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="flex gap-2 mt-2 mb-3">
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        HTML
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        CSS
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        JavaScript
                      </span>
                    </div>
                    <p className="text-justify">
                      lorem ipsum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Asperiores ex vel recusandae corrupti
                      deleniti? Similique laborum reiciendis quis unde quia?
                    </p>
                    <button className="relative w-full bg-main text-white font-medium mt-6 py-2 rounded-[10px]">
                      See details{" "}
                      <FontAwesomeIcon
                        className="absolute top-1/2 right-4 -translate-y-1/2"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded-[20px]">
                  <Image
                    className="w-full rounded-t-[20px]"
                    width={100}
                    height={100}
                    src="/images/myjourney.jpg"
                    alt="workImg"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-2xl ">
                      <span className="font-semibold">Work Title</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="flex gap-2 mt-2 mb-3">
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        HTML
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        CSS
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        JavaScript
                      </span>
                    </div>
                    <p className="text-justify">
                      lorem ipsum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Asperiores ex vel recusandae corrupti
                      deleniti? Similique laborum reiciendis quis unde quia?
                    </p>
                    <button className="relative w-full bg-main text-white font-medium mt-6 py-2 rounded-[10px]">
                      See details{" "}
                      <FontAwesomeIcon
                        className="absolute top-1/2 right-4 -translate-y-1/2"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded-[20px]">
                  <Image
                    className="w-full rounded-t-[20px]"
                    width={100}
                    height={100}
                    src="/images/myjourney.jpg"
                    alt="workImg"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-2xl ">
                      <span className="font-semibold">Work Title</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="flex gap-2 mt-2 mb-3">
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        HTML
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        CSS
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        JavaScript
                      </span>
                    </div>
                    <p className="text-justify">
                      lorem ipsum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Asperiores ex vel recusandae corrupti
                      deleniti? Similique laborum reiciendis quis unde quia?
                    </p>
                    <button className="relative w-full bg-main text-white font-medium mt-6 py-2 rounded-[10px]">
                      See details{" "}
                      <FontAwesomeIcon
                        className="absolute top-1/2 right-4 -translate-y-1/2"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded-[20px]">
                  <Image
                    className="w-full rounded-t-[20px]"
                    width={100}
                    height={100}
                    src="/images/myjourney.jpg"
                    alt="workImg"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-2xl ">
                      <span className="font-semibold">Work Title</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="flex gap-2 mt-2 mb-3">
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        HTML
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        CSS
                      </span>
                      <span className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]">
                        JavaScript
                      </span>
                    </div>
                    <p className="text-justify">
                      lorem ipsum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Asperiores ex vel recusandae corrupti
                      deleniti? Similique laborum reiciendis quis unde quia?
                    </p>
                    <button className="relative w-full bg-main text-white font-medium mt-6 py-2 rounded-[10px]">
                      See details{" "}
                      <FontAwesomeIcon
                        className="absolute top-1/2 right-4 -translate-y-1/2"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="service" id="service">
          <article className="wrapper">
            <h1>Our Services</h1>
            <div className="content">
              <div className="offer">
                <i className="fa-solid fa-tv"></i>
                <span>Front-end Development</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti consequatur labore sed explicabo beatae. Aliquid,
                  numquam? Doloribus aspernatur officiis dolorum.
                </p>
              </div>
              <div className="offer">
                <i className="fa-solid fa-user-gear"></i>
                <span>Back-end Development</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti consequatur labore sed explicabo beatae. Aliquid,
                  numquam? Doloribus aspernatur officiis dolorum.
                </p>
              </div>
              <div className="offer">
                <i className="fa-solid fa-globe"></i>
                <span>Web Development</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti consequatur labore sed explicabo beatae. Aliquid,
                  numquam? Doloribus aspernatur officiis dolorum.
                </p>
              </div>
              <div className="offer">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>UI/UX Development</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti consequatur labore sed explicabo beatae. Aliquid,
                  numquam? Doloribus aspernatur officiis dolorum.
                </p>
              </div>
              <div className="offer">
                <i className="fa-solid fa-database"></i>
                <span>Database Development</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti consequatur labore sed explicabo beatae. Aliquid,
                  numquam? Doloribus aspernatur officiis dolorum.
                </p>
              </div>
            </div>
          </article>
        </section>
        {/*
        <section className="contact" id="contact">
          <article className="wrapper">
            <h1>Contact Us</h1>
            <div className="content">
              <aside>
                <div className="info">
                  <i className="fa-regular fa-comments"></i>
                  <span>E-mail Us</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit, nesciunt!
                  </p>
                  <Link href="#">nauffalcode@gmail.com</Link>
                </div>
                <div className="info">
                  <i className="fa-solid fa-phone"></i>
                  <span>Chat/Call Us</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit, nesciunt!
                  </p>
                  <Link href="#">+62-878-4390-2885</Link>
                </div>
                <div className="info">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Visit Us</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit, nesciunt!
                  </p>
                  <Link href="#">@nauffal.code</Link>
                </div>
              </aside>
              <form action="#" className="contact-form">
                <div className="head">
                  <h2>Got ideas? We've got the skills. Let's team up!</h2>
                  <p>
                    Tell us more about yourself and what is you got in your
                    mind.
                  </p>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    autocomplete="off"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="you@gmail.com"
                    autocomplete="off"
                  />
                  <textarea
                    name=""
                    id="message"
                    placeholder="Tell us about the project..."
                  ></textarea>
                </div>
                <div className="select-box">
                  <label>
                    <input type="checkbox" name="" />
                    <i className="fa-solid fa-check checkmark"></i>
                    Front-end Development
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    <i className="fa-solid fa-check checkmark"></i>
                    Back-end Development
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    <i className="fa-solid fa-check checkmark"></i>
                    Web Development
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    <i className="fa-solid fa-check checkmark"></i>
                    UI/UX Development
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    <i className="fa-solid fa-check checkmark"></i>
                    Database Development
                  </label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </article>
        </section>
      */}
      </main>
      {/* <footer>
        <span>
          Created by <Link href="">nauffal.code</Link> | &copy;2024 All Rights
          Reserved.
        </span>
        <div className="social-links">
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-tiktok"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-youtube"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </footer> */}
    </>
  );
};
export default Home;
