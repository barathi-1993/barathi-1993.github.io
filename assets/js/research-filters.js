// Lightweight, accessible category filtering for the Research projects page.
document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("[data-research-filter]"));
  const projects = Array.from(document.querySelectorAll(".research-program[data-research-tags]"));
  const status = document.getElementById("research-filter-count");
  if (!buttons.length || !projects.length) return;

  function selectCategory(category) {
    const selected = category || "all";
    let visible = 0;

    projects.forEach((project) => {
      const tags = (project.dataset.researchTags || "").split(/\s+/);
      const show = selected === "all" || tags.includes(selected);
      project.hidden = !show;
      // Explicitly keep the card display state in sync with its hidden attribute.
      project.style.display = show ? "" : "none";
      // The fabric anomaly project is the most directly relevant industrial
      // computer-vision example. Put it first within this filter, not under All.
      project.style.order =
        selected === "computer-vision" && project.dataset.researchId === "fabric-anomaly"
          ? "-1"
          : "";
      if (show) visible += 1;
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.researchFilter === selected));
    });

    if (status) {
      status.textContent = selected === "all"
        ? "Showing all " + visible + " research projects"
        : selected === "computer-vision"
          ? "Showing " + visible + " computer vision projects, including Fabric Anomaly Detection"
          : "Showing " + visible + " of " + projects.length + " research projects";
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.researchFilter;
      selectCategory(category);
      // Make the first fabric project visible immediately instead of requiring
      // the user to scroll below the preceding computational pathology card.
      if (category === "computer-vision") {
        const fabric = projects.find((project) => project.dataset.researchId === "fabric-anomaly");
        if (fabric && !fabric.hidden) {
          fabric.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }
    });
  });

  selectCategory("all");
});
