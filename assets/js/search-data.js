// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about-me",
          title: "About Me",
          description: "Research background, academic journey, and technical interests of Barathi Subramanian.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Selected research and engineering work in medical AI, computer vision, and applied machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Journal papers, conference papers, workshop contributions, and manuscripts, with status recorded in each entry.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "Research experience, technical skills, and academic background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic and technical curriculum vitae, research experience, education, and professional service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-received-the-best-thesis-award-2024-from-kyungpook-national-university-for-my-ph-d-work-in-computer-vision",
          title: 'Received the Best Thesis Award (2024) from Kyungpook National University for my Ph.D....',
          description: "",
          section: "News",},{id: "news-joined-stanford-university-as-a-post-doctoral-scholar-at-the-center-for-ai-in-medicine-amp-amp-imaging",
          title: 'Joined Stanford University as a Post-doctoral Scholar at the Center for AI in...',
          description: "",
          section: "News",},{id: "news-starc-9-a-large-scale-colorectal-cancer-histopathology-dataset-accepted-at-neurips-2025-datasets-and-benchmarks-track",
          title: 'STARC-9, a large-scale colorectal cancer histopathology dataset, accepted at NeurIPS 2025 Datasets and...',
          description: "",
          section: "News",},{id: "news-received-the-charles-b-carrington-memorial-award-for-outstanding-poster-presentation-at-stanford-university-sparkles",
          title: 'Received the Charles B. Carrington Memorial Award for Outstanding Poster Presentation at Stanford...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-cvpr-2026-gesture2music-ipa-workshop-and-contrast-enhanced-gating-in-grus-women-in-computer-vision-track",
          title: 'Two papers accepted at CVPR 2026 — Gesture2Music (IPA Workshop) and Contrast-Enhanced Gating...',
          description: "",
          section: "News",},{id: "projects-starc-9",
          title: 'STARC-9',
          description: "Large-scale multi-class tissue classification dataset for colorectal cancer histopathology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_starc9/";
            },},{id: "projects-digital-pathology-ai-pipeline",
          title: 'Digital Pathology AI Pipeline',
          description: "Whole-slide image analysis, quality control, annotation and multimodal workflows",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_digital_pathology_pipeline/";
            },},{id: "projects-mufasa",
          title: 'MUFASA',
          description: "Information utility-aware preprocessing for computational pathology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_mufasa/";
            },},{id: "projects-triage-mil",
          title: 'TRIAGE-MIL',
          description: "Instance selection and semantic hypergraph modeling for WSI survival prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_triage_mil/";
            },},{id: "projects-gesture2music",
          title: 'Gesture2Music',
          description: "Low-latency real-time framework for continuous gesture-driven music generation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_gesture2music/";
            },},{id: "projects-industrial-anomaly-detection",
          title: 'Industrial Anomaly Detection',
          description: "Deep learning and spectral clustering for fabric defect detection and localization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_industrial_anomaly_detection/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%72%61%74%68%69%31@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/barathi-1993", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/barithi-subramanian", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=kJnV_74AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://profiles.stanford.edu/barathi-subramanian", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
