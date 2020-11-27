import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const ThreePage = ({ location }) => (
	<Layout location={location}>
		<SEO title="Page two" />
		<h1>Hi from the page three</h1>
		<p>Welcome to page 3</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

ThreePage.propTypes = {
	location: PropTypes.object.isRequired,
}

export default ThreePage
