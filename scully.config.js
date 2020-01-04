exports.config = {
  projectRoot: './src/app',
  outFolder: "dist/static",
  routes: {
    '/episode/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './episodes',
      },
    },
  },
};
