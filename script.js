function locogsap() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,


    tablet: { smooth: true },

    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
function loader() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: .25,
    delay: .3,
    duration: .5,
  })
  tl.from("#circle",{
    opacity: 0,
    duration: .6,
    delay: 1.2,
  })
  tl.to("#loader", {
    opacity: 0,
    duration: .6,
    delay: 1.8,
  })
  gsap.from("#counter h5, #counter h6", {
    opacity: 0,
    delay: .6,
    onStart: function () {
      var counter = document.querySelector("#counter h5");
      var grow = 0;
      var timer = setInterval(function () {
        if (grow < 100) {
          counter.textContent = grow++;
        }
        else {
          counter.textContent = grow;
          clearInterval(timer);
        }
      }, 23);

    }

  })
  tl.from("#page1", {
    opacity: 0,
    y: 2000,
    duration: .2,
    ease: Power1,
  })
  tl.to("#loader", {
    display: "none",
  })
  tl.from("#nav", {
    opacity: 0,
  })
  tl.from("#f1 h1, #f2 h1, #flag h2, #flag h3,#flag h5,#f4 h1", {
    y: 150,
    stagger: .1,
  })
  tl.from("#page2", {
    opacity: 0,
  })
}
// function cursorAnimation() {
//   Shery.makeMagnet("#nav svg, .nav-part2 h4", {
//   });


//   Shery.mouseFollower({
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });
// }

// cursorAnimation();
function sheryAnimation() {
  Shery.imageEffect(".one, .two, .three, .four, .five, .six", {
    style: 5,
    gooey: true,
    // debug:true,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7241195453907675 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.23, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.5, "range": [0, 10] }, "metaball": { "value": 0.33, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
  });

}
function vidcrsr() {
  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#circle", {
        opacity: 0
      });
      gsap.to("#video-crsr", {
        left: dets.x - 481,
        y: dets.y - 100,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#circle", {
      opacity: 1

    });
    gsap.to("#video-crsr", {
      left: "45%",
      top: "-15%",

    });
  });



  var flag = 0
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play()
      video.style.opacity = 1
      document.querySelector("#video-crsr").innerHTML = `<i class="ri-pause-mini-fill"></i>`
      gsap.to("#video-crsr", {
        scale: 0.5
      })

      gsap.to("#video-container img", {
        opacity: 0
      })
      flag = 1
    } else {
      video.pause()
      video.style.opacity = 0
      document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-mini-fill"></i>`
      gsap.to("#video-crsr", {
        scale: 1
      })
      gsap.to("#video-container img", {
        opacity: 1
      })
      flag = 0
    }
  })
  videoContainer.addEventListener("mouseleave", function () {
    video.pause()
    gsap.to("#video-container img", {
      opacity: 1
    })
    gsap.to("#video-container video", {
      opacity: 0,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#page2",
        start: "top 50%",
        end: "top 10%",
      }
    })
    gsap.to("#video-crsr", {
      scale: 1,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#page2",
        start: "top 50%",
        end: "top 10%",
      }
    })
    document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-mini-fill"></i>`


  })
}
function flaganime() {
  document.querySelector("#page1").addEventListener("mousemove", function (dets) {
    gsap.to("#flag-img", {
      x: dets.x,
      y: dets.y
    })
  })
  document.querySelector("#flag").addEventListener("mouseenter", function () {
    gsap.to("#flag-img", {
      opacity: 1,
    })

  })
  document.querySelector("#flag").addEventListener("mouseleave", function () {

    gsap.to("#flag-img", {
      opacity: 0
    })
  })
}
flaganime();
locogsap();
loader();
sheryAnimation();
vidcrsr();

const circle = document.getElementById('circle');
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.transform = `translate(${mouseX - 25}px, ${mouseY - 25}px)`;
});



