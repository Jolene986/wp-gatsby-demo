/* Project environment variables that you defined in the .env.* files will NOT be immediately available in your Node.js scripts. To use those variables, use npm package dotenv to examine the active .env.* file and attach those values. dotenv is already a dependency of Gatsby, so you can require it in your gatsby-config.js or gatsby-node.js like this: */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "WP Gatsby Mashup",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.WP_API_URL}`,
        // refetchInterval: 60, // remove in production
        type: {
          __all: {
            limit: process.env.NODE_ENV === `development` ? 50 : null,
          },
        },
      },
    },
  ],
};
