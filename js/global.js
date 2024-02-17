//Show Navigation Background & ProgressBar
(() => {
  document.querySelector(".container").addEventListener("scroll", () => {
    if (document.querySelector(".container").scrollTop) {
      document.querySelector("#nav").style.background = `#000f`;
      document.querySelector(".scrollProgressBox").style.opacity = 1;
    } else {
      document.querySelector("#nav").style.background = `#0000`;
      document.querySelector(".scrollProgressBox").style.opacity = 0;
    }
  });
})();

//Mouse Light
(() => {
  document.querySelector(".container").addEventListener("mousemove", (e) => {
    document.querySelector(".cursor").style.opacity = 1;
    document.querySelector(".cursor").style.left = `${e.clientX}px`;
    document.querySelector(".cursor").style.top = `${e.clientY}px`;
  });
})();

//Scroll Progress
(() => {
  document.querySelector(".container").addEventListener("scroll", () => {
    document.querySelector(".scrollProgressBar").style.width = `${
      (document.querySelector(".container").scrollTop /
        (document.querySelector(".container").scrollHeight -
          document.querySelector(".container").offsetHeight)) *
      100
    }%`;
    document.querySelector(".scrollProgressNum").innerHTML = `${~~(
      (document.querySelector(".container").scrollTop /
        (document.querySelector(".container").scrollHeight -
          document.querySelector(".container").offsetHeight)) *
      100
    )}%`;
  });
})();

// Skills Progress
(() => {
  document.querySelectorAll(".skillBar").forEach((e) => {
    e.style.width = e.childNodes[3].innerHTML;
  });
})();
