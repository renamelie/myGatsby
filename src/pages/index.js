import React from 'react'

import { Layout, SEO, Welcome, Story } from '@components'

// import styles from "./index.module.scss"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Welcome />
		<Story />
	</Layout>
)

export default IndexPage
