

// Initialize SWUP
const swup = new Swup();

// Add event listener for before animation
swup.on("animationOutDone", function () {
  // Get the left and right page elements
  const leftPage = document.querySelector(".left-page");
  const rightPage = document.querySelector(".right-page");

  // Create a timeline for the page turn animation
  const timeline = gsap.timeline();

  // Animate the left page transform
  timeline.to(leftPage, {
    duration: 1,
    transform: "perspective(800px) rotateY(-180deg) translateX(100%)",
    ease: "power2.inOut",
  });

  // Animate the right page transform
  timeline.to(rightPage, {
    duration: 1,
    transform: "perspective(800px) rotateY(0deg) translateX(0%)",
    ease: "power2.inOut",
  });
});

// Add event listener for after animation
swup.on("animationInDone", function () {
  // Reset the page transforms
  const leftPage = document.querySelector(".left-page");
  const rightPage = document.querySelector(".right-page");

  gsap.set(leftPage, {
    transform: "perspective(800px) rotateY(-15deg) translateX(-100%)",
  });

  gsap.set(rightPage, {
    transform: "perspective(800px) rotateY(15deg) translateX(100%)",
  });
});


// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Navigate to the clicked page using SWUP
    swup.loadPage(this.getAttribute("href"));
  });
});
