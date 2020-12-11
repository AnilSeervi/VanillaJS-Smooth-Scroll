const body = document.body,
  scrollWrap = document.querySelector(".smooth-scroll-wrapper"),
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;
let offset = 0;
body.style.height = `${Math.floor(height)}px`;
const smoothScroll = () => {
  offset += (window.pageYOffset - offset) * speed;
  let scroll = `translateY(-${offset}px) translateZ(0)`;
  scrollWrap.style.transform = scroll;
  callScroll = requestAnimationFrame(smoothScroll);
};
smoothScroll();
