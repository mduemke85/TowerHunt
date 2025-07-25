function initEventHandlers() {
  window.addEventListener("click", (event) => {
    let link = event.target.closest(".linkNav");
    link ??= null;
    if (link === null || !link instanceof HTMLAnchorElement) {
      return;
    }

    if (!document.startViewTransition) {
      // Fallback for browsers without support: directly update hash
      console.log("view transition fallback" + window.location.hash);
      window.location.assign(link.href);
      return;
    }

    // Use the View Transition API
    document.startViewTransition(() => {
      // Inside this callback, perform the DOM change that triggers the new state.
      // In this case, updating window.location.hash IS the DOM change that
      // makes the :target selector apply to a different section.
      window.location.assign(link.href);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  window.location.hash = "home";
  initEventHandlers();
  /*   const about = document.querySelector("section:target");
  about.querySelectorAll("a").forEach((elem) => {
    elem.style.color = "red";
  }); */
});
