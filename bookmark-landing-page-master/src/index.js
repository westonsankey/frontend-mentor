// Feature handlers

const btn1 = document.getElementById("feature-btn-1");
const btn2 = document.getElementById("feature-btn-2");
const btn3 = document.getElementById("feature-btn-3");

const feature1 = document.getElementById("feature-1");
const feature2 = document.getElementById("feature-2");
const feature3 = document.getElementById("feature-3");

btn1.addEventListener("click", () => {
  feature1.style.display = "flex";
  feature2.style.display = "none";
  feature3.style.display = "none";

  btn1.classList.add("feature-list__btn-toggle--active");
  btn2.classList.remove("feature-list__btn-toggle--active");
  btn3.classList.remove("feature-list__btn-toggle--active");
});

btn2.addEventListener("click", () => {
  feature1.style.display = "none";
  feature2.style.display = "flex";
  feature3.style.display = "none";

  btn1.classList.remove("feature-list__btn-toggle--active");
  btn2.classList.add("feature-list__btn-toggle--active");
  btn3.classList.remove("feature-list__btn-toggle--active");
});

btn3.addEventListener("click", () => {
  feature1.style.display = "none";
  feature2.style.display = "none";
  feature3.style.display = "flex";

  btn1.classList.remove("feature-list__btn-toggle--active");
  btn2.classList.remove("feature-list__btn-toggle--active");
  btn3.classList.add("feature-list__btn-toggle--active");
});

// FAQ handlers

const faqHeader1 = document.getElementById("faq-header-1");
const faqHeader2 = document.getElementById("faq-header-2");
const faqHeader3 = document.getElementById("faq-header-3");
const faqHeader4 = document.getElementById("faq-header-4");

const faqBtn1 = document.getElementById("faq-btn-1");
const faqBtn2 = document.getElementById("faq-btn-2");
const faqBtn3 = document.getElementById("faq-btn-3");
const faqBtn4 = document.getElementById("faq-btn-4");

const faqContent1 = document.getElementById("faq-content-1");
const faqContent2 = document.getElementById("faq-content-2");
const faqContent3 = document.getElementById("faq-content-3");
const faqContent4 = document.getElementById("faq-content-4");

faqHeader1.addEventListener("click", () => {
  faqContent1.classList.toggle("faq-accordion__content--active");
  faqContent2.classList.remove("faq-accordion__content--active");
  faqContent3.classList.remove("faq-accordion__content--active");
  faqContent4.classList.remove("faq-accordion__content--active");

  faqBtn1.classList.toggle("faq-accordion__toggle--active");
  faqBtn2.classList.remove("faq-accordion__toggle--active");
  faqBtn3.classList.remove("faq-accordion__toggle--active");
  faqBtn4.classList.remove("faq-accordion__toggle--active");
});

faqHeader2.addEventListener("click", () => {
  faqContent1.classList.remove("faq-accordion__content--active");
  faqContent2.classList.toggle("faq-accordion__content--active");
  faqContent3.classList.remove("faq-accordion__content--active");
  faqContent4.classList.remove("faq-accordion__content--active");

  faqBtn1.classList.remove("faq-accordion__toggle--active");
  faqBtn2.classList.toggle("faq-accordion__toggle--active");
  faqBtn3.classList.remove("faq-accordion__toggle--active");
  faqBtn4.classList.remove("faq-accordion__toggle--active");
});

faqHeader3.addEventListener("click", () => {
  faqContent1.classList.remove("faq-accordion__content--active");
  faqContent2.classList.remove("faq-accordion__content--active");
  faqContent3.classList.toggle("faq-accordion__content--active");
  faqContent4.classList.remove("faq-accordion__content--active");

  faqBtn1.classList.remove("faq-accordion__toggle--active");
  faqBtn2.classList.remove("faq-accordion__toggle--active");
  faqBtn3.classList.toggle("faq-accordion__toggle--active");
  faqBtn4.classList.remove("faq-accordion__toggle--active");
});

faqHeader4.addEventListener("click", () => {
  faqContent1.classList.remove("faq-accordion__content--active");
  faqContent2.classList.remove("faq-accordion__content--active");
  faqContent3.classList.remove("faq-accordion__content--active");
  faqContent4.classList.toggle("faq-accordion__content--active");

  faqBtn1.classList.remove("faq-accordion__toggle--active");
  faqBtn2.classList.remove("faq-accordion__toggle--active");
  faqBtn3.classList.remove("faq-accordion__toggle--active");
  faqBtn4.classList.toggle("faq-accordion__toggle--active");
});
