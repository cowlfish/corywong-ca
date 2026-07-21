import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://corywong.ca/",
    title: "Cory Wong",
    description:
      "Cory Wong — writing about fitness, technology, and things worth paying attention to.",
    author: "Cory Wong",
    profile: "https://corywong.ca",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Toronto",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: false,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [],
  shareLinks: [],
});
