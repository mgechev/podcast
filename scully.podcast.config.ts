exports.config = {
  projectRoot: './src/app',
  outDir: "docs",
  routes: {
    '/episode/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './episodes',
      },
    },
  },
};
