"use strict";
const boxContainer = document.querySelector(".header__page");
const boxLeft = document.querySelector(".header__page--left");
const boxRight = document.querySelector(".header__page--right");
const boxLength = boxRight.querySelectorAll(".header__box");
const btnUp = document.querySelector(".header__icon--up");
const btnDow = document.querySelector(".header__icon--dow");
// nav
const nav = document.querySelectorAll(".nav");
const btnclose = document.querySelector(".close");
const btnOpen = document.querySelector(".nav__icon-list");
// card
const card = document.querySelectorAll(".card");
// rating
const boxText = document.querySelector(".text");
const boxImg = document.querySelector(".user-img");
const boxName = document.querySelector(".box-name");
const boxRole = document.querySelector(".role");
// seach
const inputSeach = document.querySelector(".search__input");
const btnSeach = document.querySelector(".search__btn");

// boxLeft.style.top = `-${boxLength.length -1 *100}vh`
let activeSlide = 0;
const slider = function (slide) {
  const height = boxContainer.clientHeight;
  if (slide === "up") {
    activeSlide++;
    if (activeSlide > boxLength.length - 1) {
      activeSlide = 0;
    }
  } else if (slide === "dow") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = boxLength.length - 1;
    }
  }
  boxLeft.style.transform = `translateY(${activeSlide * height}px)`;
  boxRight.style.transform = `translateY(-${activeSlide * height}px)`;
  console.log(boxLength.length - 1);
  console.log(activeSlide);
};
btnDow.addEventListener("click", () => slider("dow"));
btnUp.addEventListener("click", function (e) {
  console.log(e);
  slider("up");
});

btnOpen.addEventListener("click", () => {
  nav.forEach((cur) => cur.classList.add("visible"));
});
btnclose.addEventListener("click", () => {
  nav.forEach((cur) => cur.classList.remove("visible"));
});

// card

const removeClasses = function () {
  card.forEach((cur) => {
    cur.classList.remove("active");
  });
};
card.forEach((cur) => {
  cur.addEventListener("click", () => {
    removeClasses();
    cur.classList.add("active");
  });
});

// ra ting

const testimonial = [
  {
    name: "Beckham",
    position: "Manager ",
    image: "img/user-1.jpg",
    rating:
      "centrally located, close to fisherman’s wharf and Lombard street. Terrace with fabulous views over bay - Alcatraz and Golden Gate Bridge.",
  },
  {
    name: "Azaria",
    position: "President  ",
    image: "img/user-2.jpg",
    rating:
      "The views are fantastic, apt was spotless, our host Kamal, was so helpful with anything we needed and great for local knowledge. Really great and central location. Loved it.😊",
  },
  {
    name: "Ethelbert",
    position: "Supervisor  ",
    image: "img/user-3.jpg",
    rating:
      "This was a wonderful find - perfectly located within a short walk of Fishermans Wharf in a lovely area. Our room and bathroom were a good size and very comfortable and clean and the rest of the apartment for shared use were great with a fridge full of fresh fruit and items for a great breakfast. The triumph being the amazing view from the roof terrace across the bay and Alcatraz. Finally I cannot write a review without mentioning Kamal - what a fantastic host!! So very helpful. There were you needed him but without being intrusive. All utterly perfect and I cannot recommend Bay View highly enough.",
  },
  {
    name: "Maximilian",
    position: "Receptionist  ",
    image: "img/user-4.jpg",
    rating:
      " kamal (the landlord) was incredible friendly and helpful. the appartement is clean and the bed super comfortable. we felt at home immediately. the view from thterrace is priceless and breathtaking.",
  },
  {
    name: "Esperanza",
    position: "Expert  ",
    image: "img/user-5.jpg",
    rating:
      " Bayview penthouse is what i like to call, a great experience. Bayview penthouse is situated on a very good location with garagebox. Walking distance from all the restaurants and pubs on fishermans warph and pier 39. (Also coit tower, alcatraz cruises, little italy, chinatown,.. Park your car an visit town by feet) It has very, VERY good beds, clean sheets, clean & big shower, privacy, amazing view from the living room and terrace. This is way better than any hotel in town. Will book again!!",
  },
];

let n = 1;
const update = function () {
  const { name, position, image, rating } = testimonial[n];

  boxName.textContent = name;
  boxRole.textContent = position;
  boxImg.src = image;
  boxText.textContent = rating;

  n++;
  if (n > testimonial.length - 1) n = 0;
};
setInterval(update, 6000);

//

btnSeach.addEventListener("click", () => {
  inputSeach.classList.toggle("active");
  btnSeach.classList.toggle("actives");
  inputSeach.focus();
});

let userScroll = false;
window.onscroll = function (e) {
  userScroll = true;
  if (userScroll) nav.forEach((cur) => cur.classList.remove("visible"));
};

// section
const allSection = document.querySelectorAll(".section");
const sectionAffect = function (entries, obv) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  obv.unobserve(entry.target);
  console.log(entry.target);
};

const sectionObsever = new IntersectionObserver(sectionAffect, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((section) => {
  sectionObsever.observe(section);
  section.classList.add("section--hidden");
});
