const sectMap = new Map();

function initEventHandlers() {
  window.addEventListener("click", (event) => {
    let link = event.target.closest(".linkNav");
    link ??= null;
    if (link === null || !link instanceof HTMLAnchorElement) {
      return;
    }

    if (!document.startViewTransition) {
      // Fallback for browsers without support: directly update hash
      console.log("view transition fallback");
      return;
    }

    // Use the View Transition API
    document.startViewTransition(() => {
      document.querySelectorAll(".sect").forEach((element) => {
        {
          element.classList.add("sectHide");
          element.classList.remove("sectShow");
        }
      });
      const fragment = new URL(link.href).hash.substring(1);
      const sect = sectMap.get(fragment);
      sect.classList.remove("sectHide");
      sect.classList.add("sectShow");
      window.location.hash = fragment;
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sect").forEach((element) => {
    sectMap.set(element.id, element);
    if (!document.startViewTransition) {
      element.classList.add("sectFallback");
    } else {
      element.classList.add("sectHide");
    }
  });
  if (document.startViewTransition) {
    document.getElementById("home").classList.remove("sectHide");
    document.getElementById("home").classList.add(".sectShow");
  }
  window.location.hash = "home";

  initEventHandlers();
  /*   const about = document.querySelector("section:target");
  about.querySelectorAll("a").forEach((elem) => {
    elem.style.color = "red";
  }); */
});
