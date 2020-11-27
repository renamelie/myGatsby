import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const FivePage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the five page</h1>
		<p>Welcome to page 5</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default FivePage
