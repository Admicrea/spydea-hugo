const purgecss = {
  content: ["./hugo_stats.json"],
  defaultExtractor: (content) => {
    const elements = JSON.parse(content).htmlElements;
    return [
      ...(elements.tags || []),
      ...(elements.classes || []),
      ...(elements.ids || []),
    ];
  },
  safelist: [
    /^swiper-/,
    /^lb-/,
    /^gl/,
    /^go/,
    /^gc/,
    /^gs/,
    /^gi/,
    /^desc/,
    /^zoom/,
    /^search/,
    /^:is/,
    /dark/,
    /show/,
    /header-fixed-top/,
    /data-aos/,
    /data-aos-delay/,
    /dragging/,
    /fullscreen/,
    /gzoomIn/,
    /gzoomOut/,
    /dragging-nav/,
    /gslide-container/,
    /loaded/,
    /visible/,
    /current/,
    /active/,
  ],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    "@fullhuman/postcss-purgecss":
      process.env.HUGO_ENVIRONMENT === "production" ? purgecss : false,
    autoprefixer: process.env.HUGO_ENVIRONMENT === "production" ? {} : false,
  },
};
