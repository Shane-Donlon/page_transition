barba.init({
  transitions: [
    {
      leave() {
        const done = this.async();
        var tl = anime.timeline({
          duration: 750,
          easing: "easeInOutCubic",
        });
        tl.add({
          targets: ".transition li",
          scaleY: [0, 1],
          delay: anime.stagger(75),
          complete: function anim() {
            window.scrollTo(0, 0);
            done();
          },
        });
      },
      enter() {
        var tl = anime.timeline({
          duration: 750,
          easing: "easeInOutCubic",
        });
        tl.add({
          targets: ".transition li",
          scaleY: [1, 0],
          delay: anime.stagger(75),
          complete: function anim() {
            window.scrollTo(0, 0);
          },
        });
      },
    },
  ],
});
