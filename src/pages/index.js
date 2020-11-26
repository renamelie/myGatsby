import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO, Welcome, Story } from '@components'

// import styles from "./index.module.scss"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Welcome />
		<Story />
		<Link to="/page-2/">Go to page 2</Link> <br />
	</Layout>
)

export default IndexPage
