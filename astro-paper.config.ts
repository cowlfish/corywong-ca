import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://corywong.ca/",
    title: "Cory Wong",
    description:
      "Cory Wong — real estate broker in Toronto. Writing about real estate, fitness, and tech.",
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
