var win = window;

// Header Animation
var button = document.querySelector(".myskill-btn-sqr");
var first_load = true;
var animateIn = true;
var about_me = document.querySelector(".about-me");
load();

function load() {
  aboutme_animation_in();
}

win.addEventListener("scroll", function() {
  if (win.scrollY >= 200 && animateIn == true) {
    aboutme_animation_out();
    animateIn = false;
  } else if (win.scrollY < 150 && animateIn == false) {
    aboutme_animation_in();
    animateIn = true;
  }
});
function aboutme_animation_in() {
  if (first_load == true) {
    about_me.classList.add("about-me-firstload");
    button.classList.remove("about-me-btn-in");
    button.classList.remove("about-me-btn-out");
    button.style.opacity = "0";
    button.style.zIndex = "-10";
    first_load = false;
  } else {
    about_me.classList.remove("about-me-firstload");
    about_me.classList.remove("about-me-out");
    about_me.classList.add("about-me-enter");
    about_me.style.display = "flex";
    about_me.style.opacity = "1";
    about_me.style.marginTop = "0";
    about_me.style.zIndex = "1";
    //
    button.classList.remove("about-me-btn-in");
    button.classList.add("about-me-btn-out");
    button.style.opacity = "0";
    button.style.zIndex = "-10";
  }
}

function aboutme_animation_out() {
  about_me.classList.remove("about-me-firstload");
  about_me.classList.remove("about-me-enter");
  about_me.classList.add("about-me-out");
  about_me.style.marginTop = "20rem";
  about_me.style.opacity = "0";
  about_me.style.zIndex = "-10";
  //
  button.classList.remove("about-me-btn-out");
  button.classList.add("about-me-btn-in");
  button.style.opacity = "1";
  button.style.zIndex = "10";
}

// Header Animation
