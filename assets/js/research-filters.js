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
      if (show) visible += 1;
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.researchFilter === selected));
    });

    if (status) {
      status.textContent = selected === "all"
        ? "Showing all " + visible + " research projects"
        : "Showing " + visible + " of " + projects.length + " research projects";
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectCategory(button.dataset.researchFilter);
    });
  });

  selectCategory("all");
});
