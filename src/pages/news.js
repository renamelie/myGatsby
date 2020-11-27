import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const NewsPage = ({ location }) => (
	<Layout location={location}>
		<SEO title="Page two" />
		<h1>Hi from the news page</h1>
		<p>Welcome to page news</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

NewsPage.propTypes = {
	location: PropTypes.object.isRequired,
}

export default NewsPage
