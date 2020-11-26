import PropTypes from 'prop-types'
import React from 'react'

import { Logo, Navigation, Menu } from '@components'

import styles from './header.module.scss'

const Header = () => (
	<header>
		<div className={styles.content}>
			<Logo />
			<Navigation />
			<Menu />
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
