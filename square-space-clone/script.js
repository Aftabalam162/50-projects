var ts = gsap.timeline();

ts.from("nav img, nav h3, nav h4, nav button", {
   y: -100,
   duration: 1.5,
   delay: 1,
   opacity: 0,
   stagger: 0.2
 })

ts.from("main h1", {
  y: 100,
  duration: 2,
  stagger: 0.2,
  opacity: 0
})

ts.from("main img", {
  scale: 0,
  duration: 1.5,
    stagger: 0.1,
      opacity: 0,
})

ts.from("main h5", {
  opacity: 0,
  y: 30,
  duration: 2,
  repeat: -1,
  yoyo: true,
})