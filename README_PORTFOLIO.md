# Portfolio maintenance notes

This is the personal site of Barathi Subramanian, built with al-folio/Jekyll.

## Editorial rules
- Ground claims in the owner's CV and/or verified publications.
- Do not infer acceptance from submission, preprint, under-review or in-preparation statuses.
- Maintain BibTeX records in `_bibliography/papers.bib`.
- Update the downloadable CV in `assets/pdf/Barathi_Subramanian_CV.pdf` separately (this PR does not replace its binary).
- Project summaries should describe verified contributions, without unsupported numerical claims.
- Do not restore al-folio demonstration posts or sample pages.

## Deployment safety
The existing `.github/workflows/deploy.yml` builds on pull requests but only deploys on non-PR events; it publishes site output from main to the existing `gh-pages` branch. This redesign is intended to remain on a development branch until explicitly approved.
