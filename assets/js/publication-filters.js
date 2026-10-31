// Publication search and type filtering for the Jekyll Scholar bibliography.
// Both filters run together without changing the original BibTeX entry order.
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("publication-list");
  const searchInput = document.getElementById("bibsearch");
  const tabButtons = Array.from(document.querySelectorAll("[data-publication-filter]"));
  const resultCount = document.getElementById("publication-result-count");
  const emptyMessage = document.getElementById("publication-empty");
  if (!container || !searchInput || !tabButtons.length) return;

  const entries = Array.from(container.querySelectorAll("ol.bibliography > li, ul.bibliography > li"));
  const lists = Array.from(container.querySelectorAll("ol.bibliography, ul.bibliography"));
  let activeCategory = "all";
  let debounce;

  function categoryFor(entry) {
    const taggedRow = entry.querySelector("[data-publication-category]");
    return (taggedRow?.getAttribute("data-publication-category") || "").trim().toLowerCase();
  }

  function updateGroupHeadings() {
    lists.forEach((list) => {
      const hasVisibleEntries = Array.from(list.children).some(
        (child) => child.tagName === "LI" && !child.hidden
      );
      list.hidden = !hasVisibleEntries;
    });

    container.querySelectorAll("h2.bibliography, h3.bibliography").forEach((heading) => {
      let following = heading.nextElementSibling;
      let show = false;
      while (following && !following.matches("h2.bibliography, h3.bibliography")) {
        if (following.matches("ol.bibliography, ul.bibliography") && !following.hidden) {
          show = true;
          break;
        }
        following = following.nextElementSibling;
      }
      heading.hidden = !show;
    });
  }

  function applyFilters() {
    const text = searchInput.value.trim().toLocaleLowerCase();
    let visible = 0;

    entries.forEach((entry) => {
      const categoryMatches = activeCategory === "all" || categoryFor(entry) === activeCategory;
      const textMatches = !text || (entry.textContent || "").toLocaleLowerCase().includes(text);
      const shouldShow = categoryMatches && textMatches;
      entry.hidden = !shouldShow;
      entry.style.display = shouldShow ? "" : "none";
      if (shouldShow) visible += 1;
    });

    updateGroupHeadings();

    if (resultCount) {
      resultCount.textContent = "Showing " + visible + " of " + entries.length + " publications";
    }
    if (emptyMessage) emptyMessage.hidden = visible !== 0;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.publicationFilter || "all";
      tabButtons.forEach((tab) => {
        tab.setAttribute("aria-pressed", String(tab === button));
      });
      applyFilters();
    });
  });

  searchInput.addEventListener("input", () => {
    window.clearTimeout(debounce);
    debounce = window.setTimeout(applyFilters, 180);
  });

  applyFilters();
});
