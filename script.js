// loader animation
function loader() {
  const tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      duration: 0.5,
      delay: 0.8,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.5,
      duration: 0.5,
      color: "#000",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
}

loader();

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

document.querySelector("#footer h2").addEventListener("click", () => {
  scroll.scrollTo(0);
});

let elem = document.querySelectorAll(".elem");
let page2 = document.querySelector("#page2");

elem.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    let img = elem.getAttribute("data-img");
    page2.style.backgroundImage = `url(${img})`;
  });
});
