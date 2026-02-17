import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveal() {
  // SECTION REVEAL
  gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      },
    );
  });

  // PARALLAX DEPTH
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.3;

    gsap.to(el, {
      y: () => -(window.innerHeight * speed),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // STAGGER CHILDREN
  gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrapper) => {
    const items = wrapper.children;

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 85%",
        },
      },
    );
  });
}
