"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faTv,
  faUserGear,
  faGlobe,
  faWandMagicSparkles,
  faDatabase,
  faPhone,
  faComments,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faYoutube,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  type Project = {
    id: string | number;
    img: string;
    title: string;
    tool: string[];
    desc: string;
    github: string;
    // link: string;
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  //   services: [],
  // });
  // const [toolsDrop, setToolsDrop] = useState(false);
  // const toggleToolsDrop = () => {};

  // const [typesDrop, setTypesDrop] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/project_data?q=${searchValue}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchProjects();
    }, 300); // Debounce to avoid too many calls

    return () => {
      clearTimeout(delayDebounce);
      controller.abort(); // cancel on unmount or re-run
    };
  }, [searchValue]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-secondary text-lg font-medium">Loading...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  // Change nav background on scroll
  if (typeof window === "undefined") return null; // Ensure this runs only on the client side

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // CONTACT TO WHATSAPP
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (type === "checkbox") {
  //     setFormData((prev) => ({
  //       ...prev,
  //       services: checked
  //         ? [...prev.services, value]
  //         : prev.services.filter((v) => v !== value),
  //     }));
  //   } else {
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const { name, email, message, services } = formData;
  //   const serviceText = services.join(", ");
  //   const text = encodeURIComponent(
  //     `Name: ${name}\nEmail: ${email}\nSelected services: ${serviceText}\n\nDescription: ${message}`
  //   );

  //   const whatsappURL = `https://wa.me/6287843902885?text=${text}`;
  //   window.open(whatsappURL, "_blank")?.focus();

  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: "",
  //     services: [],
  //   });
  // };

  return (
    <>
      <header>
        <nav
          className={
            isScrolled
              ? `main-nav bg-secondary text-white shadow-md`
              : `main-nav bg-transparent`
          }
        >
          <Link href="#" className="flex items-center">
            <Image
              className="md:w-[150px]! md:h-[30px]! min-[576px]:w-[125px]! min-[576px]:h-[25px]! w-[100px]!
h-[20px]! object-cover"
              src={
                isScrolled
                  ? `/images/logo/nobg/dark/lg-logo-dark-nobg.png`
                  : `/images/logo/nobg/lg-logo-nobg.png`
              }
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#about"
              className={
                isScrolled
                  ? `underline-hover after:border-b-white`
                  : `underline-hover after:border-b-black`
              }
            >
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
            <span className="md:text-3xl min-[576px]:text-2xl text-xl font-semibold">
              Visualize your ideas
            </span>
            <p className="md:text-xl min-[576px]:text-lg text-base min-[576px]:mt-2 mt-1">
              One step closer to our dream!
            </p>
            <button className="normal-btn">Who am I?</button>
          </div>
          <Image
            className="md:w-[300px] min-[576px]:w-[250px] w-[200px]"
            src="/images/logo/nobg/sm-logo-nobg.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </header>
      <main>
        <section id="about">
          <article>
            <h1>About Me</h1>
            <div className="flex md:flex-row flex-col md:gap-6 min-[576px]:gap-4 gap-2 w-full">
              <Swiper
                className="w-[500px] h-[350px] text-white m-0!"
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide className="bg-[url('/images/myjourney.jpg')] bg-cover bg-center rounded-sm">
                  <div className="flex flex-col justify-end h-full bg-secondary/30 pb-8 py-6 px-12 rounded-sm">
                    <span className="w-fit bg-accent text-xl mb-2 py-1 px-2 rounded-xs">
                      Tech Services
                    </span>
                    <p className="text-justify md:text-base min-[576px]:text-sm text-xs">
                      My comprehensive range of services includes exceptional
                      website development, innovative web application
                      development, and much more. Let me assist you in
                      overcoming your tech obstacles and achieving your goals.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('/images/myjourney.jpg')] bg-cover bg-center rounded-sm">
                  <div className="flex flex-col justify-end h-full bg-secondary/30 pb-8 py-6 px-12 rounded-sm">
                    <span className="w-fit bg-accent text-xl mb-2 py-1 px-2 rounded-xs">
                      Information about Technology
                    </span>
                    <p className="text-justify md:text-base min-[576px]:text-sm text-xs">
                      I consistently share valuable insights on coding and
                      programming for educational purposes across my social
                      media platforms, including Instagram and TikTok. Don’t
                      miss out—check me out today!
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <aside className="flex flex-col justify-between w-1/2">
                <div>
                  <h2>Why This Website Is Made?</h2>
                  <p className="md:text-base min-[576px]:text-sm text-xs text-justify">
                    My motivation to create this website is for empowering
                    others through technology. I envisioned a company dedicated
                    to the coding sector, helping individuals develop their
                    websites, create mobile apps, and explore countless
                    possibilities.
                  </p>
                  <Link href="" className="normal-btn">
                    See My Work<i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
                <div className="grid grid-cols-6 gap-2 justify-between w-full lg:mt-auto md:mt-8 min-[576px]:mt-6 mt-4">
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-accent md:text-xl min-[576px]:text-lg text-base text-white rounded-[10px] aspect-square"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-accent md:text-xl min-[576px]:text-lg text-base text-white rounded-[10px] aspect-square"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-accent md:text-xl min-[576px]:text-lg text-base text-white rounded-[10px] aspect-square"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-accent md:text-xl min-[576px]:text-lg text-base text-white rounded-[10px] aspect-square"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-accent md:text-xl min-[576px]:text-lg text-base text-white rounded-[10px] aspect-square"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-accent md:text-xl min-[576px]:text-lg text-base text-white rounded-[10px] aspect-square"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </div>
              </aside>
            </div>
          </article>
        </section>
        <section id="work">
          <article>
            <h1>My Works</h1>
            <div className="w-full">
              <div className="flex">
                <form action="#" className="relative w-full h-fit mr-4">
                  <input
                    type="text"
                    placeholder="Search projects...
                "
                    className="w-full py-3 px-5 border-b-2 border-secondary"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute top-1/2 right-0 bg-[#fff] py-2 px-5 text-secondary -translate-y-1/2"
                  />
                </form>
                <div className="relative flex flex-col w-[200px] border-r-2 border-white">
                  <div
                    className="flex justify-between items-center h-full bg-main text-white text-lg px-4 rounded-l-[10px]"
                    // onClick={}
                  >
                    <span className="font-medium">Tools</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                  <div
                    // className={
                    //   toolsDrop
                    //     ? "absolute top-full left-0 flex flex-col w-full opacity-1"
                    //     : "absolute top-full left-0 flex flex-col w-full opacity-0"
                    // }
                    className="absolute top-full left-0 flex flex-col w-full opacity-0"
                  >
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
              <div className="grid grid-cols-3 items-start gap-x-5 gap-y-8 mt-10">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    projectImg={project.img}
                    projectName={project.title}
                    projectTools={project.tool}
                    projectDesc={project.desc}
                    projectGithub={project.github}
                  />
                ))}
              </div>
            </div>
          </article>
        </section>
        <section id="services">
          <article>
            <h1>My Services</h1>
            <div className="grid grid-cols-3 gap-x-5 gap-y-8">
              <div className="flex flex-col">
                <FontAwesomeIcon
                  className="text-2xl text-secondary"
                  icon={faTv}
                />
                <span className="font-semibold text-main text-2xl mt-2 mb-2 pb-2 mx-auto border-b-2 border-accent">
                  Front-end Development
                </span>
                <p className="text-secondary text-justify">
                  I turn Figma dreams into real, clickable, fast-as-hell
                  websites. Using React, Tailwind, and all the cool front-end
                  magic, I craft sleek, responsive UIs that don’t just look good
                  — they feel good. Your users deserve smooth vibes, and I
                  deliver.
                </p>
              </div>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  className="text-2xl text-secondary"
                  icon={faUserGear}
                />
                <span className="font-semibold text-main text-2xl mt-2 mb-2 pb-2 mx-auto border-b-2 border-accent">
                  Back-end Development
                </span>
                <p className="text-secondary text-justify">
                  I handle the behind-the-scenes chaos so your app runs smooth.
                  From APIs that actually make sense to databases that don’t
                  randomly crash, I build back-ends that are clean, scalable,
                  and ready for anything — with Node, Express, and database
                  wizardry in my toolkit.
                </p>
              </div>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  className="text-2xl text-secondary"
                  icon={faGlobe}
                />
                <span className="font-semibold text-main text-2xl mt-2 mb-2 pb-2 mx-auto border-b-2 border-accent">
                  Web Development
                </span>
                <p className="text-secondary text-justify">
                  I build websites that don’t just exist — they slap. Front-end?
                  Clean, fast, responsive. Back-end? Solid, secure, scalable.
                  Full-stack web dev with modern tools like React, Tailwind, and
                  Node. I turn ideas into dope, working products.
                </p>
              </div>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  className="text-2xl text-secondary"
                  icon={faWandMagicSparkles}
                />
                <span className="font-semibold text-main text-2xl mt-2 mb-2 pb-2 mx-auto border-b-2 border-accent">
                  UI/UX Development
                </span>
                <p className="text-secondary text-justify">
                  I don’t just design pretty pixels — I create experiences that
                  hit. Smooth UI, intuitive UX, no fluff. I go from mockups to
                  live code using Figma + React + Tailwind like it’s second
                  nature. If users vibe with it, I’ve done my job.
                </p>
              </div>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  className="text-2xl text-secondary"
                  icon={faDatabase}
                />
                <span className="font-semibold text-main text-2xl mt-2 mb-2 pb-2 mx-auto border-b-2 border-accent">
                  Database Development
                </span>
                <p className="text-secondary text-justify">
                  I make sure your app’s brain doesn’t fry. With solid schema
                  design, clean queries, and smooth API integration, I keep your
                  data flowing — fast, reliable, and ready to scale. Mongo? SQL?
                  Got it covered.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section id="contact">
          <article>
            <h1>Contact Me</h1>
            <div className="grid grid-cols-[1fr_2fr] gap-5">
              <aside className="flex flex-col gap-4">
                <div className="grid grid-cols-[45px_auto] justify-items-center items-center gap-6">
                  <FontAwesomeIcon className="text-4xl" icon={faComments} />
                  <div className="w-auto">
                    <span className="text-xl text-accent">E-mail Me</span>
                    <p className="mb-2">
                      Have a question, idea, or opportunity? Send me an email at
                      nauffal2005@gmail.com — I’ll get back to you soon.
                    </p>
                    <a
                      href="mailto:nauffal2005@email.com"
                      className="text-main hover:underline"
                    >
                      nauffalcode@gmail.com
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-[45px_auto] justify-items-center items-center gap-6">
                  <FontAwesomeIcon className="text-4xl" icon={faPhone} />
                  <div className="w-auto">
                    <span className="text-xl text-accent">Chat/Call Me</span>
                    <p className="mb-2">
                      Got a question, a project idea, or just want to connect?
                      I’m always up for a good conversation — whether it’s about
                      code, collaboration, or coffee.
                    </p>
                    <a
                      href="tel:+6287843902885"
                      className="text-main hover:underline"
                    >
                      +62-878-4390-2885
                    </a>
                  </div>
                </div>
              </aside>
              <form action="#" id="contact-form" className="flex flex-col">
                <div className="mb-6">
                  <h2 className="m-0!">
                    Got ideas? I have got the skills. Lets team up!
                  </h2>
                  <p className="text-lg">
                    Tell me more about yourself and what is you got in your
                    mind.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-[100px_auto]">
                    <label
                      htmlFor="username"
                      className="flex justify-center items-center bg-main text-white rounded-l-[10px] text-lg"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-main py-3 px-5"
                      id="username"
                      placeholder="Your name"
                      // value={formData.name}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <label
                      htmlFor="email"
                      className="flex justify-center items-center bg-main text-white rounded-l-[10px] text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border-b-2 border-main py-3 px-5"
                      id="email"
                      placeholder="you@gmail.com"
                      // value={formData.email}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <label
                      htmlFor="phone"
                      className="flex justify-center items-center bg-main text-white rounded-l-[10px] text-lg"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      className="w-full border-b-2 border-main py-3 px-5"
                      id="phone"
                      placeholder="Your phone number"
                      // value={formData.phone}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <label
                      htmlFor="message"
                      className="flex justify-center items-center bg-main text-white rounded-l-[10px] text-lg"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full border-b-2 border-main py-3 px-5"
                      placeholder="Tell us about the project..."
                      // value={formData.message}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 mb-6">
                  <label
                    className="flex items-center gap-2"
                    htmlFor="frontend_dev"
                  >
                    <input
                      type="checkbox"
                      id="frontend_dev"
                      className="hidden"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-2 border-accent [input:checked~&]:bg-accent p-1 rounded-[0.5rem] text-white text-lg"
                    />
                    Front-end Development
                  </label>
                  <label
                    className="flex items-center gap-2"
                    htmlFor="backend_dev"
                  >
                    <input
                      type="checkbox"
                      id="backend_dev"
                      className="hidden"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-2 border-accent [input:checked~&]:bg-accent p-1 rounded-[0.5rem] text-white text-lg"
                    />
                    Back-end Development
                  </label>
                  <label
                    className="flex items-center gap-2"
                    htmlFor="fullstack_dev"
                  >
                    <input
                      type="checkbox"
                      id="fullstack_dev"
                      className="hidden"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-2 border-accent [input:checked~&]:bg-accent p-1 rounded-[0.5rem] text-white text-lg"
                    />
                    Full-stack Development
                  </label>
                  <label className="flex items-center gap-2" htmlFor="web_dev">
                    <input type="checkbox" id="web_dev" className="hidden" />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-2 border-accent [input:checked~&]:bg-accent p-1 rounded-[0.5rem] text-white text-lg"
                    />
                    Web Development
                  </label>
                  <label className="flex items-center gap-2" htmlFor="uiux_dev">
                    <input type="checkbox" id="uiux_dev" className="hidden" />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-2 border-accent [input:checked~&]:bg-accent p-1 rounded-[0.5rem] text-white text-lg"
                    />
                    UI/UX Development
                  </label>
                  <label className="flex items-center gap-2" htmlFor="db_dev">
                    <input type="checkbox" id="db_dev" className="hidden" />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-2 border-accent [input:checked~&]:bg-accent p-1 rounded-[0.5rem] text-white text-lg"
                    />
                    Database Development
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-main text-white text-lg font-medium ml-auto py-2 px-4 rounded-[10px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </article>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center gap-4 bg-secondary text-white py-6">
        <span className="text-base">
          Created by <Link href="">nauffal.code</Link> | &copy;2024 All Rights
          Reserved.
        </span>
        <div className="flex gap-2 text-lg">
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
        </div>
      </footer>
    </>
  );
};
export default Home;
