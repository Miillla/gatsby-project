module.exports = {
    siteMetadata: {
        siteUrl: `https://www.gatsby-project.com`,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-5T55R2G",
        
              // Include GTM in development.
              //
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: false,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              //
              // Defaults to null
              defaultDataLayer: { platform: "gatsby" },
        
              // Specify optional GTM environment details.
            //   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            //   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            //   dataLayerName: "YOUR_DATA_LAYER_NAME",
        
              // Name of the event that is triggered
              // on every Gatsby route change.
              //
              // Defaults to gatsby-route-change
              routeChangeEventName: "gatsby-route-change",
              // Defaults to false
              enableWebVitalsTracking: true,
              // Defaults to https://www.googletagmanager.com
            //   selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
            },
          },
    ]
}