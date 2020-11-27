import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const FourPage = ({ location }) => (
	<Layout location={location}>
		<SEO title="Page two" />
		<h1>Hi from the page four</h1>
		<p>Welcome to page 4</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

FourPage.propTypes = {
	location: PropTypes.object.isRequired,
}

export default FourPage
