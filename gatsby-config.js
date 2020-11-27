module.exports = {
	siteMetadata: {
		title: `myWebsite Tools`,
		description: `Website exemple`,
		author: `@meliecode`,
		siteUrl: `https://mygatsbytools.netlify.app/`,
		image: '/og.png',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/code.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': 'src/components',
					'@styles': 'src/styles',
					'@config': 'src/config',
					'@context': 'src/context',
				},
				extensions: [],
			},
		},
		`gatsby-plugin-offline`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
