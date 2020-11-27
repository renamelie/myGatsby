import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const ThreePage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the page three</h1>
		<p>Welcome to page 3</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default ThreePage
