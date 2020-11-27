import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './layout.module.scss'

import { Header, Footer, LoaderSpin } from '@components'
import { GlobalContextProvider } from '@context'

const Layout = ({ children }) => {
	const isHome =
		typeof window !== 'undefined' && window.location.pathname === '/'
	const [isLoading, setIsLoading] = useState(isHome)

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [isLoading])

	return (
		<GlobalContextProvider>
			{isLoading && isHome ? (
				<LoaderSpin />
			) : (
				<div className={styles.contentLayout}>
					<Header siteTitle={data.site.siteMetadata.title || `Title`} />
					<div>
						<main className={styles.main}>{children}</main>
					</div>
					<Footer />
				</div>
			)}
		</GlobalContextProvider>
	)
}

Layout.propTypes = {
	location: PropTypes.object,
	children: PropTypes.node.isRequired,
}

export default Layout
