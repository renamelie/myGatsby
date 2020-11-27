import React from 'react'
import PropTypes from 'prop-types'

import { Layout, SEO, Welcome, Story } from '@components'

// import styles from "./index.module.scss"

const IndexPage = ({ location }) => (
	<Layout location={location}>
		<SEO title="Home" />
		<Welcome />
		<Story />
	</Layout>
)

IndexPage.propTypes = {
	location: PropTypes.object.isRequired,
}

export default IndexPage
