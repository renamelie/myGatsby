import PropTypes from 'prop-types'
import React from 'react'

import { Logo } from '@components'
import { navLinks } from '@config'

import styles from './header.module.scss'

const Header = () => (
	<header>
		<Logo />
		<ul className={styles.list}>
			{navLinks.map(({ name }) => (
				<li key={name}>{name}</li>
			))}
		</ul>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
