exports.config = {
  projectRoot: './src/app',
  outFolder: "dist/static",
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};
