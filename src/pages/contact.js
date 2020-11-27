import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const ContactPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the contact page</h1>
		<p>Welcome to page contact</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default ContactPage
