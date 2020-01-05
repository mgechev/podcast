exports.config = {
  projectRoot: './src/app',
  outFolder: "docs",
  routes: {
    '/episode/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './episodes',
      },
    },
  },
};
