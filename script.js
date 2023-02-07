const projectsId = "#projects";
const projects = document.querySelector(projectsId);

const navBar = document.querySelector(
  `.nav-container ul li a[href='${projectsId}']`
);

console.log("nav Bar: ", navBar);

projects.addEventListener("visibilitychange", (event) => {
  console.log("Project: ", event);
});

// window.addEventListener("scroll", function () {
//   var element = document.querySelector("#projects");
//   var position = element.getBoundingClientRect();

//   // checking whether fully visible
//   if (position.top >= 0 && position.bottom <= window.innerHeight) {
//     console.log("Element is fully visible in screen");
//   }

//   console.log("position", position, window.innerHeight, this.window.innerWidth);
//   // checking for partial visibility
//   if (position.top < window.innerHeight && position.bottom >= 0) {
//     console.log("Element is partially visible in screen");
//   }
// });

let observe = new IntersectionObserver(
  function (entries) {
    console.log(entries[0]);
    if (entries[0].isIntersecting) navBar.classList.add("underline");
    else navBar.classList.remove("underline");
  },
  { threshold: [1] }
);

observe.observe(projects);
