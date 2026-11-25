// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("details > summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const current = summary.parentElement;
    // referme tous les autres details
    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== current) det.open = false;
    });
  });
});
