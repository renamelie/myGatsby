import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const ContactPage = ({ location }) => (
	<Layout location={location}>
		<SEO title="Page two" />
		<h1>Hi from the contact page</h1>
		<p>Welcome to page contact</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

ContactPage.propTypes = {
	location: PropTypes.object.isRequired,
}

export default ContactPage
