import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the news page</h1>
		<p>Welcome to news page</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default SecondPage
