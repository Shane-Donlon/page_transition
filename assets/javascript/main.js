function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  transitions: [
    {
      sync: true,

      async leave(data) {
        const done = this.async();
        contentAnimation();
        function contentAnimation() {
          // declaring function after declaring done means that I don't need to set a timeout and can smoothen the animation without using magic number timeline guessing
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

          tl.add({
            targets: ".transition li",
            delay: anime.stagger(100),
            scaleY: [1, 0],
            duration: 1000,
          });
        }
      },

      async enter(data) {},

      async once(data) {},
    },
  ],
});
