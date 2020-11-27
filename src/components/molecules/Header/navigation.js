import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'

import { navLinks } from '@config'

const Navigation = () => {
	return (
		<ul className={styles.list}>
			{navLinks.map(({ name }) => (
				<li key={name}>
					<Link to={`/${name}/`}>{name}</Link>
				</li>
			))}
		</ul>
	)
}

export default Navigation
