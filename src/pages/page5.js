import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const FivePage = ({ location }) => (
	<Layout location={location}>
		<SEO title="Page two" />
		<h1>Hi from the five page</h1>
		<p>Welcome to page 5</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

FivePage.propTypes = {
	location: PropTypes.object.isRequired,
}

export default FivePage
