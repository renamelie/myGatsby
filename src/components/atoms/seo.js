import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
	const { pathname } = useLocation()
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						defaultTitle: title
						defaultDescription: description
						defaultImage: image
						author
						siteUrl
					}
				}
			}
		`
	)

	const {
		defaultTitle,
		defaultDescription,
		defaultImage,
		author,
		siteUrl,
	} = site.siteMetadata

	const seo = {
		title: title ? `${title} || ${defaultTitle}` : `${defaultTitle}`,
		description: description || defaultDescription,
		image: `${siteUrl}${defaultImage}`,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			defaultTitle={seo.title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
				{
					name: `description`,
					content: seo.description,
				},
				{
					name: `image`,
					content: seo.image,
				},
				{
					property: `og:title`,
					content: seo.title,
				},
				{
					property: `og:description`,
					content: seo.description,
				},
				{
					property: `og:image`,
					content: seo.image,
				},
				{
					property: `og:url`,
					content: seo.url,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: author || ``,
				},
				{
					name: `twitter:title`,
					content: seo.title,
				},
				{
					name: `twitter:description`,
					content: seo.description,
				},
				{
					name: `twitter:image`,
					content: seo.image,
				},
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO
